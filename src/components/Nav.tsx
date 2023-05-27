import Image from "next/image";
import Link from "next/link";
import logo from 'public/logo.webp'

const Nav = () => {
     return (
      <>
        <div className="bg-transparent ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
                <Link href="/" className="flex items-center pt-4">
                    <Image src={logo} height={200} width={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="logo"/>
                </Link> 
                <div className="w-auto" id="navbar-default">
                    <div className="font-medium flex p-5 justify-center md:justify-normal  md:p-0 mt-1    flex-row space-x-8 md:mt-0 md:border-0  ">
                        <Link href="/pro" className=" py-1 pl-3 pr-4 text-white rounded-md bg-blue-500 border-0 hover:text-blue-700 transition-all hover:bg-purple-200 p-0 ">Pro</Link>
                        <Link href="/resources" className=" py-1 md:pl-3 pr-4 text-gray-900 rounded transition-all   border-0 hover:text-blue-700 hover:font-bold ">Resources</Link>
                        
                    </div>
                </div>
            </div>
        </div>
     </>           
        
        
     )
}
export default Nav