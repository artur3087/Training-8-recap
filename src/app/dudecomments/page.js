// Below I import some dude's stuff //
import {sql} from "@vercel/postgres";

import { revalidatePath } from "next/cache";

// Below - default function created for dudes who will be able to post and comment on recaps //

export default async function DudeComments () { // START of a default function DudeComment () //

    // variables: //
    const posts = await sql`SELECT * FROM posts`;
    
    console.log(posts); 

    async function handleCreatePost(formData) {
        "use server";
        const title = formData.get("title")
        const content = formData.get("content")

        console.log(title, content)
        await sql`INSERT INTO posts (title, content) VALUES (${title}, ${content})`;

        revalidatePath("/dudecomments")
    }
    


return ( // return START for DudeComments() // 


    <div>
        <h2>
            Our posts, dude!
        </h2>
        <form action={handleCreatePost}>
        
        <h4>Add a new content, dude:</h4>
            <input name="title" placeholder="title" />
            <textarea name="content" placeholder="content"></textarea>
            <button>SUBMIT</button>
        </form>
        {posts.rows.map((post) => {
        return <div key={post.title}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
           </div>
        })}
        
      </div>



); // returnd END for DudeComments () //





}; // END of a default function DudeComment () //