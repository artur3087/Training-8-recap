// admin page.js//


// PAGE OF admin NEEDS TO BE UNAVAILABLE FOR OTHER USERS. ONLY ADMIN CAN SHOULD SEE IT AFTER LOGING //

// Necessary to import:
import { auth } from "@clerk/nextjs";


export default function AdminPage () {  // START of AdminPage() //
 // Making it a secret page // Anyone who is not me, canNOT see this page //

        const {userId} = auth();  // Authentication of user depends on this variabla //

        if ( userId !== "user_2bizvSQm0CUmzqYLyszSbalO4qg" ) {
            return <h1>Dude, your access is denied! You are not welcome on this page! Go away!</h1>
        }

    return ( // START of return in AdminPage () //
    
    <div>
        
        <h1>Admin Page</h1>
        <p>Choose task:</p>
    </div>
    
    ); // END of return in AdminPage () //




}; // END of AdminPage () //