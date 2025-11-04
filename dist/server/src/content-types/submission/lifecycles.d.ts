declare const _default: {
    /**
     * Before creating a submission, validate and remove spam attempts.
     */
    beforeCreate(event: any): Promise<void>;
    /**
     * After creating a submission, process notifications.
     */
    afterCreate(event: any): Promise<void>;
};
export default _default;
