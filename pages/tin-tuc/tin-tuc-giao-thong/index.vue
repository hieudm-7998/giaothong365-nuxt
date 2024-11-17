<template>
    <div class="container lg:max-w-[1024px] pt-20 lg:pt-[97px]">
        <div class="mb-5 py-10">
            <h1 class="text-2xl text-[#0d47a1] font-semibold uppercase mb-10">
                Tin tức về giao thông
            </h1>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
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

            <Pagination />
        </div>
    </div>
</template>

<script setup>
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
const router = useRouter();
</script>