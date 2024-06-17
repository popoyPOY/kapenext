"use client"
import LoginForm from "@/components/local/LoginForm"
import NavBar from "@/components/local/NavBar";

import { Button } from "@/components/ui/button";



export default function Login() {
    return (
        <>
        <NavBar/>

        <div className="m-10">
         <LoginForm/>
        </div>
        </>
    )
}