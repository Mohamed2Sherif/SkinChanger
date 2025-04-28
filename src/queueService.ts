import { PriorityQueue, PipelineParams, PipelineEvent } from './types';
import { EventEmitter } from 'events';
import {injector_pipeline} from "./skinInjector";
import {withLock} from "./lockService";
export const emitter = new EventEmitter();
class QueueService {
    private queue: PriorityQueue = new Map();
    private emitter = emitter
    private isProcessing = false;
    private readonly PRIMARY_PRIORITY = 1;
    private readonly SECONDARY_PRIORITY = 2;

    constructor() {
        this.startProcessor();
    }

    public addToQueue(params: PipelineParams, isPrimary: boolean): void {
        const priority = isPrimary ? this.PRIMARY_PRIORITY : this.SECONDARY_PRIORITY;

        // For primary, override existing primary if any
        if (isPrimary && this.queue.has(this.PRIMARY_PRIORITY)) {
            this.queue.delete(this.PRIMARY_PRIORITY);
        }

        this.queue.set(priority, params);
        this.emitter.emit('queueChanged');
    }

    public getNext(): PipelineParams | undefined {
        if (this.queue.size === 0) return undefined;

        // Get the highest priority (lowest number)
        const highestPriority = Math.min(...this.queue.keys());
        const params = this.queue.get(highestPriority);
        this.queue.delete(highestPriority);

        return params;
    }

    private async startProcessor(): Promise<void> {
        this.emitter.on('queueChanged', async () => {
            if (!this.isProcessing) {
                await this.processQueue();
            }
        });
    }

    private async processQueue(): Promise<void> {
        this.isProcessing = true;

        try {
            let nextParams = this.getNext();
            while (nextParams) {
                await this.executePipeline(nextParams);
                nextParams = this.getNext();
            }
        } finally {
            this.isProcessing = false;
        }
    }

    private async executePipeline(params: PipelineParams): Promise<boolean> {
        // Implement your pipeline execution with lock
        try {
            return await withLock(async () => {
                try {
                    const result = await injector_pipeline(params);
                    if (!result) {
                        console.error('Pipeline execution returned false',result);
                        this.emitter.emit("skin_injection_failed")
                        return false;
                    }
                    this.emitter.emit("skin_injection_success")
                    return true;
                } catch (error) {
                    console.error('Pipeline execution failed:', error);
                    return false;
                }
            });
        } catch (lockError) {
            console.error('Failed to acquire lock:', lockError);
            return false;
        }

    }
}

export const queueService = new QueueService();