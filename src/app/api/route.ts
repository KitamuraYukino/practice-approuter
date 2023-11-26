/*export const dynamic = 'force-dynamic'
export async function GET(request:Request) {
  
}
*/

import { cookies } from "next/headers";

export async function GET(request:Request) {
  const cookiesStore = cookies()
  const token = cookiesStore.get('token')

  return new Response('Hello, Next.js!',{
    status: 200,
    headers:{'Set-Cookie': `token=${token.value}`},
  })
}
