// Below I import some dude's stuff //
import {sql} from "@vercel/postgres";



// Below - default function created for dudes who will be able to post and comment on recaps //

export default async function DudeComments () { // START of a default function DudeComment () //

    // variables: //
    const posts = await sql`SELECT * FROM posts`;
    console.log(posts); 



return ( // return START for DudeComments() // 


    <div>
        <h2>
            Post here, dude: 

        </h2>
        {posts.rows.map((post) => {
        return <div key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            </div>

        })}
    </div>



); // returnd END for DudeComments () //





}; // END of a default function DudeComment () //