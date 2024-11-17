<template>
    <DialogRoot>
        <DialogTrigger>
            <button class="transition-all hover:opacity-85 text-sm text-primary">
                Đăng nhập
            </button>
        </DialogTrigger>

        <DialogPortal>
            <DialogOverlay class="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
            <DialogContent
                class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]">
                <div v-if="loginType.isLoggedIn === false">
                    <DialogTitle class="text-xl font-semibold mb-5">Đăng nhập</DialogTitle>

                    <div class="flex flex-col gap-3">
                        <label>
                            <h1>
                                Số điện thoại
                            </h1>
                            <input
                                class="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                                placeholder="Số điện thoại " />
                        </label>
                        <label>
                            <h1>
                                Mật khẩu
                            </h1>
                            <input
                                class="w-full px-2 !py-1 border border-solid focus:outline-[#8CA4F0] rounded-md shadow-sm transition-all hover:cursor-pointer"
                                type="password" placeholder="Nhập mật khẩu " />
                        </label>
                    </div>

                    <div class="flex items-center justify-center gap-4 mt-5">
                        <button
                            class="!bg-[#285398] py-1 px-3 text-white rounded hover:opacity-85 transition-all hover:cursor-pointer"
                            @click="loginType.isLoggedIn(true)">
                            Đăng nhập
                        </button>
                        <DialogClose>
                            <button variant="soft" color="gray">
                                Huỷ
                            </button>
                        </DialogClose>
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
const isScrolling = ref(false);

const handleScroll = () => {
    if (window.scrollY === 0) {
        isScrolling.value = false;
    } else if (window.scrollY > 300) {
        isScrolling.value = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>