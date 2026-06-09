export interface TooManyRequestsErrorBody {
    timestamp?: string | undefined;
    status?: number | undefined;
    error?: string | undefined;
    message?: string | undefined;
    path?: string | undefined;
}
