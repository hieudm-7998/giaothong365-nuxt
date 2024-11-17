<script setup lang="jsx">
import { useLoginType, HAS_VIOLATION, DEFAULT, NO_VIOLATION } from '@/stores/loginStore';
import { ref, onMounted, onUnmounted } from 'vue';
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

const isDesktop = useMediaQuery('(min-width: 960px)')
const loginType = useLoginType();
const router = useRouter()
const menu = ref();

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

const itemsNoViolation = ref([
  {
    label: 'Thông báo: Bạn có 01 lỗi vi phạm!',
    icon: <LucideTriangleAlert />,
    route: '/tra-cuu-phat-nguoi'
  },
  {
    label: 'Tài khoản',
    icon: <LucideUser />,
    route: '/tai-khoan'
  },
  {
    label: 'Đăng xuất',
    icon: <LucideLogOut />,
    command: () => {
      loginType.toggleLoginType(DEFAULT)
    }
  }
]);

const itemsViolation = ref([
  {
    label: 'Thông báo: Bạn có 01 lỗi vi phạm!',
    icon: <LucideTriangleAlert />,
    route: '/tra-cuu-phat-nguoi'
  },
  {
    label: 'Tài khoản',
    icon: <LucideUser />,
    route: '/tai-khoan'
  },
  {
    label: 'Đăng xuất',
    icon: <LucideLogOut />,
    command: () => {
      loginType.toggleLoginType(DEFAULT)
    }
  }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};

const userMenuOpen = ref(false)
const route = useRoute()
const isHome = computed(() => route.path === '/');
</script>

<template>
  <ClientOnly>
    <div :class="[
      'fixed w-screen transition-all top-0 z-30',
      isScrolling ? 'bg-white' : 'bg-transparent'
    ]">
      <div class="container lg:max-w-[1241px] py-7">
        <div class="flex justify-between items-center">
          <div>
            <NuxtLink to="/" class="text-base">
              <img :src="`/images/${!isHome || isScrolling ? 'logo-black' : 'logo'}.png`" alt="" class="max-w-[250px]" />
            </NuxtLink>
          </div>
          <div class="flex items-center gap-10">
            <div>
              <div class="flex items-center gap-10">
                <NuxtLink to="/" class="text-base hover:opacity-85 transition-all uppercase"
                  :class="`${!isScrolling ? 'text-white' : 'text-primary'}`">
                  Trang chủ
                </NuxtLink>
                <NuxtLink to="/tra-cuu-phat-nguoi" class="text-base hover:opacity-85 transition-all uppercase"
                  :class="`${!isScrolling ? 'text-white' : 'text-primary'}`">
                  Tra cứu phạt nguội
                </NuxtLink>
                <NuxtLink to="/tra-cuu-diem-phat-nguoi" class="text-base hover:opacity-85 transition-all uppercase"
                  :class="`${!isScrolling ? 'text-white' : 'text-primary'}`">
                  Điểm phạt nguội
                </NuxtLink>
                <NuxtLink to="/tin-tuc" class="text-base hover:opacity-85 transition-all uppercase"
                  :class="`${!isScrolling ? 'text-white' : 'text-primary'}`">
                  Tin tức
                </NuxtLink>
                <div class="flex justify-center" v-if="loginType.loginType === HAS_VIOLATION">
                  <DropdownMenuRoot v-model:open="userMenuOpen" class="z-[199]">
                    <DropdownMenuTrigger
                      class="rounded-full relative h-10 w-10 inline-flex items-center justify-center outline-none hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black"
                      aria-label="Customise options">
                      <img src="/images/avatar.png" class="border-primary border-[1px] border-solid rounded-full" alt="">
                      <div
                        class="absolute flex items-center justify-center flex-col w-5 h-5 z-20 text-white text-sm -right-2 -top-1 bg-red-600 rounded-full">
                        1
                      </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuPortal>
                      <DropdownMenuContent
                        class="outline-none z-[199] bg-white rounded-lg p-[5px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                        :side-offset="5">
                        <DropdownMenuItem value="New Tab"
                          class="group my-2 transition-all hover:opacity-50 text-[13px] hover:cursor-pointer leading-none text-red-500 gap-2 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          @click="router.push('/tra-cuu-phat-nguoi')">
                          <LucideTriangleAlert class="w-4" />
                          Thông báo: Bạn có 01 lỗi vi phạm
                        </DropdownMenuItem>
                        <DropdownMenuSeparator class="h-[1px] bg-black/30 m-[5px]" />
                        <DropdownMenuItem value="New Tab"
                          class="group my-2 transition-all hover:opacity-50 text-[13px] hover:cursor-pointer leading-none text-black gap-2 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          @click="router.push('/tai-khoan')">
                          <LucideUser class="w-4" />
                          Tài khoản
                        </DropdownMenuItem>
                        <DropdownMenuItem value="New Tab"
                          class="group my-2 transition-all hover:opacity-50 text-[13px] hover:cursor-pointer leading-none text-black gap-2 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          @click="loginType.toggleLoginType(DEFAULT)">
                          <LucideLogOut class="w-4" />
                          Đăng xuất
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenuPortal>
                  </DropdownMenuRoot>

                </div>
                <div class="flex justify-center" v-if="loginType.loginType === NO_VIOLATION">
                  <DropdownMenuRoot v-model:open="userMenuOpen" class="z-[199]">
                    <DropdownMenuTrigger
                      class="rounded-full relative h-10 w-10 inline-flex items-center justify-center outline-none hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black"
                      aria-label="Customise options">
                      <img src="/images/avatar.png" class="border-primary border-solid border-[1px] rounded-full" alt="">
                    </DropdownMenuTrigger>

                    <DropdownMenuPortal>
                      <DropdownMenuContent
                        class="outline-none z-[199] bg-white rounded-lg p-[5px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                        :side-offset="5">
                        <DropdownMenuItem value="New Tab"
                          class="group my-2 transition-all hover:opacity-50 text-[13px] hover:cursor-pointer leading-none text-black gap-2 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          @click="router.push('/tai-khoan')">
                          <LucideUser class="w-4" />
                          Tài khoản
                        </DropdownMenuItem>
                        <DropdownMenuItem value="New Tab"
                          class="group my-2 transition-all hover:opacity-50 text-[13px] hover:cursor-pointer leading-none text-black gap-2 rounded-[3px] flex items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          @click="loginType.toggleLoginType(DEFAULT)">
                          <LucideLogOut class="w-4" />
                          Đăng xuất
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenuPortal>
                  </DropdownMenuRoot>
                </div>
              </div>

              <div class="flex items-center justify-end gap-2" v-if="loginType.loginType === DEFAULT">
                <RegisterDialog />
                <span :class="`${!isScrolling ? 'text-white' : 'text-primary'}`">
                  |
                </span>
                <LoginDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped></style>
