<script lang="ts" setup>
import { useNotification } from '@/composables/useNotification';

const { notifications, closeNotification } = useNotification();
</script>

<template>
  <div class="notification-stack" aria-live="polite" aria-atomic="false">
    <TransitionGroup name="toast" tag="div" class="notification-stack__list">
      <div
        v-for="notification in notifications"
        v-show="notification.isVisible"
        :key="notification.id"
        :class="`notification notification--${notification.type}`"
      >
        <p class="notification__message">
          {{ notification.message }}
        </p>

        <button
          v-if="notification.dismissible"
          class="notification__close"
          type="button"
          aria-label="Dismiss notification"
          @click="closeNotification(notification.id)"
        >
          x
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="css">
.notification-stack {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  pointer-events: none;
}

.notification-stack__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.toast-move {
  transition: transform 0.18s ease;
}

.notification {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 280px;
  max-width: 380px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
}

.notification__message {
  margin: 0;
  flex: 1;
}

.notification__close {
  border: 0;
  border-radius: 0.25rem;
  background: transparent;
  cursor: pointer;
  color: inherit;
  line-height: 1;
  font-size: 1rem;
  padding: 0.125rem 0.25rem;
}

.notification--info {
  background-color: #e0f7fa;
  color: #00796b;
}

.notification--success {
  background-color: #e8f5e9;
  color: #1b5e20;
}

.notification--error {
  background-color: #ffebee;
  color: #b71c1c;
}

.notification--warning {
  background-color: #fff8e1;
  color: #bf360c;
}
</style>
