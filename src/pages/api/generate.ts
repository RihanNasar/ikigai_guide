// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import openai from '@/utils/config'
import {RESPONSE_ATTRIBUTE} from '@/utils/RESPONSE_ATTRIBUTE'
type Data = {
  name: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    // create an object with the value string and inter
    const skills: string = req.body.input;
    const stage : string = req.body.stage;
    const money : string = req.body.money
    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: "user",
          content: `write atleast 5 good careers to follow or pursue using the concept of ikigai for a person ${stage} and is good at ${skills} for whom money is ${money},write it in the following description or detail
          -careers which would be a good fit for them, in single line
          -write name of each career and a a brief summary of it  and explain very lengthy detail or more than 200 words on why that specific career would be a good fit for them based on the concept of ikigai,
          -best 5 paid resources for pursuing each careers and the links for them
          -best 5 free resources for pursuing each career and the links for them
          ,make sure to present this in a very funny and cool tone
          and format the response in the following json object ${JSON.stringify(RESPONSE_ATTRIBUTE)}`
        }]
    })
    const result = completion.data.choices[0].message?.content
    if (completion) {
      console.log(result)
      return res.status(200).json( {output : result} )
    } else {
      return res.status(200).json( 'something went wrong' )
    }
  } catch (err) {
    console.log("ad")
    return res.status(200).json( {message: 'internal server error'} )
  }}

