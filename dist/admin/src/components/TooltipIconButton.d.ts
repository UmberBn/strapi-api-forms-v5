/// <reference types="react" />
interface TooltipIconButtonProps {
    children: React.ReactNode;
    label: string | undefined;
    variant: string;
    onClick?: () => void;
    disabled: boolean;
    showBorder?: boolean;
    className?: string;
}
declare const TooltipIconButton: ({ children, label, variant, onClick, disabled, className, showBorder, }: TooltipIconButtonProps) => import("react/jsx-runtime").JSX.Element;
export default TooltipIconButton;
