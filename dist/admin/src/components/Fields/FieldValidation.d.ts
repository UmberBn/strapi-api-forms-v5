import { FieldTypeEnum } from '../../utils/enums';
import { FieldConfigProps } from '../../utils/types';
type FieldValidationProps = {
    field: FieldTypeEnum;
    config: FieldConfigProps;
    setConfig: (props: any) => void;
};
declare const FieldValidation: ({ field, config, setConfig }: FieldValidationProps) => import("react/jsx-runtime").JSX.Element;
export default FieldValidation;
