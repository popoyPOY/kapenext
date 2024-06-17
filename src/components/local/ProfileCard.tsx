"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

export default function ProfileCard(data: any) {

    return (
        <>
        <Card className="w-30">
            <CardHeader>
                <div className="flex items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle className="p-1">{data.name}</CardTitle>
                    <CardDescription>{data.created_at}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription>{data.bio}</CardDescription>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
        </>
    )
}