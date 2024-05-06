<script setup lang="ts">
import { ref } from 'vue'

const managers = ref([
  {
    fullname: 'Ergashev Qalandar Sharopovich',
    writtenBy: 'Super User',
    hits: 'hits: 0'
  },
  {
    fullname: "Bozorov Ne'mat Ergashovich",
    writtenBy: 'Super User',
    hits: 'hits: 0'
  },
  {
    fullname: 'Мамиров Феруз Тўрахонович',
    writtenBy: 'Super User',
    hits: 'hits: 0'
  },
  {
    fullname: "Jumaqulov G'olib Hasanovich",
    writtenBy: 'Super User',
    hits: 'hits: 0'
  }
])
</script>

<template>
  <section class="py-[100px]">
    <div class="container px-5 mx-auto">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div
          class="flex-wrap items-center justify-between hidden pb-4 space-y-4 flex1 flex-column sm:flex-row sm:space-y-0"
        >
          <div>
            <button
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownRadio"
              class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button"
            >
              <svg
                class="w-3 h-3 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"
                />
              </svg>
              Last 30 days
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownRadio"
              class="hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
              style="
                position: absolute;
                inset: auto auto 0px 0px;
                margin: 0px;
                transform: translate3d(522.5px, 3847.5px, 0px);
              "
            >
              <ul class="p-3 space-y-1 text-sm text-gray-700" aria-labelledby="dropdownRadioButton">
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value=""
                      name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      for="filter-radio-example-1"
                      class="w-full text-sm font-medium text-gray-900 rounded ms-2"
                      >Last day</label
                    >
                  </div>
                </li>
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100">
                    <input
                      id="filter-radio-example-2"
                      type="radio"
                      value=""
                      name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      for="filter-radio-example-2"
                      class="w-full text-sm font-medium text-gray-900 rounded ms-2"
                      >Last 7 days</label
                    >
                  </div>
                </li>
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100">
                    <input
                      id="filter-radio-example-3"
                      type="radio"
                      value=""
                      name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      for="filter-radio-example-3"
                      class="w-full text-sm font-medium text-gray-900 rounded ms-2"
                      >Last 30 days</label
                    >
                  </div>
                </li>
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100">
                    <input
                      id="filter-radio-example-4"
                      type="radio"
                      value=""
                      name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      for="filter-radio-example-4"
                      class="w-full text-sm font-medium text-gray-900 rounded ms-2"
                      >Last month</label
                    >
                  </div>
                </li>
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100">
                    <input
                      id="filter-radio-example-5"
                      type="radio"
                      value=""
                      name="filter-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      for="filter-radio-example-5"
                      class="w-full text-sm font-medium text-gray-900 rounded ms-2"
                      >Last year</label
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pointer-events-none rtl:inset-r-0 rtl:right-0 ps-3"
            >
              <svg
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 rtl:text-right">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">Teacher</th>
              <th scope="col" class="px-6 py-3">Author</th>
              <th scope="col" class="px-6 py-3">Hits</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="manager in managers"
              :key="manager.fullname"
              class="bg-white border-b hover:bg-gray-50"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 transition-all whitespace-nowrap hover:text-blue"
              >
                <router-link
                  :to="{
                    name: 'manager',
                    params: {
                      id: manager.fullname
                    }
                  }"
                >
                  {{ manager.fullname }}
                </router-link>
              </th>
              <td class="px-6 py-4">Written by {{ manager.writtenBy }}</td>
              <td class="px-6 py-4">{{ manager.hits }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
