import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Nav from '@/components/Nav'
import { useState } from 'react'
import { RESPONSE_ATTRIBUTE } from '@/utils/RESPONSE_ATTRIBUTE'
const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export default function Home() {

  type Resource = {
    paid_resource: string;
    link: string;
  };
  type Resource2 = {
    free_resource: string;
    link: string;
  };
  
  type CareerObject = {
    career: string;
    summary: string;
    paid_resources: Resource[];
    free_resources: Resource2[];
  };
  
  type ResponseAttribute = [
    string[],
    CareerObject,
    ...CareerObject[]
  ];
  const [input,setInput] = useState<string>('')
  const [stage,setStage] = useState<string>('')
  const [money,setMoney] = useState<string>('')
  const [ResponseOutput,setOutput] = useState<any>([])

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("fdfds")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input,stage,money}),
    });
    
    const data = await response.json();
    // destructure
  
    
    setOutput(data)
    console.log(ResponseOutput.careers)
    
  }
  return (
    <>
      <Nav />
      <div className={`w-full flex md:my-12 justify-center m-auto items-center ${poppins.className}`}>
      <form onSubmit={onSubmitForm} className="flex flex-col justify-center p-6 w-full   md:w-6/12 flex-wrap">
        <div className="flex flex-col m-4 ">
          <label  className="block relative mb-2 ml-1  text-xs md:text-sm left-0  font-light text-black self-start">What stage of life are you at right now?</label>
          <select required onChange={(e) => setStage(e.target.value)}  className="bg-transparent border-gray-400 border outline-1 outline-indigo-300 text-gray-900 text-sm rounded-lg transition-all ease-linear duration-100 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option value='who have just graduated highschool'>I have just graduated highschool</option>
            <option value="who have just graduated university">I have graduated university/college</option>
            <option value='who is exploring new and different things'>I am currently exploring different things</option>
          </select>
        </div>
        <div className="flex flex-col m-4 ">
          <label   className="block relative mb-2 ml-1  text-xs md:text-sm left-0 font-light text-black self-start">How imporant is money for you?</label>
          <select required onChange={(e) => setMoney(e.target.value)}  className=" bg-transparent border-gray-400 border text-gray-900 outline-1 outline-indigo-300 transition-all ease-linear duration-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option value='who have just graduated highschool'>Very important</option>
            <option value="who have just graduated highschool">Moderately important</option>
            <option value='who is exploring new and different things'>Not that important</option>
          </select>
        </div>
      <div className=" m-4 flex flex-col">
        <label  className="block mb-2 text-xs md:text-sm font-light text-gray-900 self-start">What are the things that you are good at?</label>
        <textarea required onChange={(e) => setInput(e.target.value)} value={input}className="block p-4 md:p-2.5 w-full text-xs md:text-sm text-gray-900 bg-transparent rounded-lg border-gray-400 border focus:ring-blue-500 outline-1 outline-indigo-300  transition-all ease-linear duration-25 focus:border-blue-500 " placeholder="Eg: coding,marketing,football,cooking etc...."></textarea>
       </div>
       <button type="submit" className='bg-indigo-600 text-white p-2 rounded-lg w-1/2 m-auto self-center transition-all ease-in-out duration-75 hover:bg-indigo-400 hover:font-bold hover:text-indigo-950'>Submit</button>
       
       

      </form>
    </div>
    </>
  )
}
