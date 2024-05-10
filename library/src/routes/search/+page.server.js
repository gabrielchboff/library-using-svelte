
import { prisma } from "../../lib/server/prisma.js";
import { fail } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
async function load({ params }) {
    return {
        books: await prisma.book.findMany()
    }
}

/** @type {import('./$types').Actions} */
const actions = {
    searchBook:  async ({ request }) => {
        const { search } = Object.fromEntries(await request.formData());
        console.log(search);
        try {
            return {
                book: await prisma.book.findMany({
                    where: {
                        title: {
                            equals: search
                        }
                    }
                })
            }
        } catch (error) {
            console.log(error);
            return fail(500, { message: "Something went wrong" });
        }
    }

}

export { load, actions }