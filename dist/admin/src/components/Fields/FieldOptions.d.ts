import { FieldConfigProps } from '../../utils/types';
import { FieldTypeEnum } from '../../utils/enums';
type FieldOptions = {
    field: FieldTypeEnum;
    config: FieldConfigProps;
    options: string;
    setOptions: (props: any) => void;
    setConfig: (props: any) => void;
};
declare const FieldOptions: ({ field, config, setConfig, options, setOptions }: FieldOptions) => import("react/jsx-runtime").JSX.Element;
export default FieldOptions;
