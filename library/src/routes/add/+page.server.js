

import { fail } from "@sveltejs/kit";
import { prisma } from "../../lib/server/prisma.js";

/** @type {import('./$types').Actions} */
export const actions = {
    createBook: async ({ request }) => {
        const { title, author, type } = Object.fromEntries(await request.formData());
        try {
           await prisma.book.create({
               data: {
                   title,
                   author,
                   type
               }
           }) 
        } catch (error) {
            console.log(error);
            return fail(500, { message: "Something went wrong" });
        }

        return {
            status: 201
        }
    }

}
