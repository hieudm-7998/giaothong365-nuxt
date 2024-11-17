<template>
    <div class="container lg:max-w-[1024px] mb-20 pt-16">
        <ViolationSearch v-if="loginType.loginType === DEFAULT" />
        <div v-if="loginType.loginType === NO_VIOLATION" class="bg-[#f5fafe] rounded-2xl shadow-lg p-10">
            <div class="lg:w-2/5 mx-auto">
                <div class="grid grid-cols-4 gap-4">
                    <div class="col-span-1 flex flex-col items-center justify-center">
                        <img src="/images/avatar.png"
                            class="border-[#285398] border border-solid rounded-full block mx-auto" alt="" />
                    </div>
                    <div class="col-span-3">
                        <p class="text-black">Nguyễn Duy Bảo</p>
                        <p class="mb-1">0963835542</p>
                        <div class="flex items-center gap-2">
                            <span class="bg-gray-400 text-white rounded-full px-2">
                                Free
                            </span>
                            <span class="bg-gradient-to-r from-[#f6df91] to-[#d4af37] text-white rounded-full px-2">
                                Gold
                            </span>
                            <span
                                class="bg-gradient-to-r from-[#cac9c2] via-[#fafaeb] to-[#cac9c2] text-black rounded-full px-2">
                                Platinum
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-center text-[#24ff00] mt-5">
                Không phát hiện lỗi vi phạm
            </p>
            <p class="text-center text-black mb-10">
                Mong bạn tiếp tục tuân thủ luật giao thông và lái xe an toàn!
            </p>

            <div
                class="lg:w-[912px] border-solid border-l-0 border-t-0 border-r-0 border-b-[1px] border-[#b7c8fd] mt-2 mx-auto mb-5">
            </div>
            <div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mb-5">
                    <div class="flex flex-col justify-center gap-2">
                        <p>Biển số xe:</p>
                        <label>
                            <input type="text" placeholder="VD: 30K12363"
                                class="w-full px-4 py-3 bg-white rounded-md transition-all border-solid border-gray-200 border-[1px]" />
                        </label>
                    </div>
                    <div class="flex flex-col justify-center gap-2">
                        <p>Loại phương tiện:</p>
                        <label>
                            <select
                                class="w-full px-4 py-3 bg-white rounded-md transition-all border-solid border-gray-200 border-[1px]"
                                defaultValue="">
                                <option value="" disabled>
                                    Chọn loại phương tiện
                                </option>
                                <option value="car">Ô tô</option>
                                <option value="motorbike">Xe máy</option>
                                <option value="bicycle">Xe đạp</option>
                            </select>
                        </label>
                    </div>
                </div>
                <button
                    class="bg-[#da9956] block lg:w-1/3 mx-auto text-white font-semibold text-lg py-2 px-10 transition-all hover:opacity-80">
                    Tra cứu
                </button>
            </div>
            <h1 class="text-center font-normal italic mt-10 text-[#0d47a1]">
                Trích nguồn dữ liệu: Cổng thông tin điện tử Cục Cảnh sát giao thông
                và Cục Đăng kiểm Việt Nam
            </h1>
        </div>
        <div v-if="loginType.loginType === HAS_VIOLATION">
            <div class="bg-[#f5fafe] rounded-2xl shadow-lg p-4 lg:p-10">
                <div class="lg:w-3/5 mx-auto">
                    <div class="flex items-center justify-center gap-4">
                        <div class="col-span-1 flex flex-col items-center justify-center">
                            <img src="/images/avatar.png"
                                class="border-[#285398] w-20 h-20 border border-solid rounded-full block mx-auto" alt="" />
                        </div>
                        <div class="col-span-3 flex flex-col justify-center">
                            <p class="text-black">Nguyễn Duy Bảo</p>
                            <p class="mb-1">0963835542</p>
                            <div class="flex items-center gap-2">
                                <span class="bg-gray-400 text-white rounded-full px-2">
                                    Free
                                </span>
                                <span
                                    class="bg-gradient-to-r from-[#f6df91] to-[#d4af37] text-white rounded-full px-2">
                                    Gold
                                </span>
                                <span
                                    class="bg-gradient-to-r from-[#cac9c2] via-[#fafaeb] to-[#cac9c2] text-black rounded-full px-2">
                                    Platinum
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="text-2xl font-bold text-red-600 text-center py-10">
                    Bạn đang có 2 thông báo vi phạm
                </h1>

                <ViolationTable />
                <ViolationTable />
                <h1 class="text-center font-normal italic mt-10 text-[#0d47a1]">
                    Trích nguồn dữ liệu: Cổng thông tin điện tử Cục Cảnh sát giao
                    thông và Cục Đăng kiểm Việt Nam
                </h1>
            </div>
            <ViolationSearch />
        </div>
    </div>
</template>

<script setup>
import { useLoginType, HAS_VIOLATION, DEFAULT, NO_VIOLATION } from '@/stores/loginStore';

const loginType = useLoginType()
</script>