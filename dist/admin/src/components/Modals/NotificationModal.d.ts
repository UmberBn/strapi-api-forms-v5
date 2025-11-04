import { NotificationType } from '../../utils/types';
interface ModalProps {
    formId: number;
    currentNotification: NotificationType;
    isModalVisible: boolean;
    setModalIsVisible: Function;
}
declare const NotificationModal: ({ formId, currentNotification, isModalVisible, setModalIsVisible, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default NotificationModal;
