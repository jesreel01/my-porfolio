export type ActionType<T> = {
    success: boolean;
    data?: T;
    error?: string;
    validationErrors?: {
        [key: string]: string[] 
    }
} | null;