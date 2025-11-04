import { SubmissionType } from '../../admin/src/utils/types';
/**
 * Validate email format
 */
declare function validateEmail(emails: string): boolean;
/**
 * Retrieve value from submission fields
 */
declare function getValueFromSubmissionByKey(key: string, submission: any): string;
/**
 * Replace placeholders in the email template
 */
declare function replaceDynamicVariables(message: string, submission: any): string;
/**
 * Process file attachments for email
 */
declare function getFiles(submission: SubmissionType, provider: string): Promise<any[]>;
export { validateEmail, getValueFromSubmissionByKey, replaceDynamicVariables, getFiles };
