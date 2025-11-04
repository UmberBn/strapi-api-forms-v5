import { FormType, NotificationType, SubmissionType } from '../../../admin/src/utils/types';
/**
 * Strapi 5 Email Notification Service
 */
declare const _default: {
    process(notification: NotificationType, submission: SubmissionType, form: FormType): Promise<void>;
};
export default _default;
