declare const _default: {
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
export default _default;
