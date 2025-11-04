declare const _default: ({ strapi, }: {
    strapi: import("@strapi/types/dist/core").Strapi;
}) => {
    process: (handler: any, submission: any, form: any) => Promise<any>;
} & import("@strapi/types/dist/core/core-api/service").Base;
export default _default;
