import React from 'react';
import { FieldActionsEnum } from '../../utils/enums';
interface FieldModalProps {
    action: FieldActionsEnum;
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
    currentField?: any;
    setCurrentField: (field: any) => void;
}
declare const FieldModal: React.FC<FieldModalProps>;
export default FieldModal;
