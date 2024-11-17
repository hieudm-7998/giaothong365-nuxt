<template>
    <div class="flex items-center justify-center space-x-2 mt-4">
        <!-- Previous Button -->
        <button class="px-3 py-1 bg-gray-200 text-gray-500 rounded-lg hover:bg-gray-300" aria-label="Previous Page"
            @click="goToPreviousPage">
            Trước
        </button>

        <!-- Page Numbers -->
        <button v-for="page in totalPages" :key="page" class="px-3 py-1 rounded-lg" :class="{
            'text-primary font-bold': currentPage === page,
            'bg-gray-200 text-gray-500 hover:bg-gray-300': currentPage !== page
        }" @click="goToPage(page)">
            {{ page }}
        </button>

        <!-- Next Button -->
        <button class="px-3 py-1 bg-gray-200 text-gray-500 rounded-lg hover:bg-gray-300" aria-label="Next Page"
            @click="goToNextPage">
            Sau
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const totalPages = 5;
const currentPage = ref(1);

// Function to navigate to the previous page
const goToPreviousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

// Function to navigate to a specific page
const goToPage = (page) => {
    currentPage.value = page;
};

// Function to navigate to the next page
const goToNextPage = () => {
    if (currentPage.value < totalPages) {
        currentPage.value++;
    }
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>