<template>
    <div class="main-banner pt-14 lg:pt-8 pb-14 2xl:py-14">
        <div class="container lg:max-w-[1241px] mb-10 lg:mb-20">
            <div class="my-10 lg:my-20 lg:m-0 col-span-1 lg:col-span-2">
                <div class="bg-white/20 lg:max-w-[480px] 2xl:max-w-[560px] rounded-2xl p-3 2xl:p-10 flex flex-col items-center"
                    v-if="loginType.loginType === DEFAULT">
                    <h1
                        class="2xl:text-[31px] gap-3 text-xl text-justify text-white font-bold lg:text-left uppercase 2xl:mb-2">
                        Chào mừng bạn đến với
                    </h1>
                    <h1 class="uppercase text-[#89a4d5] text-3xl 2xl:text-5xl font-black text-justify mb-2">
                        Giao thông <span class="text-[#da9956]">365</span>
                    </h1>
                    <h2 class="text-sm text-white text-center mb-3 lg:px-8 2xl:p-0 2xl:gap-4">
                        Hãy nhập thông tin cơ bản, Giao thông 365 sẽ giúp bạn theo dõi
                        và xử lý vi phạm giao thông một cách dễ dàng!
                    </h2>
                    <form class="flex flex-col px-8 2xl:p-0 gap-1 2xl:gap-4 mx-auto w-full">
                        <!-- {/* Full Name */} -->
                        <label>
                            <input type="text" placeholder="Họ và tên"
                                class="w-full px-4 2xl:py-3 py-2 bg-white rounded-md shadow-sm transition-all opacity-70" />
                        </label>

                        <!-- {/* Phone Number */} -->
                        <label>
                            <input type="text" placeholder="Số điện thoại"
                                class="w-full px-4 2xl:py-3 py-2 bg-white rounded-md shadow-sm transition-all opacity-70" />
                        </label>

                        <!-- {/* License Plate */} -->
                        <label>
                            <input type="text" placeholder="Biển kiểm soát"
                                class="w-full px-4 2xl:py-3 py-2 bg-white rounded-md shadow-sm transition-all opacity-70" />
                        </label>

                        <!-- {/* Vehicle Type */} -->
                        <label>
                            <select
                                class="w-full px-4 2xl:py-3 py-2 bg-white rounded-md shadow-sm transition-all opacity-70"
                                defaultValue="">
                                <option value="" disabled>
                                    Chọn loại phương tiện
                                </option>
                                <option value="car">Ô tô</option>
                                <option value="motorbike">Xe máy</option>
                                <option value="bicycle">Xe đạp</option>
                            </select>
                        </label>

                        <label>
                            <input type="password" placeholder="Mật khẩu"
                                class="w-full px-4 2xl:py-3 py-2 bg-white rounded-md shadow-sm transition-all opacity-70" />
                        </label>

                        <label>
                            <input type="password" placeholder="Nhập lại mật khẩu"
                                class="w-full px-4 2xl:py-3 py-2 bg-white rounded-md shadow-sm transition-all opacity-70" />
                        </label>

                        <!-- {/* Terms and Conditions */} -->
                        <label class="flex items-center space-x-2 justify-center">
                            <input type="checkbox" class="form-checkbox" />
                            <span class="text-white text-sm py-2 lg:py-1 2xl:py-2">
                                Tôi đồng ý với
                                <NuxtLink to="/dieu-khoan-su-dung" target="_blank"
                                    class="text-[#759cff] cursor-pointer">
                                    điều khoản chính sách
                                </NuxtLink>
                            </span>
                        </label>

                        <!-- {/* Submit Button */} -->
                        <button
                            class="bg-[#da9956] block lg:w-2/3 mx-auto text-white font-semibold text-lg uppercase py-2 px-10 transition-all hover:opacity-80">
                            Đăng ký hội viên
                        </button>
                    </form>
                </div>
                <div v-if="loginType.loginType === NO_VIOLATION">
                    <h1
                        class="lg:text-[31px] gap-3 text-xl text-center text-white font-bold lg:text-left uppercase mb-3">
                        Chào mừng bạn đến với
                    </h1>
                    <h1 class=" uppercase text-[#89a4d5] text-3xl lg:text-5xl font-black text-center lg:text-left mb-3">
                        Giao thông <span class="text-[#da9956]">365</span>
                    </h1>
                    <h2 class="text-base text-white text-center lg:text-left mb-5">
                        Nhận thông báo phạt nguội nhanh chóng và chính xác
                    </h2>
                    <div class="bg-white/20 lg:max-w-[440px] rounded-2xl p-6 flex flex-col items-center">
                        <img src="/images/avatar.png" class="w-28 mb-2" alt="">
                        <h1
                            class="mb-3 text-center font-bold text-4xl bg-gradient-to-r from-[#89a4d5] to-[#da9956] bg-clip-text text-transparent">
                            30H-XXX.XX
                        </h1>
                        <p class="text-center text-[#24ff00]">
                            Không phát hiện lỗi vi phạm
                        </p>
                        <p class="text-center text-white">
                            Mong bạn tiếp tục tuân thủ luật giao thông
                            <br />
                            và lái xe an toàn!
                        </p>
                    </div>
                </div>
                <div v-if="loginType.loginType === HAS_VIOLATION">
                    <h1
                        class="lg:text-[31px] gap-3 text-xl text-center text-white font-bold lg:text-left uppercase mb-3">
                        Chào mừng bạn đến với
                    </h1>
                    <h1 class=" uppercase text-[#89a4d5] text-3xl lg:text-5xl font-black lg:text-left text-center mb-3">
                        Giao thông <span class="text-[#da9956]">365</span>
                    </h1>
                    <h2 class="text-base text-white text-center lg:text-left mb-5">
                        Nhận thông báo phạt nguội nhanh chóng và chính xác
                    </h2>
                    <div class="bg-white/20 lg:max-w-[440px] rounded-2xl p-6 flex flex-col items-center">
                        <img src="/images/avatar.png" class="w-28 mb-2" alt="">
                        <h1
                            class="mb-3 text-center font-bold text-4xl bg-gradient-to-r from-[#89a4d5] to-[#da9956] bg-clip-text text-transparent">
                            30H-XXX.XX
                        </h1>
                        <p class="text-center text-white mb-5">
                            Bạn đang có <span class="text-red-600 font-bold">01</span>
                            thông báo vi phạm!
                        </p>
                        <button
                            class="bg-[#da9956] text-white font-semibold text-lg uppercase py-2 px-10 transition-all hover:opacity-80">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
            <button class="flex bg-white text-primary p-1 rounded" @click="loginType.toggleLoginType(DEFAULT)">
                Chưa ĐK (Mặc định)
            </button>
            <button class="flex bg-white text-primary p-1 rounded" @click="loginType.toggleLoginType(NO_VIOLATION)">
                Đã ĐN (Ko lỗi)
            </button>
            <button class="flex bg-white text-primary p-1 rounded" @click="loginType.toggleLoginType(HAS_VIOLATION)">
                Đã ĐN (Có lỗi)
            </button>
        </div>
    </div>

    <div class="news-bg py-10">
        <div class="container lg:max-w-[1024px]">
            <div class="flex justify-between items-end mb-5">
                <h1 class="text-center text-3xl font-bold text-primary uppercase">
                    Tin tức
                </h1>
                <button class="text-[#3c73a7] font-semibold">
                    Xem tất cả
                </button>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-5">
                <div class="lg:col-span-3">
                    <div class="rounded-2xl shadow-md">
                        <div>
                            <img src="/images/news-item.webp" class="block w-full h-[323px] rounded-t-2xl object-cover"
                                alt="" />
                        </div>
                        <div class="p-5">
                            <p class="text-[#898989] text-sm">{{ news[0].date }}</p>
                            <h1 class="text-lg text-primary font-semibold line-clamp-2">
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
                            <button class="flex items-center text-[#0f8dd4]" @click="router.push('/tin-tuc/detail')">
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
                            <h1 class="text-base text-primary font-semibold line-clamp-2">
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

    <div class="benefit-bg pt-20 pb-16">
        <div class="container lg:max-w-[1241px] mb-10 lg:mb-10">
            <h1 class="text-center text-3xl font-bold mb-10 text-primary uppercase">
                Quyền lợi hội viên
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <img src="/images/benefit-illus.png" alt="" />
                </div>
                <div class="flex flex-col justify-center gap-10">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-2 flex flex-col justify-center">
                            <img class="block mx-auto" src="/images/benefit-icon-1.png" alt="" />
                        </div>
                        <div class="col-span-10 flex flex-col justify-center">
                            <h1 class="font-semibold text-lg lg:text-xl text-[#285398] mb-2">
                                Cập nhật phạt nguội tự động
                            </h1>
                            <p class="text-base text-gray-700">
                                Nhận thông báo ngay lập tức khi có vi phạm phạt nguội liên
                                quan đến phương tiện của bạn, qua cả SMS và Email. Không còn
                                lo lắng bỏ lỡ thông tin quan trọng.
                            </p>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-2 flex flex-col justify-center">
                            <img class="block mx-auto" src="/images/benefit-icon-2.png" alt="" />
                        </div>
                        <div class="col-span-10 flex flex-col justify-center">
                            <h1 class="font-semibold text-lg lg:text-xl text-[#285398] mb-2">
                                Cập nhật điểm nóng giao thông
                            </h1>
                            <p class="text-base text-gray-700">
                                Dễ dàng tìm kiếm và theo dõi các điểm có gắn camera phạt nguội
                                hoặc các điểm giao thông thường xảy ra vi phạm
                            </p>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-2 flex flex-col justify-center">
                            <img class="block mx-auto" src="/images/benefit-icon-3.png" alt="" />
                        </div>
                        <div class="col-span-10 flex flex-col justify-center">
                            <h1 class="font-semibold text-lg lg:text-xl text-[#285398] mb-2">
                                Tư vấn, hỗ trợ xử lý vi phạm nhanh chóng
                            </h1>
                            <p class="text-base text-gray-700">
                                Hỗ trợ khách hàng xử lý khi có vi phạm
                            </p>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-2 flex flex-col justify-center">
                            <img class="block mx-auto" src="/images/benefit-icon-4.png" alt="" />
                        </div>
                        <div class="col-span-10 flex flex-col justify-center">
                            <h1 class="font-semibold text-lg lg:text-xl text-[#285398] mb-2">
                                Kết nối cộng đồng giao thông, chia sẻ thông tin, tin tức
                            </h1>
                            <p class="text-base text-gray-700">
                                Hỗ trợ khách hàng xử lý khi có vi phạm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pt-10">
        <div class="container lg:max-w-[1241px]">
            <h1 class="text-center text-3xl font-bold text-primary">
                Đối tác của chúng tôi
            </h1>
            <swiper-container spaceBetween="50px" :slidesPerView="isDesktop ? 5 : 2">
                <swiper-slide>
                    <img src="/images/vni-logo.png" alt="" class="block mx-auto" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/mic-logo.png" alt="" class="block mx-auto" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/pvi-logo.png" alt="" class="block mx-auto" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/tasco-logo.png" alt="" class="block mx-auto" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/pti-logo.png" alt="" class="block mx-auto" />
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup>
import { useLoginType, HAS_VIOLATION, DEFAULT, NO_VIOLATION } from '@/stores/loginStore';

