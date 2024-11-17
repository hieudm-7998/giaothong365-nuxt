<template>
    <div class="footer-bg py-20 ">
        <div class="container lg:max-w-[1241px]">
            <NuxtLink class="text-base   lg:text-black block text-center lg:text-left" to="/">
                <img src="/images/logo-black.png" alt="" class="max-w-[300px] mb-10" />
            </NuxtLink>
            <div class="grid lg:grid-cols-4 lg:gap-10">
                <div class="col-span-1">
                    <div class="flex flex-col gap-2">
                        <NuxtLink to="/" class="text-base lg:text-black hover:opacity-85 transition-all">
                            Trang chủ
                        </NuxtLink>
                        <NuxtLink to="/tra-cuu-phat-nguoi"
                            class="text-base lg:text-black hover:opacity-85 transition-all">
                            Tra cứu phạt nguội
                        </NuxtLink>
                        <NuxtLink to="/tra-cuu-diem-phat-nguoi"
                            class="text-base lg:text-black hover:opacity-85 transition-all">
                            Tra cứu điểm phạt nguội
                        </NuxtLink>
                        <NuxtLink to="/faqs" class="text-base lg:text-black hover:opacity-85 transition-all">
                            FAQs
                        </NuxtLink>
                        <NuxtLink to="/doi-tac" class="text-base lg:text-black hover:opacity-85 transition-all">
                            Đối tác
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex flex-col gap-2">
                        <NuxtLink to="/dieu-khoan-su-dung"
                            class="text-base lg:text-black hover:opacity-85 transition-all">
                            Điều khoản sử dụng
                        </NuxtLink>
                        <NuxtLink to="/chinh-sach-bao-mat-thong-tin-khach-hang"
                            class="text-base lg:text-black hover:opacity-85 transition-all">
                            <!-- {isDesktop ? (
                  <> -->
                            <span class="block mb-2">
                                Chính sách bảo mật thông tin
                                khách hàng
                            </span>
                            <!-- </>
                ) : (
                  "Chính sách bảo mật thông tin khách hàng"
                )} -->
                        </NuxtLink>
                        <NuxtLink to="/chinh-sach-xu-ly-du-lieu-ca-nhan"
                            class="text-base lg:text-black hover:opacity-85 transition-all">
                            Chính sách xử lý dữ liệu cá nhân
                        </NuxtLink>
                        <NuxtLink to="/dieu-khoan-mang-xa-hoi"
                            class="text-base lg:text-black hover:opacity-85 transition-all">
                            Điều khoản mạng xã hội
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-span-2 flex flex-col gap-2 mt-5 lg:mt-0">
                    <div class="flex items-center gap-2">
                        <div class="col-span-1">
                            <LucideBuilding class="w-4" />
                        </div>
                        <div class="col-span-11">
                            <p>Company: CÔNG TY TNHH PMC BẢO HIỂM</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="col-span-1">
                            <LucideMapPin class="w-4" />
                        </div>

                        <div class="col-span-11">
                            <p>
                                <span class="block mb-2">
                                    Address: Số 51, Đường Trần Phú, Phường Dữu Lâu, Thành phố
                                    Việt Trì,
                                </span>
                                Tỉnh Phú Thọ, Việt Nam
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="col-span-1">
                            <LucideMail class="w-4" />
                        </div>

                        <div class="col-span-11">
                            <p>Email: lienhe@baohiem24h.vn</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="col-span-1">
                            <LucidePhone class="w-4" />
                        </div>

                        <div class="col-span-11">
                            <p>Tel: 1900 63 63 66</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>