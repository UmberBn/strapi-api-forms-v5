declare const fetchInstance: (endpoint: string, token: string, method: string, options?: object | null, formData?: object | null, isAdmin?: boolean) => Promise<Response>;
export default fetchInstance;