const isDesktop = useMediaQuery('(min-width: 960px)')
const loginType = useLoginType()
const router = useRouter()

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
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap");


* {
    padding: 0;
    margin: 0;
    border: none;
}

.radix-themes {
    --default-font-family: var(--font-montserrat) !important;
}

body {
    font-family: "Montserrat", sans-serif !important;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    position: relative;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
}

.main-banner {
    background: url("/images/bg-giao-thong-360.png");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
}

.news-bg {
    background: url("/images/news-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.benefit-bg {
    background: url("/images/loi-ich-dang-ky-hoi-vien-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

/* .footer-bg{
  background: url("/images/footer-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
} */

.footer-bg {
    position: relative;
    /* Optional: adjust as needed */
    overflow: hidden;
}

.footer-bg::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/footer-bg.png") center / cover no-repeat;
    opacity: 0.5;
    /* Adjust opacity here */
    z-index: -1;
    /* Ensure it stays behind content */
}

.row.cmt {
    padding-left: 15px;
    padding-right: 15px;
}

.cmt h4 {
    color: #2d58d3;
    font-weight: bold;
    border-bottom: solid 2px #0d47a1;
    text-transform: uppercase;
    margin-bottom: 15px;
}

.cmt h5 {
    font-weight: bold;
    color: #376aff;
}

.cmt p {
    border-bottom: solid 2px #e4e4e4;
    margin-bottom: 15px;
}

.cmt {
    margin-bottom: 15px;
    background-color: rgba(239, 239, 239, 0.8);
    padding-bottom: 15px;
    padding-top: 15px;
    margin-top: 15px;
}

.cmt input {
    width: 100%;
}

.slick-slide {
    margin-right: 10px;
    /* Adjust as needed */
    margin-top: 2px;
    margin-left: 2px;
    margin-bottom: 2px;
    width: 200px !important;
}

.slick-slider::before {
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

.slick-slider::after {
    content: "";
    background: linear-gradient(to left, rgb(255 255 255), rgb(235 244 246 / 0%));
    position: absolute;
    width: 133px;
    height: 35px;
    z-index: 9;
    top: 0;
    right: -1px;
}

.slick-prev:before,
.slick-next:before {
    color: #0d47a1;
}

.slick-next {
    right: 0;
    z-index: 300;
}

.slick-prev {
    left: 0;
    opacity: 1;
    z-index: 300;
}

.slick-prev:before,
.slick-next:before {
    opacity: 1;
}

.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
    color: #0d47a1 !important;
    opacity: 1;
}
</style>