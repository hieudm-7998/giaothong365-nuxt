<template>
    <div class="pt-20 lg:pt-[97px]">
        <swiper-container slidesPerView="1">
            <swiper-slide>
                <img src="/images/tra-cuu-1.png" alt="" class="block mx-auto" />
            </swiper-slide>
            <swiper-slide>
                <img src="/images/tra-cuu-2.png" alt="" class="block mx-auto" />
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script setup>
const isDesktop = useMediaQuery('(min-width: 960px)')
</script>