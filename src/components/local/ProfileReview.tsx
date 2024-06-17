"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

const ratings: any = {
    1 : "⭐️",
    2 : "⭐️⭐️",
    3 : "⭐️⭐️⭐️",
    4 : "⭐️⭐️⭐️⭐️",
    5 : "⭐️⭐️⭐️⭐️⭐️",
}

const review = async (id: any) => {
    const response = await fetch(`http://localhost:8000/api/shop/${id}/review`)

    return response.json();
}


export default function  ProfileReview( { id }: any) {

    const [re, setReview] = useState([])

    useEffect(() => {
        try {
            const x = async () => {
                const l = await review(id)
    
                setReview(l)
            }
            x()
        } catch (error) {
            console.log(error)
        }
    },[])


    return (
        <>
            {
                re.map((e: any, key) => {
                    return (
                        <Card className="w-96">
                        <CardHeader className="flex-row items-center">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardTitle className="px-2">Anonymous</CardTitle>
                            <CardDescription className="px-20">{e.created_at.split("T")[0]}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{e.comment}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <CardDescription>Ratings: {ratings[e.rating]}</CardDescription>
                        </CardFooter>
                    </Card>
                    )
                })
            }
            {
        }
        </>
    )
}