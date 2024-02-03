// dudecomments page.js //


// Below I import some dude's stuff //
import {sql} from "@vercel/postgres";

import { revalidatePath } from "next/cache";

import Link from "next/link";

import { redirect } from "next/dist/server/api-utils";

import { auth } from "@clerk/nextjs";


// Below - default function created for dudes who will be able to post and comment on recaps //

export default async function DudePosts () { // START of a default function DudePosts () //
    // variables: //
    const posts = await sql`SELECT * FROM posts ORDER BY id`;

    const { userId } = auth(); // For a long time I was looking of a cause of why it does not show user ids in database...   it turned out to be a syntasx error:
    // I written auth; without any brackets before. It is lovely how such a thing can waste your time LOL //
    
    // console.log(posts); 

    async function handleCreatePost(formData) {
        "use server";
        const title = formData.get("title")
        const content = formData.get("content")

        console.log(title, content, userId)

        await sql`INSERT INTO posts (title, content, User_id) VALUES (${title}, ${content}, ${userId})`;

        revalidatePath("/dudeposts");
        
    }
     


return ( // return START for DudePosts() // 


    <div>
        
        <h2>
            Our posts, dude!
        </h2>
        <form action={handleCreatePost}>
        
        <h4>Add a new post, dude:</h4>
            <input name="title" placeholder="Make a title, dude!" />
            <textarea name="content" placeholder="Write some content, dude ;)"></textarea>
            <button>SUBMIT</button>
        </form>


        {posts.rows.map((post) => {
        return (
        <Link key={post.title} href={`/dudeposts/${post.id}`}>
            <p>{post.id}</p>  {/* I will delete this line later */}
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            
           </Link>
        );
        })}
        
      </div>



); // returnd END for DudeComments () //





}; // END of a default function DudeComment () //