import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider, UserButton, auth, currentUser} from "@clerk/nextjs";


// Below I import Link functionality //
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RECAPweek8",
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
     
      <nav>
        <p>Dude:</p>
        {userId && <UserButton ID = "userbutton" afterSignOutUrl="/" />}
        {!userId && <Link href="/sign-in">Sign in, dude!</Link>} 
      </nav>
        
        <h1>RECAPweek8</h1>


        <p> Sounds great! Just kidding! It&apos; awful</p>
        
        <h5>
        <Link href="/">MAINrecapPAGE</Link>
        <Link href="/duderecaps">DUDErecaps</Link>
        <Link href="/dudecomments">DUDEpostsANDcomments</Link>
        
        </h5>
       
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
