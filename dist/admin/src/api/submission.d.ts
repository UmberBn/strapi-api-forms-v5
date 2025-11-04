import { SubmissionResponse, SubmissionsResponse } from '../utils/types';
declare const submissionRequests: {
    getSubmissions: (token: string, queryFilter?: object) => Promise<SubmissionsResponse>;
    getSubmission: (token: string, id: string) => Promise<SubmissionResponse>;
};
export default submissionRequests;
