// I import all necessary stuff for my dude page //

import {sql} from "@vercel/postgres" // importing sql from vercel / postgress :D :D :D //

// Below I code functionality for this page //



export default async function DudeRecaps () { // START OF DudeRecaps () //


    const dudes = await sql`SELECT * FROM duderecaps`;
    console.log(dudes)

    return ( // START OF return FOR DudeRecaps //
    
        <div>
            <h2>Dudes' Recap Page</h2>
            <p> Recap that! Duuuudee! </p>
            {dudes.rows.map((duderecap) => {

      return <div key={duderecap.name} className="duderecaping">
        <h4>{duderecap.name}, {duderecap.importance}, {duderecap.time}</h4>
        <p>{duderecap.vital ? "Must learn it!" : "You can skip that"}</p>  {/* Here I used tenary operator which will show us which recap is must to learn in condition saying that value of vital is true */}
        
      </div>
    })}

        </div>
    
    
    ) // END OF return FOR DudeRecaps //


} // END of DudeRecaps //