import { ref } from 'vue';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';
export type Notification = {
  id: string;
  isVisible: boolean;
  type: NotificationType;
  message: string;
  duration: number;
  dismissible: boolean;
  createdAt: number;
};

type ShowNotificationPayload = {
  message: string;
  type: NotificationType;
  duration?: number;
  dismissible?: boolean;
};

const DEFAULT_DURATION = 3000;
const MAX_VISIBLE_TOASTS = 3;
const LEAVE_ANIMATION_MS = 180;

const pendingQueue = ref<Notification[]>([]);
const visibleNotifications = ref<Notification[]>([]);
const dismissTimers = new Map<string, ReturnType<typeof setTimeout>>();

const clearDismissTimer = (id: string) => {
  const existingTimer = dismissTimers.get(id);

  if (!existingTimer) {
    return;
  }

  clearTimeout(existingTimer);
  dismissTimers.delete(id);
};

const removeNotification = (id: string) => {
  pendingQueue.value = pendingQueue.value.filter((item) => item.id !== id);
  visibleNotifications.value = visibleNotifications.value.filter((item) => item.id !== id);
};

const closeNotification = (id: string) => {
  const target = visibleNotifications.value.find((item) => item.id === id);

  if (!target) {
    removeNotification(id);
    return;
  }

  target.isVisible = false;
  clearDismissTimer(id);

  setTimeout(() => {
    removeNotification(id);
    processQueue();
  }, LEAVE_ANIMATION_MS);
};

const scheduleAutoDismiss = (notification: Notification) => {
  if (notification.duration <= 0) {
    return;
  }

  const timeout = setTimeout(() => {
    closeNotification(notification.id);
  }, notification.duration);

  dismissTimers.set(notification.id, timeout);
};

const processQueue = () => {
  while (
    visibleNotifications.value.length < MAX_VISIBLE_TOASTS
    && pendingQueue.value.length > 0
  ) {
    const next = pendingQueue.value.shift();

    if (!next) {
      break;
    }

    visibleNotifications.value.push(next);
    scheduleAutoDismiss(next);
  }
};

const useNotification = () => {
  const showNotification = ({
    message,
    type,
    duration = DEFAULT_DURATION,
    dismissible = true,
  }: ShowNotificationPayload) => {
    pendingQueue.value.push({
      id: crypto.randomUUID(),
      isVisible: true,
      type,
      message,
      duration,
      dismissible,
      createdAt: Date.now(),
    });

    processQueue();
  };

  return {
    notifications: visibleNotifications,
    showNotification,
    closeNotification,
  };
};

export { useNotification };