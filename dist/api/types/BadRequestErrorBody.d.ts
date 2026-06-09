export interface BadRequestErrorBody {
    timestamp?: string | undefined;
    status?: number | undefined;
    error?: string | undefined;
    message?: string | undefined;
    path?: string | undefined;
}
