interface IError extends Error {
    message: string;
    code?: number;
    error?: string;
}
export default IError