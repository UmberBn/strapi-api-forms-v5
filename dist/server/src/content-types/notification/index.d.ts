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
export default _default;
