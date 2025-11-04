import { Block, Field } from '../context/FormContext';
interface Layouts {
    [breakpoint: string]: Block[];
}
export declare const useBlockOperations: (layouts: Layouts, updateLayouts: (newLayouts: Layouts) => void, currentBreakpoint: string) => {
    addBlock: (newBlockId?: string, field?: Field) => void;
    resizeBlock: (blockId: string) => void;
    moveBlock: (blockId: string, direction: 'next' | 'prev') => void;
    removeBlock: (blockId: string) => void;
    addFieldToBlock: (blockId: string, field: Field) => void;
    removeFieldFromBlock: (blockId: string, fieldId: string) => void;
};
export {};
