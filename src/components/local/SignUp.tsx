"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SetStateAction, useState } from "react"

import Link from "next/link"
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation"

export default function SignUp() {

   const router = useRouter()

   const [email, setEmail] = useState();
   const [name, setName] = useState();
   const [password, setPassword] = useState();

   const changeEmailHandler : any = (e: { target: { value: SetStateAction<undefined> } }) => 
    {
        setEmail(e.target.value);
    }

    const changeNameHandler : any = (e: { target: { value: SetStateAction<undefined> } }) => 
      {
          setName(e.target.value);
      }

    const changePasswordHandler : any = (e: { target: { value: SetStateAction<undefined> } }) => 
    {
        setPassword(e.target.value);
    }

    const submitHandler : any = async (data: any) => 
    {
      const response = await fetch("http://127.0.0.1:8000/api/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(data)
        }
      )

      return response
    }

    return (
        <Card className="mx-auto max-w-sm bg-orange-100">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">SignUp</CardTitle>
          <CardDescription>Enter your email and password to SignUp</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Name</Label>
                <Input className="bg-white-500" id="email" type="email" placeholder="Juan Dela Cruz" value={name} onChange={changeNameHandler}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input className="bg-white-500" id="email" type="email" placeholder="juandelacruz@kapecompass.com"value={email} onChange={changeEmailHandler}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input className="bg-white-500" id="password" type="password" value={password} onChange={changePasswordHandler}/>
            </div>

            <Button type="submit" className="w-full" onClick={ async () => {
              const data = {
                name: name,
                email: email,
                password: password
              }

              const response = await submitHandler(data)


              if (response.status == 422 || response.status == 401) {
                const messsage = await response.json()
                Swal.fire({
                  icon: "error",
                  title: "Please try again",
                  text: messsage.message,
                });
              }
              else {
                const token = await response.json()

                localStorage.setItem("token", token.token)
                
                Swal.fire({
                  icon: "success",
                  title: "You are now redireceted",
                  text: "Login Successful",
                });

                router.push('/profile')
              }
            }}>
                SignUp
            </Button>

            <Button variant={"secondary"} type="submit" className="w-full" onClick={() => {
              router.push('/login')
            }} >
                Login
            </Button>

            <CardDescription>Forgot Password? <Link href={"/forgot"} > Click here</Link> </CardDescription>
          </div>
        </CardContent>
      </Card>
    );
}