<template>
    <TraCuuPhatNguoiBanner />
    <div class="container lg:max-w-[1024px] mb-20 pt-16">
        <TabsRoot class="TabsRoot shadow-lg rounded-3xl" default-value="diem-gan-ban">
            <TabsList class="TabsList relative flex border-b border-gray-200" aria-label="Location Tabs">
                <TabsIndicator
                    class="absolute left-0 bottom-0 h-[2px] transition-transform duration-300 bg-green-500" />

                <TabsTrigger class="TabsTrigger px-4 py-2 text-gray-700" value="diem-gan-ban">
                    Điểm gần bạn
                </TabsTrigger>
                <TabsTrigger class="TabsTrigger px-4 py-2 text-gray-700" value="diem-nong">
                    Điểm nóng
                </TabsTrigger>
                <TabsTrigger class="TabsTrigger px-4 py-2 text-gray-700" value="lo-trinh-ban-den">
                    Lộ trình bạn đến
                </TabsTrigger>
            </TabsList>

            <TabsContent class="TabsContent p-5" value="diem-gan-ban">
                <div v-if="loginType.loginType === HAS_VIOLATION || loginType.loginType === NO_VIOLATION">
                    <DiemGanBan />
                </div>
                <div v-else>
                    <div>
                        <img src="/images/lock.png" class="block mx-auto w-10 mb-3" alt="" />
                        <h1 class="text-center font-semibold text-lg text-black">
                            Bạn cần đăng nhập/trở thành thành viên hạng gold trở lên
                            <br />
                            để mở khoá tính năng này.
                        </h1>
                    </div>
                </div>
            </TabsContent>

            <TabsContent class="TabsContent p-5" value="diem-nong">
                <div v-if="loginType.loginType === HAS_VIOLATION || loginType.loginType === NO_VIOLATION">
                    <DiemNong />
                </div>
                <div v-else>
                    <div>
                        <img src="/images/lock.png" class="block mx-auto w-10 mb-3" alt="" />
                        <h1 class="text-center font-semibold text-lg text-black">
                            Bạn cần đăng nhập/trở thành thành viên hạng gold trở lên
                            <br />
                            để mở khoá tính năng này.
                        </h1>
                    </div>
                </div>
            </TabsContent>

            <TabsContent class="TabsContent p-5" value="lo-trinh-ban-den">
                <div v-if="loginType.loginType === HAS_VIOLATION || loginType.loginType === NO_VIOLATION">
                    <LoTrinhBanDen />
                </div>
                <div v-else>
                    <div>
                        <img src="/images/lock.png" class="block mx-auto w-10 mb-3" alt="" />
                        <h1 class="text-center font-semibold text-lg text-black">
                            Bạn cần đăng nhập/trở thành thành viên hạng gold trở lên
                            <br />
                            để mở khoá tính năng này.
                        </h1>
                    </div>
                </div>
            </TabsContent>
        </TabsRoot>
    </div>
    <RegisterSection v-if="loginType.loginType === DEFAULT" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { TabsRoot, TabsList, TabsTrigger, TabsContent, TabsIndicator } from 'radix-vue';

const loginType = useLoginType()

const selectedTab = ref('diem-gan-ban');
</script>

<style>
.TabsRoot {
    display: flex;
    flex-direction: column;
    /* box-shadow: 0 2px 10px var(--black-a4); */
}

.TabsList {
    flex-shrink: 0;
    display: flex;
}

.TabsTrigger {
    font-family: inherit;
    background-color: #f2f2f2;
    padding: 1.5rem;
    text-align: center;
    height: 45px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    color: #afafaf;
    user-select: none;
}

.TabsTrigger:first-child {
    border-top-left-radius: 6px;
}

.TabsTrigger:last-child {
    border-top-right-radius: 6px;
}

.TabsTrigger:hover {
    opacity: 80%;
    cursor: pointer;
}

.TabsTrigger[data-state="active"] {
    background-color: #f5f9fe;
    color: #0d47a1;
}

.TabsTrigger:focus {
    position: relative;
    /* box-shadow: 0 0 0 2px black; */
}

.TabsContent {
    flex-grow: 1;
    padding: 2rem;
    background-color: #f5f9fe;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    outline: none;
}
</style>