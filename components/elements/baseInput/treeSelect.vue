<template>
  <div class="tree-select mb-6">
    <!-- Dropdown Header -->
    <div class="dropdown-select" @click="toggleDropdown">
      <span>{{ selectedLabel || 'انتخاب دسته‌بندی‌ها' }}</span>
    </div>

    <!-- Dropdown Menu -->
    <div v-show="isDropdownVisible" class="dropdown-menu">
      <div v-for="(parent, index) in treeData" :key="index">
        <div class="flex">
          <!-- Parent Checkbox -->
          <span :class="['icon', parent.childrenVisible ? 'open' : '']" @click="toggleChildren(parent)">
            <img width="10px" src="/assets/icon/down-arrow.svg" alt="toggle" />
          </span>
          <label :for="parent.slug">
            <input type="checkbox" :id="parent.slug" v-model="parent.checked" @change="handleParentChange(parent)" />
            {{ parent.title }}
          </label>
        </div>

        <!-- Child Checkboxes -->
        <div v-if="parent.childrenVisible" class="child-checkboxes mr-4 mt-2">
          <div v-for="(child, childIndex) in parent.children" :key="childIndex">
            <div class="flex mt-1 mb-2">
              <span :class="['icon', child.childrenVisible ? 'open' : '']" @click="toggleChildren(child)">
                <img width="10px" src="/assets/icon/down-arrow.svg" alt="toggle" />
              </span>
              <label :for="child.slug">
                <input type="checkbox" :id="child.slug" v-model="child.checked" @change="handleChildChange(child)" />
                {{ child.title }}
              </label>
            </div>

            <!-- Grandchild Checkboxes -->
            <div v-if="child.childrenVisible" class="grandchild-checkboxes mr-8 mt-2">
              <div class="mt-1 mb-2" v-for="(grandchild, grandchildIndex) in child.children" :key="grandchildIndex">
                <label>
                  <input type="checkbox" v-model="grandchild.checked" @change="handleGrandchildChange(grandchild)" />
                  {{ grandchild.title }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// State for the dropdown visibility and tree data
const isDropdownVisible = ref(false);
const selectedLabel = ref('');
const treeData = ref([]);

// Method to load JSON data from a local file
const loadData = async () => {
  try {
    const response = await fetch('/data/categories.json'); // Adjust the path to where the JSON file is located
    const data = await response.json();
    treeData.value = data.categories;
    initializeTreeData(treeData.value); // Initialize extra properties
    assignChildrenToParents(treeData.value); // Assign children based on parent_slug
  } catch (error) {
    console.error('Error loading tree data:', error);
  }
};

// Initialize the tree data with default properties
const initializeTreeData = (data) => {
  data.forEach((node) => {
    node.childrenVisible = node.childrenVisible || false;
    node.checked = node.checked || false;
    if (node.children) initializeTreeData(node.children);
  });
};

// Function to assign children based on parent_slug
const assignChildrenToParents = (data) => {
  const slugMap = {}; // To store nodes by their slug

  // Create a map of all nodes by their slug
  data.forEach((node) => {
    slugMap[node.slug] = node;
  });

  // Now loop through the nodes again to assign children based on parent_slug
  data.forEach((node) => {
    if (node.parent_slug) {
      const parent = slugMap[node.parent_slug]; // Get the parent by parent_slug
      if (parent) {
        // If the parent exists, assign this node as its child
        parent.children = parent.children || [];
        parent.children.push(node);
      }
    }
  });
};

// Load tree data when the component is mounted
onMounted(() => {
  loadData();
});

// Method to toggle dropdown visibility
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

// Method to toggle visibility of children based on parent checkbox
const toggleChildren = (node) => {
  if (node?.children) {
    node.childrenVisible = !node.childrenVisible;
  }
};

// Method to handle parent checkbox changes (only one selection allowed from all checkboxes)
const handleParentChange = (parent) => {
  deselectAll();
  parent.checked = true;
  updateParentLabel();
};

// Method to handle child checkbox changes (only one selection allowed from all checkboxes)
const handleChildChange = (child) => {
  deselectAll();
  child.checked = true;
  updateParentLabel();
};

// Method to handle grandchild checkbox changes (only one selection allowed from all checkboxes)
const handleGrandchildChange = (grandchild) => {
  deselectAll();
  grandchild.checked = true;
  updateParentLabel();
};

// Method to deselect all checkboxes
const deselectAll = () => {
  treeData.value.forEach((parent) => {
    parent.checked = false;
    parent.children?.forEach((child) => {
      child.checked = false;
      child.children?.forEach((grandchild) => (grandchild.checked = false));
    });
  });
};

// Computed property to dynamically set the selected label based on checked nodes
const updateParentLabel = () => {
  const selected = [];
  treeData.value.forEach((parent) => {
    if (parent.checked) selected.push(parent.title);
    parent.children?.forEach((child) => {
      if (child.checked) selected.push(child.title);
      child.children?.forEach((grandchild) => {
        if (grandchild.checked) selected.push(grandchild.title);
      });
    });
  });
  selectedLabel.value = selected.join(', ') || 'انتخاب دسته‌بندی‌ها';
};

// Click outside handler to close the dropdown
const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.tree-select');
  if (dropdown && !dropdown.contains(event.target)) {
    isDropdownVisible.value = false;
  }
};

// Add global click event listener to handle clicks outside the dropdown
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Styling for the dropdown */
.tree-select {
  position: relative;
}

.dropdown-select {
  cursor: pointer;
  padding: 10px;
  color: var(--color-base-black);
  border-radius: 5px;
  border: 1px solid #ddd;
}

.dropdown-menu {
  position: absolute;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
}

.icon {
  cursor: pointer;
  margin-right: 5px;
  margin-top: 6px;
}

.icon.open img {
  transform: rotate(90deg); /* Rotate the icon when expanded */
}

.child-checkboxes,
.grandchild-checkboxes {
  padding-left: 20px;
}
.z-1000 {
  z-index: 1000;
}
input[type="checkbox"] {
  margin-right: 10px;
}
</style>
