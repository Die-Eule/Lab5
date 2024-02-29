import { ROUTER } from "@/router/router.enum";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./header.css"
import MenuBtn from "../MenuBtn/MenuBtn";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Image src="/Logo.png" width={157} height={63} alt="Pokemon"></Image>
            </div>
            <div className="menu">
                <MenuBtn><Link href={ROUTER.HOME}>Home</Link></MenuBtn>
                <MenuBtn><Link href={ROUTER.CARDS}>Pokedex</Link></MenuBtn>
                <MenuBtn>Legendaries</MenuBtn>
                <MenuBtn>Documentation</MenuBtn>
            </div>
        </header>
    );
};

export default Header;