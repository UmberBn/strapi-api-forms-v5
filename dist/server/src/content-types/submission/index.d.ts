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
export default _default;
