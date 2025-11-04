import { NotificationRequest, NotificationType } from '../utils/types';
declare const notificationRequests: {
    update: (token: string, id: any, formData?: object) => Promise<NotificationRequest>;
    get: (token: string, id: string) => Promise<NotificationType>;
    test: (token: string, id: string) => Promise<any>;
};
export default notificationRequests;
