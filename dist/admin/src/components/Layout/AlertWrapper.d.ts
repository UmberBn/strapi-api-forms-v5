import { Dispatch, SetStateAction } from 'react';
type AlertWrapperProps = {
    variant: string;
    message?: string;
    toggleAlert: Dispatch<SetStateAction<boolean>>;
};
declare const AlertWrapper: {
    ({ variant, message, toggleAlert }: AlertWrapperProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        variant: string;
    };
};
export default AlertWrapper;
