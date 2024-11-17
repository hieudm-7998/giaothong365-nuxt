<template>
    <div>
        <h1 class="text-center text-lg font-semibold mb-5">
            Vui lòng chọn loại lộ trình.
        </h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <select
                class="w-full px-4 py-2 !h-10 bg-white rounded-md shadow-sm hover:cursor-pointer border-[1px] border-solid border-[#0d47a1] transition-all opacity-70"
                defaultValue="">
                <option value="" disabled>
                    Chọn loại lộ trình
                </option>
                <option value="car">Cao tốc</option>
                <option value="motorbike">Nội đô</option>
                <option value="bicycle">Quốc lộ</option>
            </select>
            <select
                class="w-full px-4 py-2 !h-10 mb-5 bg-white rounded-md shadow-sm hover:cursor-pointer border-[1px] border-solid border-[#0d47a1] transition-all opacity-70"
                defaultValue="">
                <option value="" disabled>
                    Chọn tuyến đường
                </option>
                <option value="car">Ô tô</option>
                <option value="motorbike">Xe máy</option>
                <option value="bicycle">Xe đạp</option>
            </select>
        </div>
        <p class="text-center mb-5">
            Hình ảnh bản đồ điểm phạt nguội gần khu vực bạn vừa tìm kiếm:
        </p>
        <div>
            <img src="/images/map.png" class="block mx-auto mb-10" alt="" />
        </div>
        <div class="mb-5">
            <h1 class="font-semibold text-lg text-[#0d47a1]">
                Điểm phạt nguội Giảng Võ
            </h1>
            <p class="text-base">23 Giảng Võ, Ba Đình, Hà Nội</p>
        </div>
        <div class="mb-5">
            <h1 class="font-semibold text-lg text-[#0d47a1]">
                Điểm phạt nguội Tôn Đức Thắng
            </h1>
            <p class="text-base">23 Tôn Đức Thắng, Đống Đa, Hà Nội</p>
        </div>
        <div class="mb-5">
            <h1 class="font-semibold text-lg text-[#0d47a1]">
                Điểm phạt nguội Hào Nam
            </h1>
            <p class="text-base">23 Hào Nam, Đống Đa, Hà Nội</p>
        </div>
    </div>
</template>