<template>
  <div 
    v-if="isVisible"
    class="fixed inset-0 z-10000 flex items-center justify-center bg-black/50 p-4"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="titleId"
    @keydown.esc="handleEscape"
    @click="handleOverlayClick"
  >
    <!-- Modal Content -->
    <div 
      class="overflow-auto max-h-[90vh] rounded-lg shadow-lg relative w-full max-w-lg"
      :class="paddingClass"
      @click.stop
      ref="modalContent"
    >
      <!-- Close Button -->
      <button 
        v-if="closePosition !== 'none'"
        class="absolute hover:bg-gray-100 rounded-md p-1 mb-6 transition-colors"
        :class="closeButtonClasses"
        @click="closeModal"
        aria-label="Close modal"
      >
        <img src="/assets/icon/x.svg" alt="Close" />
      </button>
      
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onUnmounted } from 'vue';

const props = defineProps({
  show: { type: Boolean, default: false },
  closePosition: { type: String, default: 'top-right', validator: val => ['top-right','top-left','bottom-center','none'].includes(val) },
  closeOnClickOutside: { type: Boolean, default: true },
  closeOnEsc: { type: Boolean, default: true },
  titleId: { type: String, default: '' },
  padding: { type: String, default: 'p-6 bg-white' }
});

const emit = defineEmits(['update:show','close']);

const isVisible = ref(props.show);
const modalContent = ref(null);

const paddingClass = computed(() => props.padding);

const closeButtonClasses = computed(() => {
  const base = 'flex items-center justify-center w-8 h-8';
  switch(props.closePosition) {
    case 'top-left': return `${base} top-6 left-6`;
    case 'bottom-center': return `${base} bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md`;
    default: return `${base} top-2 right-2`; // top-right
  }
});

// Watch show prop
watch(() => props.show, val => {
  isVisible.value = val;
  document.body.style.overflow = val ? 'hidden' : '';
});

// Handle click on overlay
const handleOverlayClick = (event) => {
  if (props.closeOnClickOutside) {
    closeModal();
  }
};

// Handle Escape key
const handleEscape = (event) => {
  if (props.closeOnEsc && event.key === 'Escape') closeModal();
};

// Close modal
const closeModal = () => {
  isVisible.value = false;
  emit('update:show', false);
  emit('close');
  document.body.style.overflow = '';
};

// Cleanup
onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
.z-10000 {
  z-index: 1000;
}

/* Animation for modal appearance */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-content-enter-active,
.modal-content-leave-active {
  transition: all 0.3s ease;
}

.modal-content-enter-from,
.modal-content-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>


<style scoped>
.z-10000 {
  z-index: 1000;
}

/* Animation for modal appearance */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-content-enter-active,
.modal-content-leave-active {
  transition: all 0.3s ease;
}

.modal-content-enter-from,
.modal-content-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>