import { NextRequest, NextResponse } from "next/server";
import isLogin from "./hooks/auth";

export async function middleware(request: NextRequest) {
    const token = localStorage.getItem("token")

    const response = (await isLogin(token))

    if (request.nextUrl.pathname === "/profile") {
        
        if (response.status === 401) {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }


    if (request.nextUrl.pathname.startsWith('/login')) {
        if (response.ok) {
            return NextResponse.redirect(new URL("/profile", request.url))
        }
    }
}