<template>
    <div class="pt-20 lg:pt-[97px]">
        <swiper-container slidesPerView="1">
            <swiper-slide>
                <img src="/images/tin-tuc-1.png" alt="" class="block mx-auto" />
            </swiper-slide>
            <swiper-slide>
                <img src="/images/tin-tuc-2.png" alt="" class="block mx-auto" />
            </swiper-slide>
        </swiper-container>
        <div class="py-10">
            <div class="container lg:max-w-[1024px]">
                <div class="flex justify-between items-center mb-5">
                    <h1 class="text-3xl text-[#0d47a1] font-semibold uppercase">
                        Tin tức nổi bật
                    </h1>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-5">
                    <div class="lg:col-span-3">
                        <div class="rounded-2xl shadow-md">
                            <div>
                                <img src="/images/news-item.webp"
                                    class="block w-full h-[323px] rounded-t-2xl object-cover" alt="" />
                            </div>
                            <div class="p-5">
                                <p class="text-[#898989] text-sm">{{ news[0].date }}</p>
                                <h1 class="text-lg text-[#0d47a1] font-semibold line-clamp-2">
                                    {{ news[0].title }}
                                </h1>
                                <div class="flex items-center gap-2 mb-1">
                                    <div class="flex items-center gap-1">
                                        <LucideEye class="text-[#898989] w-5" />
                                        <p class="text-[#898989]">39</p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <LucideShare2 class="text-[#898989] w-5" />
                                        <p class="text-[#898989]">14</p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <LucideMessageSquareText class="text-[#898989] w-5" />
                                        <p class="text-[#898989]">14</p>
                                    </div>
                                </div>
                                <p class="line-clamp-4 mb-2">{{ news[0].description }}</p>
                                <button class="flex items-center text-[#0f8dd4]"
                                    @click="router.push('/tin-tuc/detail')">
                                    Xem thêm
                                    <LucideChevronRight class="h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2 flex flex-col items-center gap-5">
                        <div v-for="(item, index) in news" :key="index"
                            class="grid grid-cols-3 rounded-2xl shadow-md h-[185px]">
                            <div class="col-span-1">
                                <div>
                                    <img src="/images/news-item.webp" alt=""
                                        class="block h-[185px] rounded-l-2xl object-cover" />
                                </div>
                            </div>
                            <div class="col-span-2 p-3">
                                <p class="text-[#898989] text-xs">{{ item.date }}</p>
                                <h1 class="text-base text-[#0d47a1] font-semibold line-clamp-2">
                                    {{ item.title }}
                                </h1>
                                <div class="flex items-center gap-2">
                                    <div class="flex items-center gap-1">
                                        <LucideEye class="text-[#898989] w-3" />
                                        <p class="text-[#898989] text-xs">39</p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <LucideShare2 class="text-[#898989] w-3" />
                                        <p class="text-[#898989] text-xs">14</p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <LucideMessageSquareText class="text-[#898989] w-3" />
                                        <p class="text-[#898989] text-xs">14</p>
                                    </div>
                                </div>
                                <p class="line-clamp-3 mb-2 text-xs">
                                    {{ item.description }}
                                </p>
                                <button class="flex items-center text-xs text-[#0f8dd4]"
                                    @click="router.push('/tin-tuc/detail')">
                                    Xem thêm
                                    <LucideChevronRight class="h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container lg:max-w-[1024px] py-10">
            <div class="flex justify-between items-center mb-5">
                <h1 class="text-3xl text-[#0d47a1] font-semibold uppercase">
                    Tin tức về giao thông
                </h1>
                <button class="text-[#3c73a7] font-semibold" @click="router.push('/tin-tuc/tin-tuc-giao-thong')">
                    Xem tất cả
                </button>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div v-for="(item, index) in news" :key="index"
                    class="grid grid-cols-3 rounded-2xl shadow-md h-[185px]">
                    <div class="col-span-1">
                        <div>
                            <img src="/images/news-item.webp" alt=""
                                class="block h-[185px] rounded-l-2xl object-cover" />
                        </div>
                    </div>
                    <div class="col-span-2 p-3">
                        <p class="text-[#898989] text-xs">{{ item.date }}</p>
                        <h1 class="text-base text-[#0d47a1] font-semibold line-clamp-2">
                            {{ item.title }}
                        </h1>
                        <div class="flex items-center gap-2">
                            <div class="flex items-center gap-1">
                                <LucideEye class="text-[#898989] w-3" />
                                <p class="text-[#898989] text-xs">39</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <LucideShare2 class="text-[#898989] w-3" />
                                <p class="text-[#898989] text-xs">14</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <LucideMessageSquareText class="text-[#898989] w-3" />
                                <p class="text-[#898989] text-xs">14</p>
                            </div>
                        </div>
                        <p class="line-clamp-3 mb-2 text-xs">{{ item.description }}</p>
                        <button class="flex items-center text-xs text-[#0f8dd4]"
                            @click="router.push('/tin-tuc/detail')">
                            Xem thêm
                            <LucideChevronRight class="h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container lg:max-w-[1024px] py-10">
            <div class="flex justify-between items-center mb-5">
                <h1 class="text-3xl text-[#0d47a1] font-semibold uppercase">
                    Tin tức mới nhất
                </h1>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div v-for="(item, index) in news.slice(0, 2)" :key="index"
                    class="grid grid-cols-3 rounded-2xl shadow-md h-[185px]">
                    <div class="col-span-1">
                        <div>
                            <img src="/images/news-item.webp" alt=""
                                class="block h-[185px] rounded-l-2xl object-cover" />
                        </div>
                    </div>
                    <div class="col-span-2 p-3">
                        <p class="text-[#898989] text-xs">{{ item.date }}</p>
                        <h1 class="text-base text-[#0d47a1] font-semibold line-clamp-2">
                            {{ item.title }}
                        </h1>
                        <div class="flex items-center gap-2">
                            <div class="flex items-center gap-1">
                                <LucideEye class="text-[#898989] w-3" />
                                <p class="text-[#898989] text-xs">39</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <LucideShare2 class="text-[#898989] w-3" />
                                <p class="text-[#898989] text-xs">14</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <LucideMessageSquareText class="text-[#898989] w-3" />
                                <p class="text-[#898989] text-xs">14</p>
                            </div>
                        </div>
                        <p class="line-clamp-3 mb-2 text-xs">{{item.description}}</p>
                        <button class="flex items-center text-xs text-[#0f8dd4]"
                            @click="router.push('/tin-tuc/detail')">
                            Xem thêm
                            <LucideChevronRight class="h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const router = useRouter();
const news = [
    {
        date: "19/09/2024",
        title:
            "Cập nhật tình hình giao thông mùa mưa bão và cách bảo vệ bạn của bảo hiểm ô tô",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        date: "19/09/2024",
        title:
            "Cập nhật tình hình giao thông mùa mưa bão và cách bảo vệ bạn của bảo hiểm ô tô",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        date: "19/09/2024",
        title:
            "Cập nhật tình hình giao thông mùa mưa bão và cách bảo vệ bạn của bảo hiểm ô tô",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
];
</script>