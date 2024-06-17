"use client"
import { useEffect, useState } from "react"
import isLogin from "../../../hooks/auth"
import { useRouter } from "next/navigation";
import ProfileCard from "@/components/local/ProfileCard";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Skeleton } from "@/components/ui/skeleton"


export default function Profile() {
    const router = useRouter()

    const [profile, setProfile] = useState<any>({});
    const [isLoading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const token = localStorage.getItem("token")

        const check = async () => {
            const l = await isLogin(token)
            
            setLoading(true)

            if (l.status == 401) {
                router.push('/login')
            }
            else {
                setLoading(false)
                const prf = await l.json()
                console.log(prf)
                setProfile(prf)
            }
        }
        check()

    },[]) 

    if (isLoading) {
        return (
            <div className="flex flex-col space-y-3 justify-center items-center p-10">
            <Skeleton className="h-[125px] w-[300px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-[125px] w-[350px] rounded-xl" />
            </div>
            </div>
        )
    }
    
    return (
        <>
            <div className="flex flex-col items-center justify-center p-10">
                <ProfileCard name={profile.name} bio={profile.email} created_at={profile.created_at}/>

                <p>Your reviews</p>
                <Card className="w-96">
                    <CardHeader>
                        <CardTitle>Your Coffee Shop Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                         
                    </CardContent>
                    <CardFooter>

                    </CardFooter>
                </Card>
                
            </div>
        </>
    )
}