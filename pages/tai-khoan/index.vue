<template>
    <div class="container lg:max-w-[1024px] pt-20 lg:pt-[97px]">
      <div class="pt-5 lg:pt-10 border-b-[1px] border-primary border-solid border-t-0 border-l-0 border-r-0">
        <div class="p-6 flex flex-col justify-center">
          <div class="mb-2">
            <svg
              width="80px"
              height="80px"
              viewBox="-1.6 -1.6 19.20 19.20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              strokeWidth="0.00016"
              class="mb-2 block mx-auto border border-gray-600 border-solid rounded-full"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <rect
                  x="-1.6"
                  y="-1.6"
                  width="19.20"
                  height="19.20"
                  rx="9.6"
                  fill="#ffffff"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                  fill="#2c6672"
                ></path>{" "}
                <path
                  d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                  fill="#2c6672"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div class="flex flex-col items-center justify-center gap-2">
            <button class="px-4 py-1 border-[1px] border-primary border-solid text-primary rounded transition-all hover:opacity-85">
              Đổi ảnh đại diện
            </button>
            <button class="px-4 py-1 rounded bg-white border-[1px] border-solid border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all hover:opacity-85">
              Xoá ảnh
            </button>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center mb-5">
          <div class="flex items-center gap-2">
            <p>Loại tài khoản:</p>
            <div class="flex items-center gap-2">
              <span class="bg-gray-400 text-white rounded-full px-2">
                Free
              </span>
              <span class="bg-gradient-to-r from-[#f6df91] to-[#d4af37] text-white rounded-full px-2">
                Gold
              </span>
              <span class="bg-gradient-to-r from-[#cac9c2] via-[#fafaeb] to-[#cac9c2] text-black rounded-full px-2">
                Platinum
              </span>
            </div>
          </div>
        </div>
        <div class="lg:p-6 pb-10 mx-auto">
          <h1 class="text-center text-2xl font-semibold text-primary mb-6">
            Thông tin tài khoản
          </h1>
          <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 mb-4">
            <div class="flex flex-col">
              <label class="mb-1 font-semibold">
                <span class="text-red-300">*</span>Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                class="border border-solid border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div class="flex flex-col">
              <label class="mb-1 font-semibold">Ngày sinh</label>
              <input
                type="date"
                class="border border-solid border-gray-300 p-2 rounded"
              />
            </div>
            <div class="flex flex-col">
              <label class="mb-1 font-semibold">Giới tính</label>
              <select class="border border-solid border-gray-300 p-2 rounded">
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
                <option value="3">Khác</option>
              </select>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
            <div class="flex flex-col flex-1">
              <label class="mb-1 font-semibold">
                Số điện thoại đăng nhập
              </label>
              <input
                type="text"
                placeholder="0909909099"
                class="border border-solid border-gray-300 p-2 rounded bg-gray-100"
                disabled
              />
            </div>
            <div class="flex flex-col flex-1">
              <label class="mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Nhập email"
                class="border border-solid border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div class="grid gap-4 grid-cols-1 lg:grid-cols-3">
            <div class="flex flex-col">
              <label class="mb-1 font-semibold">Địa chỉ</label>
              <input
                type="text"
                placeholder="Nhập địa chỉ"
                class="border border-solid border-gray-300 p-2 rounded"
              />
            </div>
            <div class="flex flex-col">
              <label class="mb-1 font-semibold">Quận/Huyện</label>
              <select
                defaultValue=""
                class="border border-solid border-gray-300 p-2 rounded"
              >
                <option disabled value="">
                  Chọn quận/huyện
                </option>
                <option>Quận Cầu Giấy</option>
                <option>Quận Ba Đình</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label class="mb-1 font-semibold">Thành Phố</label>
              <select
                defaultValue=""
                class="border border-solid border-gray-300 p-2 rounded"
              >
                <option disabled value="">
                  Chọn thành phố
                </option>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-2 lg:col-span-3 flex justify-center mt-6">
            <button class="bg-[#da9956] block lg:w-1/3 mx-auto text-center text-white font-semibold text-lg py-2 px-10 transition-all hover:opacity-80 mt-5">
              Lưu thông tin
            </button>
          </div>
        </div>
      </div>
      <div class="pt-5 lg:pt-8">
        <h1 class="text-center text-2xl font-semibold text-primary">
          Thông tin phương tiện
        </h1>
        <div class="lg:p-6 mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="flex flex-col gap-4 mb-4 rounded-2xl shadow-lg p-6">
              <h1 class="text-center font-semibold">Phương tiện 01</h1>
              <div class="flex flex-col flex-1">
                <label class="mb-1 font-semibold">Biển kiểm soát</label>
                <input
                  type="text"
                  placeholder="29K1-903.98"
                  disabled
                  class="border border-solid border-gray-300 p-2 rounded"
                />
              </div>
              <div class="flex flex-col flex-1">
                <label class="mb-1 font-semibold">Loại phương tiện</label>
                <input
                  type="text"
                  placeholder="Ô tô"
                  class="border border-solid border-gray-300 p-2 rounded bg-gray-100"
                  disabled
                />
              </div>
              <div class="flex items-center justify-between gap-4">
                <button class="flex text-sm items-center gap-2 px-2 py-1 border-[1px] border-solid border-primary text-primary hover:text-white hover:bg-primary rounded transition-all hover:opacity-85">
                  <LucidePencil class="w-4" />
                  Chỉnh sửa
                </button>
                <button class="flex text-sm items-center gap-2 px-2 py-1 rounded bg-white border-[1px] border-solid border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all hover:opacity-85">
                  <LucideTrash class="w-4" />
                  Xoá phương tiện
                </button>
              </div>
            </div>
            <div class="flex flex-col gap-4 mb-4 rounded-2xl shadow-lg p-6">
              <h1 class="text-center font-semibold">Phương tiện 02</h1>
              <div class="flex flex-col flex-1">
                <label class="mb-1 font-semibold">Biển kiểm soát</label>
                <input
                  type="text"
                  placeholder="29F1-125.53"
                  disabled
                  class="border border-solid border-gray-300 p-2 rounded"
                />
              </div>
              <div class="flex flex-col flex-1">
                <label class="mb-1 font-semibold">Loại phương tiện</label>
                <input
                  type="text"
                  placeholder="Ô tô"
                  class="border border-solid border-gray-300 p-2 rounded bg-gray-100"
                  disabled
                />
              </div>
              <div class="flex items-center justify-between gap-4">
                <button class="flex text-sm items-center gap-2 px-2 py-1 border-[1px] border-solid border-primary text-primary hover:text-white hover:bg-primary rounded transition-all hover:opacity-85">
                  <LucidePencil class="w-4" />
                  Chỉnh sửa
                </button>
                <button class="flex text-sm items-center gap-2 px-2 py-1 rounded bg-white border-[1px] border-solid border-red-600 text-red-600 hover:text-white hover:bg-red-600 transition-all hover:opacity-85">
                  <LucideTrash class="w-4" />
                  Xoá phương tiện
                </button>
              </div>
            </div>
          </div>

          <button class="mx-auto mt-4 flex text-sm text-center items-center gap-2 px-2 py-1 border-[1px] border-solid border-primary text-primary hover:text-white hover:bg-primary rounded transition-all hover:opacity-85">
            <LucidePlus class="w-4" />
            Thêm phương tiện
          </button>
          <div class="sm:col-span-2 lg:col-span-3 flex justify-center mt-4">
            <button class="bg-[#da9956] block lg:w-1/3 mx-auto text-center text-white font-semibold text-lg py-2 px-10 transition-all hover:opacity-80 mt-5">
              Lưu thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
</template>