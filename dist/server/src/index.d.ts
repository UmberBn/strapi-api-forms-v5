/// <reference types="koa" />
declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    destroy: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    config: {
        default: {};
        validator(): void;
    };
    controllers: {
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
    routes: {
        'content-api': {
            type: string;
            routes: {
                method: string;
                path: string;
                handler: string;
            }[];
        };
        admin: {
            type: string;
            routes: {
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: string[];
                };
            }[];
        };
    };
    services: {
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
            process(notification: import("../../admin/src/utils/types").NotificationType, submission: import("../../admin/src/utils/types").SubmissionType, form: import("../../admin/src/utils/types").FormType): Promise<void>;
        };
    };
    contentTypes: {
        submission: {
            schema: {
                kind: string;
                collectionName: string;
                info: {
                    singularName: string;
                    pluralName: string;
                    displayName: string;
                };
                pluginOptions: {
                    "content-manager": {
                        visible: boolean;
                    };
                    "content-type-builder": {
                        visible: boolean;
                    };
                };
                options: {
                    draftAndPublish: boolean;
                    privateAttributes: string[];
                };
                attributes: {
                    submission: {
                        type: string;
                    };
                    files: {
                        type: string;
                        multiple: boolean;
                    };
                    form: {
                        type: string;
                        relation: string;
                        target: string;
                        inversedBy: string;
                    };
                };
            };
            lifecycles: {
                beforeCreate(event: any): Promise<void>;
                afterCreate(event: any): Promise<void>;
            };
        };
        notification: {
            schema: {
                kind: string;
                collectionName: string;
                info: {
                    singularName: string;
                    pluralName: string;
                    displayName: string;
                };
                pluginOptions: {
                    "content-manager": {
                        visible: boolean;
                    };
                    "content-type-builder": {
                        visible: boolean;
                    };
                };
                options: {
                    draftAndPublish: boolean;
                    privateAttributes: string[];
                };
                attributes: {
                    from: {
                        type: string;
                    };
                    to: {
                        type: string;
                    };
                    subject: {
                        type: string;
                    };
                    message: {
                        type: string;
                        default: string;
                    };
                    enabled: {
                        type: string;
                    };
                    identifier: {
                        type: string;
                        enum: string[];
                        default: string;
                    };
                    service: {
                        type: string;
                        default: string;
                    };
                    form: {
                        type: string;
                        relation: string;
                        target: string;
                        inversedBy: string;
                    };
                };
            };
        };
        form: {
            schema: {
                kind: string;
                collectionName: string;
                info: {
                    singularName: string;
                    pluralName: string;
                    displayName: string;
                };
                pluginOptions: {
                    "content-manager": {
                        visible: boolean;
                    };
                    "content-type-builder": {
                        visible: boolean;
                    };
                };
                options: {
                    draftAndPublish: boolean;
                };
                attributes: {
                    title: {
                        type: string;
                    };
                    successMessage: {
                        type: string;
                        required: boolean;
                    };
                    errorMessage: {
                        type: string;
                        required: boolean;
                    };
                    active: {
                        type: string;
                        default: boolean;
                    };
                    dateFrom: {
                        type: string;
                    };
                    dateTill: {
                        type: string;
                    };
                    steps: {
                        type: string;
                    };
                    submissions: {
                        type: string;
                        relation: string;
                        target: string;
                        mappedBy: string;
                    };
                    notifications: {
                        type: string;
                        relation: string;
                        target: string;
                        mappedBy: string;
                    };
                };
            };
            lifecycles: {
                afterCreate(event: any): Promise<({
                    id: import("@strapi/types/dist/data").ID;
                } & {
                    [key: string]: any;
                })[]>;
            };
        };
    };
    policies: {};
    middlewares: {};
};
export default _default;
