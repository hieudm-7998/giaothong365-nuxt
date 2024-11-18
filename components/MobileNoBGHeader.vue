<script setup>
import {
    DropdownMenuArrow,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuItemIndicator,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuRoot,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from 'radix-vue'
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useLoginType, HAS_VIOLATION, DEFAULT, NO_VIOLATION } from '@/stores/loginStore';

const isShow = ref(false);
const isScrolling = ref(false);
const router = useRouter();
const route = useRoute();
const loginType = useLoginType();
const isDesktop = useMediaQuery('(min-width: 960px)');

const isHome = computed(() => route.path === '/');

const handleScroll = () => {
    isScrolling.value = window.scrollY > 20;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const toggleMenu = () => {
    isShow.value = !isShow.value;
};

const navigateTo = (path) => {
    isShow.value = false;
    router.push(path);
};
const toggleState = ref(false)
</script>

<template>
    <ClientOnly>
        <div :class="[
            'fixed w-screen transition-all top-0 z-30',
            (isShow && isHome) || isScrolling ? 'bg-white' : 'bg-transparent'
        ]">
            <div class="py-5 relative">
                <div class="container">
                    <div class="flex items-center justify-between">
                        <div>
                            <NuxtLink to='/' class="text-base text-white">
                                <img src="/images/logo-black.png" alt="" class="max-w-[200px]" />
                            </NuxtLink>
                        </div>
                        <div class="flex items-center gap-3">
                            <DropdownMenuRoot class="top-3 z-[199]" v-model:open="toggleState"
                                v-if="loginType.loginType === NO_VIOLATION">
                                <DropdownMenuTrigger
                                    class="rounded-full !w-10 !h-10 !p-0 relative inline-flex items-center justify-center bg-white outline-none"
                                    aria-label="Customise options">
                                    <img src="/images/avatar.png"
                                        class="rounded-full border-solid border-[1px] border-[#285398]" alt="" />
                                </DropdownMenuTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuContent class="z-[199] bg-white flex flex-col gap-3 p-2 rounded-lg">
                                        <DropdownItem @click="navigateTo('/tai-khoan')" class="flex items-center gap-2">
                                            <LucideUser class="w-5" /> Tài khoản
                                        </DropdownItem>
                                        <DropdownItem class="flex items-center gap-2"
                                            @click="loginType.toggleLoginType(DEFAULT)">
                                            <LucideLogOut class="w-5" /> Đăng xuất
                                        </DropdownItem>
                                    </DropdownMenuContent>
                                </DropdownMenuPortal>
                            </DropdownMenuRoot>
                            <DropdownMenuRoot class="top-3 z-[199]" v-model:open="toggleState"
                                v-if="loginType.loginType === HAS_VIOLATION">
                                <DropdownMenuTrigger
                                    class="rounded-full !w-10 !h-10 !p-0 relative inline-flex items-center justify-center bg-white outline-none"
                                    aria-label="Customise options">
                                    <img src="/images/avatar.png"
                                        class="rounded-full border-solid border-[1px] border-[#285398]" alt="" />
                                    <div v-if="loginType.loginType === HAS_VIOLATION"
                                        class="absolute -top-1 -right-2 bg-red-600 text-white text-sm w-5 h-5 rounded-full flex items-center justify-center">
                                        1
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuContent class="z-[199] bg-white flex flex-col gap-3 p-2 rounded-lg">
                                        <DropdownItem v-if="loginType.loginType === HAS_VIOLATION"
                                            @click="navigateTo('/tra-cuu-phat-nguoi')"
                                            class="text-red-600 flex items-center gap-2">
                                            <LucideTriangleAlert class="w-5" /> Thông báo: Có 01 lỗi vi phạm !
                                        </DropdownItem>
                                        <DropdownItem @click="navigateTo('/tai-khoan')" class="flex items-center gap-2">
                                            <LucideUser class="w-5" /> Tài khoản
                                        </DropdownItem>
                                        <DropdownItem class="flex items-center gap-2"
                                            @click="loginType.toggleLoginType(DEFAULT)">
                                            <LucideLogOut class="w-5" /> Đăng xuất
                                        </DropdownItem>
                                    </DropdownMenuContent>
                                </DropdownMenuPortal>
                            </DropdownMenuRoot>
                            <button @click="toggleMenu" class="!w-10 !h-10 !p-0 !border-none !bg-transparent">
                                <LucideX v-if="isShow" class="text-primary" />
                                <LucideMenu v-else class="text-primary" />
                            </button>
                        </div>
                    </div>
                </div>
                <div v-if="isShow" class="absolute container bg-white w-full py-4 z-10">
                    <div class="flex flex-col gap-2">
                        <NuxtLink :to="'/'" class="text-xl text-[#285398]" @click="toggleMenu">
                            Trang chủ
                        </NuxtLink>
                        <NuxtLink :to="'/tra-cuu-phat-nguoi'" class="text-xl text-[#285398]" @click="toggleMenu">
                            Tra cứu phạt nguội
                        </NuxtLink>
                        <NuxtLink :to="'/tra-cuu-diem-phat-nguoi'" class="text-xl text-[#285398]" @click="toggleMenu">
                            Điểm phạt nguội
                        </NuxtLink>
                        <NuxtLink :to="'/tin-tuc'" class="text-xl text-[#285398]" @click="toggleMenu">
                            Tin tức
                        </NuxtLink>
                        <div v-if="loginType.loginType === DEFAULT" class="grid grid-cols-2 gap-4 mt-5">
                            <MobileRegisterDialog />
                            <MobileLoginDialog />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<style scoped></style>
