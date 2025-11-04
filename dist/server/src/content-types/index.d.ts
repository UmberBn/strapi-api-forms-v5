declare const _default: {
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
export default _default;
