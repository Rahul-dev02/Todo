
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const MenuBar=()=>{
     const pathName=usePathname()
    return(<>
        <Link href="/" className={pathName==="/"?"active":""}>Home</Link>
        <Link href="/show" className={pathName==="/show"?"active":""}>Show</Link>      
           
    </>)
}
export default MenuBar;