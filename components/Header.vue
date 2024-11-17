<script setup lang="jsx">
import { useLoginType, HAS_VIOLATION, DEFAULT, NO_VIOLATION } from '@/stores/loginStore';
import { ref, onMounted, onUnmounted } from 'vue';

const isDesktop = useMediaQuery('(min-width: 960px)')
const loginType = useLoginType();
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

</script>

<template>
  <div class="fixed w-full top-0 transition-all z-20">
    <div class="container lg:max-w-[1241px] py-7">
      <div class="flex justify-between items-center">
        <div>
          <NuxtLink to="/" class="text-base">
            <img :src="isDesktop ? '/images/logo.png' : '/images/logo-black.png'" alt="" class="max-w-[250px]" />
          </NuxtLink>
        </div>
        <div class="flex items-center gap-10">
          <div>
            <div class="flex items-center gap-10">
              <NuxtLink to="/" class="text-base hover:opacity-85 transition-all uppercase text-white">
                Trang chủ
              </NuxtLink>
              <NuxtLink to="/tra-cuu-phat-nguoi" class="text-base hover:opacity-85 transition-all uppercase text-white">
                Tra cứu phạt nguội
              </NuxtLink>
              <NuxtLink to="/tra-cuu-diem-phat-nguoi"
                class="text-base hover:opacity-85 transition-all uppercase text-white">
                Điểm phạt nguội
              </NuxtLink>
              <NuxtLink to="/tin-tuc" class="text-base hover:opacity-85 transition-all uppercase text-white">
                Tin tức
              </NuxtLink>
              <div class="flex justify-center" v-if="loginType.loginType === HAS_VIOLATION">
                <OverlayBadge value="1" severity="danger">
                  <Button type="button" variant="link" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="p-0">
                    <img src="/images/avatar.png" className="h-10 border-[#285398] border border-solid rounded-full"
                      alt="">
                  </Button>
                </OverlayBadge>
                <Menu :model="itemsViolation" :popup="true" ref="menu" id="overlay_menu">
                  <template #item="{ item, props }">
                    <NuxtLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                      <span v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <component :is="item.icon" class="w-5" />
                        <span>{{ item.label }}</span>
                      </span>
                    </NuxtLink>
                    <NuxtLink v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                      <component :is="item.icon" class="w-5" />
                      <span>{{ item.label }}</span>
                    </NuxtLink>
                  </template>
                </Menu>
              </div>
              <div class="flex justify-center" v-if="loginType.loginType === NO_VIOLATION">
                <Button type="button" variant="link" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                  class="p-0">
                  <img src="/images/avatar.png" className="h-10 border-[#285398] border border-solid rounded-full"
                    alt="">
                </Button>
                <Menu :model="itemsNoViolation" :popup="true" ref="menu" id="overlay_menu">
                  <template #item="{ item, props }">
                    <NuxtLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                      <span v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <component :is="item.icon" class="w-5" />
                        <span>{{ item.label }}</span>
                      </span>
                    </NuxtLink>
                    <NuxtLink v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                      <component :is="item.icon" class="w-5" />
                      <span>{{ item.label }}</span>
                    </NuxtLink>
                  </template>
                </Menu>
              </div>
            </div>

            <div class="flex items-center justify-end gap-2" v-if="loginType.loginType === DEFAULT">
              <RegisterDialog />
              <span class="text-white">
                |
              </span>
              <LoginDialog />
            </div>
            <!-- )} -->
          </div>
          <!-- {loginType === NO_VIOLATION && (
              <>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button
                      variant="soft"
                      radius="full"
                      class="!w-10 !h-10 hover:cursor-pointer border-[#285398] border border-solid !p-0 relative"
                    >
                      <img src="/images/avatar.png" class="border-[#285398] border border-solid rounded-full" alt="" />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end">
                    <DropdownMenu.Item
                      class="hover:cursor-pointer"
                      onClick={() => router.push("/tai-khoan")}
                    >
                      <User class="w-5" />
                      Tài khoản
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item class="hover:cursor-pointer">
                      <LogOut class="w-5" />
                      Đăng xuất
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </>
            )} -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
