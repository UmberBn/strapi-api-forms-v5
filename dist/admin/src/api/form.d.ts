import { FormRequest, FormResponse, FormType, MessageType } from '../utils/types';
declare const formRequests: {
    getSettings: (token: string) => Promise<any>;
    getForms: (token: string, queryFilter?: object) => Promise<FormResponse>;
    getForm: (token: string, id: string | number, queryFilter?: object) => Promise<FormType>;
    getMessage: (id: string | number) => Promise<MessageType>;
    getFormSubmissions: (id: string, queryFilter?: object) => Promise<FormType>;
    generateForm: (token: string, formData?: object) => Promise<any>;
    submitForm: (token: string, formData?: object) => Promise<FormRequest>;
    updateForm: (token: string, documentId: string, formData?: object) => Promise<FormType[]>;
    deleteForm: (token: string, documentId: string) => Promise<any>;
};
export default formRequests;
