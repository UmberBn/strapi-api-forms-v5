declare const _default: {
    form: ({ strapi, }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => Partial<import("@strapi/types/dist/core/core-api/service").Base> & import("@strapi/types/dist/core/core-api/service").Generic & import("@strapi/types/dist/core/core-api/service").Base;
    submission: ({ strapi, }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        export: (formId: any) => Promise<string>;
        upload: (file: any) => Promise<any>;
    } & import("@strapi/types/dist/core/core-api/service").Base;
    notification: ({ strapi, }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        process: (handler: any, submission: any, form: any) => Promise<any>;
    } & import("@strapi/types/dist/core/core-api/service").Base;
    emailService: {
        process(notification: import("../../../admin/src/utils/types").NotificationType, submission: import("../../../admin/src/utils/types").SubmissionType, form: import("../../../admin/src/utils/types").FormType): Promise<void>;
    };
};
export default _default;
