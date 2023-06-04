import Image from "next/image";
import Link from "next/link";
import logo from 'public/logo.webp'

const Nav = () => {
     return (
      <>
        <div className="bg-transparent ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
                <Link href="/" className="flex items-center md:pt-4 ">
                    <Image src={logo} height={200} width={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="logo"/>
                </Link> 
                <div className="w-auto " id="navbar-default">
                    <div className="font-medium  rounded-lg flex p-1 justify-center md:justify-normal  md:p-0 mt-1    flex-row space-x-8 md:mt-0 md:border-0  ">
                        <Link href="/pro" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">Pro</Link>
                        <Link href="/resources" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 ">Resources</Link>
                        
                    </div>
                </div>
            </div>
        </div>
     </>           
        
        
     )
}
export default Nav