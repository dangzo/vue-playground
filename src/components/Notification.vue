<script lang="ts" setup>
import { useNotification } from '@/composables/useNotification';
import { Transition } from 'vue';

const { notification } = useNotification();
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div
      v-show="notification.isVisible"
      :class="`notification notification--${notification.type}`"
    >
      <p>
        {{ notification.message }}
      </p>
    </div>
  </Transition>
</template>

<style scoped lang="css">
.fade-enter-active {
  transition: opacity 0.2s ease;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.notification {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  &.notification--info {
    background-color: #e0f7fa;
    color: #00796b;
  }

  &.notification--success {
    background-color: #e8f5e9;
    color: #1b5e20;
  }

  &.notification--error {
    background-color: #ffebee;
    color: #b71c1c;
  }
}
</style>