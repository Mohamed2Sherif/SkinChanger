
declare global {
    interface Window {
        electron: {
            get_champions: () => Promise<any>;
            // Add other methods that you expose through the contextBridge
        };
    }
}

// This ensures the file is treated as a module
export {};