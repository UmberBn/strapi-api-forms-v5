import React, { ReactNode } from 'react';
export interface Field {
    i: string;
    label: string;
    name: string;
    placeholder: string;
    type: string;
    config?: {
        required?: boolean;
    };
}
export interface Block {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    field: Field;
}
export interface Layouts {
    [breakpoint: string]: Block[];
}
export interface Step {
    id: number;
    layouts: Layouts;
}
export interface State {
    id?: number;
    title?: string;
    steps: Step[];
    currentStep: number;
    successMessage: string;
    errorMessage: string;
    active: boolean;
    dateFrom: string;
    dateTill: string;
}
interface Action {
    type: string;
    payload: any;
}
export declare const FormProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useFormContext: () => {
    state: State;
    dispatch: React.Dispatch<Action>;
    removeState: () => State;
    steps: Step[];
    currentStep: number;
    currentLayouts: Layouts;
    currentBreakpoint: string;
    setCurrentBreakpoint: (breakpoint: string) => void;
    setCurrentStep: (step: number) => void;
    addStep: () => void;
    addBlock: (blockId?: string, field?: Field) => void;
    removeBlock: (blockId: string) => void;
    resizeBlock: (blockId: string) => void;
    moveBlock: (blockId: string, direction: 'prev' | 'next') => void;
    updateLayouts: (newLayouts: Layouts) => void;
};
export {};
