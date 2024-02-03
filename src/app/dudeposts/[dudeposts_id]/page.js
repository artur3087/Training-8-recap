// dudecomments_id page.js//

// !!! THIS PAGE WILL ALLOW ME TO SHOW SINGULAR POST / COMMENT from page dudecomments !!! //

// importing hot stuff below: // 

import { sql } from "@vercel/postgres";

import { revalidatePath } from "next/cache";

import Link from "next/link";


// Main function below:
export default async function SinglePostPage ({params}) { // START of SinglePostPage // params implemented here //

    // atributting all consts below and making them being connected and wait for sql database
    const post = await sql`SELECT * FROM posts WHERE id = ${params.dudeposts_id}`;
    const comments = await sql`SELECT * FROM comments where post_id = ${params.dudeposts_id} ORDER BY id desc`

    async function handleAddComment(formData) {
        "use server";
        const username = formData.get("username");
        const content = formData.get("content");

        await sql`INSERT INTO comments (username, content, post_id) VALUES (${username}, ${content}, ${params.dudeposts_id})`;
        revalidatePath(`/dudeposts/${params.dudeposts_id}`)
    }

    return ( // START OF RETURNING in SinglePostPage //
    

        <div>
            <br>
            </br>
            <h1> Here is your post, dude:</h1>
            <br></br>
            <h2>{post.rows[0].title}</h2>
            <p>{post.rows[0].content}</p>
            <Link className = "postediting" href = {`/dudeposts/${params.dudeposts_id}/edit`}>Dude, ... want to edit it?</Link>

            <form action = {handleAddComment}>
                <br></br>
                <h3>Add a comment to this post:</h3>
                <input name="username" placeholder="Dude&apos; name (username)" />
                <textarea name = "content" placeholder="Dude&apos; comment"></textarea>

                <button>SUBMIT, dude!</button>
            </form>

            {comments.rows.map((comment) => { {/*START OF maping */}

                return (<div key = {comment.id} >

                    
                    <h3>{comment.username}:
                    </h3>
                    
                    <p>{comment.content}</p>
                    <div className="commentedit">
                    <Link href={`/dudeposts/${params.dudeposts_id}/comments/${comment.id}/edit `} >
                        EDIT, dude?
                    </Link>
                    </ div>
                    </div>
                   
                    
                );

            })} {/* END OF maping */}
            
        </div>


    ) // END OF RETURNING in SinglePostPage //



} // END of SinglePostPage //
