import fs from 'fs';
import path from 'path';
import { app } from 'electron';

const LOCK_FILE = path.join('pipeline.lock');

export async function acquireLock(): Promise<boolean> {
    try {
        // Try to create the lock file exclusively
        await fs.promises.writeFile(LOCK_FILE, process.pid.toString(), { flag: 'wx' });
        return true;
    } catch (err: any) {
        if (err.code === 'EEXIST') {
            // Check if the process that created the lock still exists
            try {
                const pid = parseInt(await fs.promises.readFile(LOCK_FILE, 'utf8'));
                process.kill(pid, 0); // Check if process exists
                return false; // Process still running
            } catch {
                // Stale lock - remove it and try again
                await fs.promises.unlink(LOCK_FILE);
                return acquireLock();
            }
        }
        throw err;
    }
}

export async function releaseLock(): Promise<void> {
    try {
        await fs.promises.unlink(LOCK_FILE);
    } catch (err: any) {
        if (err.code !== 'ENOENT') throw err;
    }
}

export async function withLock<T>(fn: () => Promise<T>): Promise<T> {
    const acquired = await acquireLock();
    if (!acquired) throw new Error('Could not acquire lock');

    try {
        return await fn();
    } finally {
        await releaseLock();
    }
}