declare const _default: ({ strapi, }: {
    strapi: import("@strapi/types/dist/core").Strapi;
}) => {
    export: (formId: any) => Promise<string>;
    upload: (file: any) => Promise<any>;
} & import("@strapi/types/dist/core/core-api/service").Base;
export default _default;
