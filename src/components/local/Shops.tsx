"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"

export default function Shops( { items } : any) {

    const { shop_name, description } = items;
    
    return (
        <Card className="m-2">
            <CardHeader>
                <CardTitle>{shop_name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image className="rounded" src={"/crema.jpg"} alt="coffee_shop" height={200} width={200}></Image>
            </CardContent>
            <CardFooter>
                <CardDescription>Ratings : ⭐️⭐️⭐️⭐️⭐️</CardDescription>
            </CardFooter>
        </Card>
    )
}