<template>
    <div class="bg-[#285398] py-10">
        <div class="container lg:max-w-[1241px]">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="flex flex-col justify-center">
                    <h1 class="text-xl lg:text-4xl font-black mb-5 text-white">
                        Đăng ký hội viên
                    </h1>
                    <p class="text-white">
                        Đăng ký hội viên ngay bây giờ để nhận thông báo phạt nguội kịp
                        thời và hướng dẫn cách giải quyết đơn giản nhất.
                    </p>
                </div>
                <div>
                    <form class="flex flex-col space-y-4 mx-auto">
                        <!-- {/* Full Name */} -->
                        <label>
                            <input type="text" placeholder="Họ và tên"
                                class="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all" />
                        </label>

                        <!-- {/* Phone Number */} -->
                        <label>
                            <input type="text" placeholder="Số điện thoại"
                                class="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all" />
                        </label>

                        <!-- {/* License Plate */} -->
                        <label>
                            <input type="text" placeholder="Biển kiểm soát"
                                class="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all" />
                        </label>

                        <!-- {/* Vehicle Type */} -->
                        <label>
                            <select class="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all"
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
                                class="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all" />
                        </label>

                        <label>
                            <input type="password" placeholder="Nhập lại mật khẩu"
                                class="w-full px-4 py-3 bg-white rounded-md shadow-sm transition-all" />
                        </label>

                        <!-- {/* Terms and Conditions */} -->
                        <label class="flex items-center space-x-2 justify-center">
                            <input type="checkbox" class="form-checkbox" />
                            <span class="text-white">
                                Tôi đồng ý với
                                <NuxtLink target="_blank" to="/dieu-khoan-su-dung"
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
            </div>
        </div>
    </div>
</template>