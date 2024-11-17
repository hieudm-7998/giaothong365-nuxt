<template>
    <div class="container lg:max-w-[1024px] pt-20 lg:pt-[97px]">
        <div class="py-10">
            <h1 class="text-center text-2xl font-semibold text-[#0d47a1] mb-6">
                Đối tác của Giao thông 365
            </h1>
            <div class="mb-5 relative">
                <input class="w-full py-1 px-4 border-solid border-[1px] border-primary rounded-md mb-3"
                    placeholder="Tìm thương hiệu" />
                <swiper-container class="swiper-containerr" :space-between="20" ref="containerRef">
                    <swiper-slide v-for="(item, index) in btns" :key="index" class="!w-[248px]">
                        <button :key="index" :class="[
                            selected === item ? '!bg-[#da9956]' : '',
                            'mb-[2px] block w-full py-1 px-3 text-center bg-[#0d47a1] rounded-xl text-white transition-all'
                        ]" @click="setSelected(item)">
                            {{ item }}
                        </button>
                    </swiper-slide>
                </swiper-container>
                <button class="absolute left-0 top-[53px] lg:top-[54px] hover:opacity-80 transition-all w-4 h-4 z-[999] flex flex-col justify-center bg-primary rounded-full"
                    @click="swiper.prev()">
                    <LucideChevronLeft class="text-white w-4 h-4" />
                </button>
                <!-- Go forward one slide -->
                <button class="absolute right-0 top-[53px] lg:top-[54px] hover:opacity-80 transition-all w-4 h-4 z-[999] flex flex-col justify-center bg-primary rounded-full"
                    @click="swiper.next()">
                    <LucideChevronRight class="text-white w-4 h-4" />
                </button>
            </div>
            <div>
                <h1 class="text-2xl font-semibold text-[#0d47a1]">
                    Thương hiệu hợp tác
                </h1>
                <div class="grid grid-cols-3 lg:grid-cols-5">
                    <div>
                        <img src="/images/vni-logo.png" alt="" class="block mx-auto" />
                    </div>
                    <div>
                        <img src="/images/mic-logo.png" alt="" class="block mx-auto" />
                    </div>
                    <div>
                        <img src="/images/pvi-logo.png" alt="" class="block mx-auto" />
                    </div>
                    <div>
                        <img src="/images/tasco-logo.png" alt="" class="block mx-auto" />
                    </div>
                    <div>
                        <img src="/images/pti-logo.png" alt="" class="block mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const containerRef = ref(null)
const swiper = useSwiper(containerRef)

const btns = [
    "Tất cả",
    "Tài chính",
    "Bảo hiểm",
    "Thể thao",
    "Sức khoẻ",
    "Công nghệ",
    "Phim ảnh",
    "Ô tô điện xe máy điện",
    "Ẩm thực",
    "Làm đẹp",
    "Vé máy bay",
];
const selected = ref(btns[0]);
const searchQuery = ref('');

const setSelected = (item) => {
    selected.value = item;
};
</script>

<style>
.swiper-containerr::before {
    content: "";
    background: linear-gradient(to right,
            rgb(255 255 255),
            rgb(235 244 246 / 0%));
    position: absolute;
    width: 133px;
    height: 35px;
    z-index: 9;
    left: -1px;
}

.swiper-containerr::after {
    content: "";
    background: linear-gradient(to left, rgb(255 255 255), rgb(235 244 246 / 0%));
    position: absolute;
    width: 133px;
    height: 35px;
    z-index: 9;
    top: 0;
    right: -1px;
}
</style>