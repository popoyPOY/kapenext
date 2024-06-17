"use client"
import NavBar from "@/components/local/NavBar"
import Review from "@/components/local/Review"
import { useEffect, useState } from "react"
import LoginNavBar from "@/components/local/loginNavBar"
const coffeShops = async () => {
    const response = await fetch('http://localhost:8000/api/shop/');
  
    return response.json();
  }
  
export default function Shops() {

    const [shop, setShop] = useState([]);

    useEffect(() => {
        
        const receive = async () => {
            const c = await coffeShops()
            setShop(c);
        }
        receive()
    },[])


    return (
        <>
        <LoginNavBar />
        
        <div className="font-medium">

        </div>

        <div className="items-center justify-center p-10 flex flex-wrap">
            {
                shop.map((shop,key) => {
                    return (
                        <div className="m-10" key={key}>
                        <Review items={shop} key={key} />
                        </div>
                    );
                })
            }
        </div>
        </>
    )
}