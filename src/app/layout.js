import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider, UserButton, auth, currentUser} from "@clerk/nextjs";


// Below I import Link functionality //
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dudebook",
  description: "RECAPING things is vital!",
};

export default async function RootLayout({ children }) {

   // Get the userId from auth() -- if null, the user is not logged in
   const { userId } = auth();
  console.log("userID:", userId);
  // Get the Backend API User object when you need access to the user's information
  const users = await currentUser()
  console.log("user", users);
  

  return (
    
    <ClerkProvider>
      
    <html lang="en">
    
      <body className={inter.className}>
      <h6>Dudes can write posts too!</h6>
      <nav>
      <img className = "logoicon" src="./favicon.ico" width="50" height="50"></img>
     
        <Link classneme="Dudebook" href="/">Dudebook</Link>
        
        
        {userId && <UserButton ID = "userbutton" afterSignOutUrl="/" />}
        {!userId && <Link href="/sign-in">Sign in, dude!</Link>} 
      </nav>
        
        
        <h2>DudeBook Posts:</h2>


       <br/>
        
        <h5>
        
        <Link href="/">HOME PAGE</Link>
        <Link href="/duderecaps">DUDE&apos; PAST POSTS</Link>
        <Link href="/dudeposts">WRITE A POST </Link>
        
        </h5>
       
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
