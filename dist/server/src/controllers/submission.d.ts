/// <reference types="koa" />
declare const _default: ({ strapi, }: {
    strapi: import("@strapi/types/dist/core").Strapi;
}) => {
    post: (ctx: import("koa").Context) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument | import("koa").Context>;
    export: (ctx: import("koa").Context) => Promise<{
        data: any;
        filename: string;
    }>;
} & import("@strapi/types/dist/core/core-api/controller").Base;
export default _default;
