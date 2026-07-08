import { ref } from 'vue';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';
export type Notification = {
  isVisible: boolean;
  type: NotificationType;
  message: string;
};


// State to control the visibility of the notification
const notification = ref<Notification>({
  isVisible: false,
  type: 'info',
  message: '',
});

const useNotification = () => {
  // Function to display a notification
  const showNotification = ({ message, type }: { message: string; type: NotificationType }) => {
    // Implementation for displaying notification
    notification.value.isVisible = true;
    notification.value.type = type;
    notification.value.message = message;

    setTimeout(() => {
      notification.value.isVisible = false;
    }, 3000); // Hide notification after 3 seconds
  };

  return {
    notification,
    showNotification,
  };
};

export { useNotification };