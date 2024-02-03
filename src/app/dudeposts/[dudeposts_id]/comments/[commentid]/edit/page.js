// Editing page for comments //


// Below; I import necessary stuff from dependencies //

import { sql } from "@vercel/postgres";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

// Main function:
export default async function EditComment({params}) { // START of function EditComment //

    //variables:
    const comment = await sql`SELECT * FROM comments where id = ${params.commentid}`;

    // async function inside function EditComment:
    async function handleEditedComment(formData) { // START of function handleEditedComment //
    "use server"

    //variables:
    const username = formData.get("username");
    const content = formData.get("content");

    await sql`UPDATE comments SET username = ${username}, content =${content} WHERE id = ${params.commentid}`;
    revalidatePath(`/posts/${params.dudeposts_id}`);
    redirect(`/dudeposts/${params.dudeposts_id}`);
    
    } // END of function handleEditedComment //

return ( // START of return for Main function //

<div>
    <h2>EDIT YOUR COMMENT, DUDE?</h2>
    <form action ={handleEditedComment}>
        <h3>Add a comment</h3>
        <input name="username" placeholder="Dudesname (username)" defaultValue={comment.rows[0].username} />
        <textarea name="content" placeholder="Content" defaultValue = {comment.rows[0].content} />
    <button>SUBMIT</button>
    </form>
</div>

); // END of return for main function //


} // END of function EditComment //

