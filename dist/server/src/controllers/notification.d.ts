/// <reference types="koa" />
declare const _default: ({ strapi, }: {
    strapi: import("@strapi/types/dist/core").Strapi;
}) => {
    findOne: (ctx: import("koa").Context) => Promise<{
        data: import("@strapi/types/dist/modules/documents").AnyDocument;
    }>;
    test: (ctx: import("koa").Context) => Promise<any>;
} & import("@strapi/types/dist/core/core-api/controller").Base;
export default _default;
