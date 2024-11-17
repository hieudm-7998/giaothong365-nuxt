<template>
    <div class="bg-[#f5fafe] rounded-2xl shadow-lg p-10 mt-10">
        <h1 class="text-center text-lg uppercase font-semibold">
            Mời khách hàng nhập thông tin BKS cho mỗi lần tra cứu
        </h1>
        <p class="text-center mb-5">
            Nhập thông tin vào những ô dưới để tra cứu nhé bạn!
        </p>
        <div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mb-10">
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
    </div>
</template>