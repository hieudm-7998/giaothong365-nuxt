<template>
    <DialogRoot>
        <DialogTrigger>
            <button class="transition-all hover:opacity-85 text-sm text-white">
                Đăng ký
            </button>
        </DialogTrigger>

        <DialogPortal>
            <DialogOverlay class="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
            <DialogContent
                class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]">
                <div v-if="loginType.isRegisterSuccess === false">
                    <DialogTitle class="text-xl font-semibold">Đăng ký hội viên</DialogTitle>
                    <DialogDescription class="my-5">
                        Kiểm tra và quản lý vi phạm phạt nguội của bạn một cách nhanh
                        chóng và dễ dàng.
                    </DialogDescription>

                    <div class="flex flex-col gap-3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Họ và tên
                            </Text>
                            <input
                                class="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                                placeholder="Họ và tên" />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Số điện thoại
                            </Text>
                            <input
                                class="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                                placeholder="Số điện thoại" />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Biển số xe (BKS)
                            </Text>
                            <input
                                class="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                                placeholder="Ví dụ: 30K12363" />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Loại phương tiện
                            </Text>
                            <select
                                class="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                                :style="{ borderColor: 'rgba(0.01,0.03,0.18,0.2)' }" defaultValue="">
                                <option value="" disabled>
                                    Chọn loại phương tiện
                                </option>
                                <option value="car">Ô tô</option>
                                <option value="motorbike">Xe máy</option>
                                <option value="bicycle">Xe đạp</option>
                            </select>
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Mật khẩu
                            </Text>
                            <input
                                class="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                                type="password" placeholder="Mật khẩu" />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Nhập lại mật khẩu
                            </Text>
                            <input
                                class="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                                type="password" placeholder="Nhập lại mật khẩu" />
                        </label>
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="form-checkbox" />
                            <span>
                                Tôi đồng ý với
                                <NuxtLink target="_blank" to="/dieu-khoan-su-dung"
                                    class="text-[#759cff] cursor-pointer">
                                    điều khoản chính sách
                                </NuxtLink>
                            </span>
                        </label>
                    </div>

                    <div class="flex items-center gap-4 justify-center mt-3">
                        <button
                            class="!bg-[#285398] py-1 px-3 text-white rounded hover:opacity-85 transition-all hover:cursor-pointer"
                            @click="loginType.toggleRegisterSuccess(true)">
                            Đăng ký
                        </button>
                        <DialogClose>
                            <Button variant="soft" color="gray">
                                Huỷ
                            </Button>
                        </DialogClose>
                    </div>
                </div>
                <div v-if="loginType.isRegisterSuccess === true">
                    <DialogTitle class="text-center text-green-500 font-semibold">
                        Đăng ký thành công !
                    </DialogTitle>
                    <DialogDescription size="2" mb="4" class="text-center my-5">
                        <span>
                            Bạn đã đăng ký thành công với số điện thoại
                            <span class="font-semibold">037xxxxxxx</span>.
                        </span>
                        <span class="block">
                            Đóng hộp thoại để tự động đăng nhập.
                        </span>
                    </DialogDescription>

                    <div class="flex justify-center items-center">
                        <button class="border-[1px] rounded border-gray-200 py-1 px-2 hover:opacity-85 transition-all" @click="loginType.toggleLoginType(NO_VIOLATION)">
                            Đóng
                        </button>
                    </div>
                </div>
                <DialogClose
                    class="text-grass11 text-black hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close">
                    <LucideX class="text-black" />
                </DialogClose>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>

<script setup>
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
    DialogPortal,
    DialogOverlay
} from 'radix-vue'
import { useLoginType, HAS_VIOLATION, DEFAULT, NO_VIOLATION } from '@/stores/loginStore';

const loginType = useLoginType();
</script>