"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { SetStateAction, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Swal from "sweetalert2"
import { useRouter } from 'next/navigation';
  

export default function WriteReview({ shop_name, shop_id }:any) {
    const router = useRouter();

    const [rating, setRating] = useState(0)
    const [review, setReview] = useState()

    const changeReviewHandler : any = (e: { target: { value: SetStateAction<undefined> } }) => 
        {
            setReview(e.target.value);
        }

    const handleSubmit = async  (data: any) => {
        try {
            const response = await fetch(`http://localhost:8000/api/shop/${shop_id}/review`,
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(data)
                }
            )

            if (response.status == 200) {
                Swal.fire({
                    icon: "success",
                    title: "Your review has been added",
                    text: "Your review has been added successfully"
                  });
                router.refresh()
            }

            else {
                Swal.fire({
                    icon: "error",
                    title: "Your are not authenticated",
                    text: "Please login again"
                  });
                router.replace('/login')
            }

        } catch (error) {
            Swal.fire("Error Occured")
        }
    }

    return (
        <>
            <Card className="w-96">
                <div className="flex-row flex p-5">
                    <CardDescription className="px-2">Write a review for {shop_name}</CardDescription>
                </div>

                <CardContent className="items-center justify-center flex flex-col">
                    <Input className="m-2" type="text" placeholder="Review" value={review} onChange={changeReviewHandler}></Input>
                    <Select onValueChange={(e: any) => (setRating(e))}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Rating" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1 🌟</SelectItem>
                            <SelectItem value="2">2 🌟🌟</SelectItem>
                            <SelectItem value="3">3 🌟🌟🌟</SelectItem>
                            <SelectItem value="4">4 🌟🌟🌟🌟</SelectItem>
                            <SelectItem value="5">5 🌟🌟🌟🌟🌟</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="m-2" onClick={() => {
                        const data = {
                            comment: review,
                            rating: 5
                        }
                        handleSubmit(data)
                    }}>Submit</Button>
                </CardContent>
            </Card>
        </>
    )
}