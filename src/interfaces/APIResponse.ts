import APIError from "./APIError";

export default interface APIResponse<T> {
    hasError: boolean;
    data: T | null;
    error: APIError | null;
}
