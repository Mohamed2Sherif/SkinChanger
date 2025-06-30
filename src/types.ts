export type PipelineParams = Map<string, [string, boolean,string]>;
export type PriorityQueue = Map<number, PipelineParams>;

export interface PipelineEvent {
    type: 'primary' | 'secondary';
    params: PipelineParams;
}