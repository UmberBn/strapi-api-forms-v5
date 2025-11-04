/// <reference types="koa" />
declare const _default: {
    form: ({ strapi, }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        findOne: (ctx: import("koa").Context) => Promise<{
            data: import("@strapi/types/dist/modules/documents").AnyDocument;
        }>;
        settings: (ctx: import("koa").Context) => Promise<{
            data: {
                settings: unknown;
            };
        }>;
        generate: (ctx: import("koa").Context) => Promise<any>;
        update: (ctx: import("koa").Context) => Promise<{
            response: import("@strapi/types/dist/modules/documents").AnyDocument;
        }>;
        delete: (ctx: import("koa").Context) => Promise<{
            documentId: string;
            entries: import("@strapi/types/dist/modules/documents").AnyDocument[];
        }>;
        getFormConfig: (ctx: import("koa").Context) => Promise<any>;
    } & import("@strapi/types/dist/core/core-api/controller").Base;
    submission: ({ strapi, }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        post: (ctx: import("koa").Context) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument | import("koa").Context>;
        export: (ctx: import("koa").Context) => Promise<{
            data: any;
            filename: string;
        }>;
    } & import("@strapi/types/dist/core/core-api/controller").Base;
    notification: ({ strapi, }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        findOne: (ctx: import("koa").Context) => Promise<{
            data: import("@strapi/types/dist/modules/documents").AnyDocument;
        }>;
        test: (ctx: import("koa").Context) => Promise<any>;
    } & import("@strapi/types/dist/core/core-api/controller").Base;
};
export default _default;
