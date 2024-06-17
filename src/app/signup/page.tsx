"use client"
import SignUp from "@/components/local/SignUp";
import NavBar from "@/components/local/NavBar";

import { Button } from "@/components/ui/button";



export default function Login() {
    return (
        <>
        <NavBar/>

        <div className="m-10">
         <SignUp/>
        </div>
        </>
    )
}