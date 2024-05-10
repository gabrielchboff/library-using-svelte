<!-- component -->
<div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <div class="mx-auto w-full max-w-[550px]">
      <form action="?/createBook" method="POST">
        <div class="mb-5">
          <label
            for="Title"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="The title of the book"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="author"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="John Doe"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="type"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Type
          </label>
          <input
            type="text"
            name="type"
            id="type"
            placeholder="Romance"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div>
          <button
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>