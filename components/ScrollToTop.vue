<template>
    <button v-if="isScrolling" @click="scrollToTop"
        class="fixed bottom-36 right-5 h-10 w-10 flex items-center justify-center flex-col border-solid border-gray-200 bg-white border-[1px] z-30 rounded-full hover:cursor-pointer hover:shadow-md hover:opacity-85 transition-all">
        <LucideChevronUp />
    </button>
</template>

<script setup>
const isScrolling = ref(false);

const handleScroll = () => {
    isScrolling.value = window.scrollY !== 0;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>