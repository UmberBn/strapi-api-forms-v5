import React from 'react';
import { Block } from '../../context/FormContext';
interface RichTextFieldProps {
    value: string;
    onChange: (value: string) => void;
    availableFields: Block[];
}
declare const RichTextField: React.FC<RichTextFieldProps>;
export default RichTextField;
