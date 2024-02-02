// Edit page //


// Importing necessary stuff:

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// Default function:
export default async function Edit( {params} ) { // START of funtion Edit()//

    //Variables:
    const post = await sql`SELECT * FROM posts WHERE id = ${params.dudeposts_id}`; // atributing to variable post, functionality of making a call to sql database and wate for data and choose 'posts' (data) from database which id can be made via dudeposts page functionaliy //

async function handleEditPost(formData) { // START of function handleEditPost //

    "use server"; 

    // Variables:
    const title = formData.get("title");
    const content = formData.get("content");

    await sql`UPDATE posts SET title = ${title}, content = ${content} WHERE id = ${params.dudeposts_id}`; // It is impressive that we can use commands which originated from SQL //
    revalidatePath(`/dudeposts`);
    revalidatePath(`/dudeposts/${params.dudeposts_id}`);
    redirect(`/dudeposts/${params.dudeposts_id}`);   

} // END of function handleEditPost //


return ( // START for RETURN of function Edit () .. //

    <div>
        <h2>EDIT for post: <br /> <br /> {post.rows[0].title}</h2>
        <form action={handleEditPost}>
            <h4>Add a new post, dude!</h4>
            <input 
            name="title" 
            placeholder="post title" 
            defaultValue={post.rows[0].content} 
            />
            <textarea 
            name="content" 
            placeholder="post content" 
            defaultValue={post.rows[0].content} 
            ></textarea>
            <button>SUBMIT</button>
        </form>
    </div>




); // .. END for RETURN of function Edit () .. //


} ; // END of Edit()//