<template>
  <div>
    <label class="input-label font-medium" :for="computedId">{{ label }}</label>
    <div class="flex items-center justify-center w-full" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop">
      <label :for="computedId"
        class="flex flex-col h-40 w-full items-center justify-center border-2 mt-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
        :class="{
          'border-blue-500': isDragging,
          'border-red-500': error,
          'border-red-600': errorStyle
        }">

        <div class="flex flex-col items-center justify-center pt-8 pb-8">
          <slot name="icon">
            <img src="/assets/image/upload_icon.png" alt="Upload Icon" />
          </slot>
          <p class="mb-2 px-4 text-sm text-gray-500 mt-4 text-center">
            <slot name="label">
              <span class="font-semibold text-blue-800">آپلود کنید</span> یا فایل
              بکشید و رها کنید.
            </slot>
          </p>
          <p class="text-xs text-gray-500">
            <slot name="description"></slot>
          </p>
          <div v-if="fileNames.length > 0" class="mt-2 flex flex-wrap gap-3">
            <p v-for="(file, index) in fileNames" :key="index" class="text-sm max-w-3/4 text-blue-800">
              <span class="font-semibold">{{ file }}</span>
            </p>
          </div>
          <span v-if="error" class="error-message text-red-500">{{ error }}</span>
        </div>
        <input :id="computedId" type="file" class="hidden" :accept="accept" :multiple="multiple"
          @change="onFileChange" />
      </label>
    </div>

    <!-- Preview Section -->
    <div v-if="previews.length > 0" :class="props.multiple ? 'grid grid-cols-6 gap-4' : 'flex flex-col'">
      <div v-for="(preview, index) in previews" :key="index" class="relative">
        <img :src="preview" alt="Uploaded Preview" class="w-full h-40 object-cover border border-gray-300 rounded-md" />
        <button type="button" @click="removeFile(index)"
          class="absolute top-2 right-2 bg-gray-200 text-slate-500 text-sm px-2 py-1 rounded shadow hover:bg-gray-300">
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, defineExpose } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  accept: {
    type: String,
    default: 'image/*',
  },
  maxFileSize: {
    type: Number,
    default: 1 * 1024 * 1024, // Default 1 MB
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  errorStyle: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['file-change']);
const fileNames = ref<string[]>([]);
const error = ref<string | null>(null);
const previews = ref<string[]>([]);
const isDragging = ref<boolean>(false);

const computedId = computed(() => props.id || `upload-${Math.random().toString(36).substr(2, 9)}`);

// Handle file selection
const handleFiles = (files: FileList) => {
  fileNames.value = [];
  previews.value = [];
  error.value = null;

  Array.from(files).forEach((file) => {
    // Validate file size
    if (file.size > props.maxFileSize) {
      error.value = `حجم فایل نباید بیشتر از ${Math.ceil(props.maxFileSize / (1024 * 1024 * 1))} مگابایت باشد.`;
      return;
    }

    // Read and preview the image
    const reader = new FileReader();
    reader.onload = () => {
      previews.value.push(reader.result as string); // Set the image preview
    };
    reader.readAsDataURL(file);

    fileNames.value.push(file.name);
  });

  emit('file-change', Array.from(files));
};

// Handle file input change
const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    handleFiles(target.files);
  }
};

// Drag-and-Drop Handlers
const onDragOver = () => {
  isDragging.value = true;
};

const onDragLeave = () => {
  isDragging.value = false;
};

const onDrop = (event: DragEvent) => {
  isDragging.value = false;
  if (event.dataTransfer && event.dataTransfer.files.length > 0) {
    handleFiles(event.dataTransfer.files);
  }
};

const removeFile = (index: number) => {
  const removedFile = fileNames.value.splice(index, 1);
  previews.value.splice(index, 1);

  if (fileNames.value.length > 0) {
    const updatedFiles = fileNames.value.map((fileName, i) => {
      const file = new File([new Blob([previews.value[i]], { type: 'image/png' })], fileName);
      return file;
    });
    emit('file-change', updatedFiles);
  } else {
    emit('file-change', []);
  }
};



defineExpose({ removeFile });
</script>

<style scoped>
.error-message {
  font-size: 0.875rem;
  font-weight: bold;
}

.border-blue-500 {
  border-color: #3b82f6;
}

button {
  transition: background-color 0.2s ease-in-out;
}
</style>
