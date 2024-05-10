<script>
    import Search from "$lib/components/Search.svelte";
    
	export let data;
    export let form;
    console.log("Form", form)
</script>
<Search></Search>
<div class="flex flex-col items-center p-12">
    <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
            <table class="min-w-full">
            <thead class="bg-white border-b">
                <tr>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Title
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Author
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Type
                </th>
                </tr>
            </thead>
            <tbody>
                {#if form !== null}
                <tr class="bg-gray-100 border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {form.book.title}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {form.book.author}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {form.book.type}
                    </td>
                </tr>
                {:else}
                {#each data.books as book}
                    <tr class="bg-gray-100 border-b">
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {book.title}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {book.author}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {book.type}
                        </td>
                    </tr>
                {/each}
                {/if}

             

                
            </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
 