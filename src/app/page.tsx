import NavBar from "@/components/local/NavBar";
import Shops from "@/components/local/Shops";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";



interface Shop {
  shop_id: number,
  description: string,
  image: string,
  lat: string,
  long: string,
}


const coffeShops = async () => {
  const response = await fetch('http://localhost:8000/api/shop/');

  return response.json();
}



export default async function Home() {

  const coffee = await coffeShops();

  return (
    <main className="">
      <NavBar/>
      
        
      <div className="flex-1 flex items-center justify-center p-10 flex-wrap">
        {
          coffee.map((items: any, key: any) => {
            return (
              <Shops items={items}  key={key}/>
            )
          })
        }
      </div>
    </main>
  );
}
