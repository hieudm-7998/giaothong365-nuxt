<template>
    <div class="pt-20 lg:pt-32">
        <div class="container lg:max-w-[1241px] pb-10">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div class="col-span-3 lg:col-span-2">
                    <div class="rounded-2xl shadow-md">
                        <div class="p-5">
                            <p class="text-[#898989] text-sm">{{ news[2].date }}</p>
                            <div class="flex justify-between items-center py-1">
                                <div class="flex items-center gap-2">
                                    <div class="flex items-center gap-1">
                                        <LucideEye class="text-[#898989] w-5" />
                                        <p class="text-[#898989] text-base">39</p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <LucideShare2 class="text-[#898989] w-5" />
                                        <p class="text-[#898989] text-base">14</p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <LucideMessageSquareText class="text-[#898989] w-5" />
                                        <p class="text-[#898989] text-base">14</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button type="button"
                                        class="flex items-center justify-center gap-2 bg-[#3e59a5] text-white rounded py-1 px-2 hover:opacity-85 transition-all">
                                        <LucideThumbsUp class="w-4" />
                                        <span>Thích</span>
                                    </button>
                                    <button type="button"
                                        class="flex items-center justify-center gap-2 bg-[#3e59a5] text-white rounded py-1 px-2 hover:opacity-85 transition-all">
                                        <LucideShare2 class="w-4" />
                                        <span>Chia sẻ</span>
                                    </button>
                                </div>
                            </div>
                            <h1 class="text-lg text-[#0d47a1] font-semibold mb-3">
                                {{ news[2].title }}
                            </h1>
                            <div>
                                <img src="/images/news-item.webp" class="block w-full object-cover mb-2" alt="" />
                            </div>
                            <p class="mb-2 text-justify">{{ news[2].description }}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="text-lg text-[#0d47a1] font-semibold uppercase mb-5">
                        Tin tức liên quan
                    </h1>
                    <div class="col-span-3 lg:col-span-1 flex flex-col items-center gap-5">
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
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div class="row cmt col-span-3 lg:col-span-2 rounded-2xl shadow-md !bg-white p-">
                    <h4 class="!text-[#0d47a1]">Bình luận:</h4>
                    <div>
                        <div>
                            <h5 class="!text-[#0d47a1]">0xxxxxxxxxx :</h5>
                            <p>Bài viết rất hay!</p>
                        </div>
                        <div>
                            <h5 class="!text-[#0d47a1]">0xxxxxxxxxx :</h5>
                            <p>Bài viết rất bổ ích !</p>
                        </div>
                    </div>
                    <div>
                        <textarea type="text"
                            class="block w-full rounded-lg border-solid border-gray-300 border-[1px] p-2 mb-3" />
                        <button
                            class="bg-[#da9956] mx-auto text-white font-semibold text-lg uppercase py-2 px-10 transition-all hover:opacity-80">
                            Gửi bình luận
                        </button>
                    </div>
                </div>
            </div>
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