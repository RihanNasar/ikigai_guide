import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
type PaidResource = {
  paid_resource: string,
  linkFor: string
}
type FreeResource = {
  free_resource: string,
  linkFor: string
}
type CareerData = {
    career: string;
    summary: string;
    paid_resources: PaidResource[];
    free_resources: FreeResource[];
  };
  
 
type Props = {
  careers: string[],
  careerList?: CareerData[]
}

const ResponseList = ({careerList,careers}: Props) => {
  return (
    <>
    {careers.length !== 0 ? 
      <div className='w-full md:w-9/12 text-white p-12 flex flex-col bg-blue-500 rounded-lg'>
        <div className="m-5 bg-white text-blue-500 rounded-lg p-5">
          <p className="text-xs font-semibold my-3 ">These are the List of careers you can pursue:</p>
          <ul className="mb-8 space-y-4 text-left   ">
            <>
            {careers.map((career,index) => (
              <li key={uuidv4()} className='flex items-center text-sm font-bold space-x-3'>🎯 {career}</li>
            ))}
          </>
          </ul>
  
          
        </div>
        <div className="flex flex-col">
            <>
            {careerList ? careerList.map((career,index) => (
              <div key={uuidv4()} className="flex flex-col m-5 spacing-y-3 p-5 gap-4 bg-white text-blue-600 rounded-lg ">
                <h5 className='text-xl font-bold text-left'>
                  {career.career}
                </h5>
                <p className="text-md font-light space-x-2 ">{career.summary}</p>
                
                <div className='bg-blue-500 text-white rounded-lg p-4 '>
                  <p className="text-md font-light space-x-2 my-4">Here are some paid resources prepared for you :</p>
                  <div className="flex flex-wrap my-4 gap-3 ">
                  {career.paid_resources.map(({paid_resource,linkFor}) => (
                  <p key={uuidv4()} className=' items-center font-light text-sm mr-4'>
                    <Link key={uuidv4()} href={linkFor}>🔗 {paid_resource}</Link>
                  </p>
                ))}
                 </div>
                
                </div>
                <div className='bg-blue-500 text-white rounded-lg p-4 my-6 '>
                  <p className="text-md font-light space-x-2 my-4">Here are some free resources prepared for you :</p>
                  <div className="flex flex-wrap my-4 gap-3 ">
                  {career.free_resources.map(({free_resource,linkFor}) => (
                  <p key={uuidv4()} className=' items-center font-light text-sm mr-4'>
                    <Link key={uuidv4()}  href={linkFor}>🔗 {free_resource}</Link>
                  </p>
                ))}
                 </div>
                
                </div>
                
                
              </div>
              
            )) : console.log('oops something went wrong')}
            </>
        </div>
      </div> : (
        <div className=""></div>
      )}
      </>
  )
}

export default ResponseList