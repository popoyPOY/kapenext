import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import isLogin from "../../../hooks/auth";



export  default function NavBar() {
    return (
        <nav className="flex justify-between flex-row px-10 items-center">
          <div>
            <Image src={"/LOGO.png"} alt="logo" height={100} width={100}></Image>
          </div>

          <ul className="flex-row flex items-center">
            <li className="px-10">
              <Link href={'profile'}>Profile</Link>
            </li>
            <li className="px-10">
              <Link href={'shops'}>Coffee Shops</Link>
            </li>
            <li className="px-10">
              <Link href={'contact'}>Contact Us</Link>
            </li>
            <li className="px-10">
              <Link href={"login"} className={buttonVariants({ variant: "outline"})}>Login/SignUp</Link>
            </li>
          </ul>
        </nav>
    );
}