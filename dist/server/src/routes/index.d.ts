declare const _default: {
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
export default _default;
