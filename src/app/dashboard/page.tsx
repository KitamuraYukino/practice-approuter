import { Suspense } from "react"
import{ PostFeed, Wether } from './Components'


export default function Posts() {
  // return <h1>Hello, Dashborad Page!</h1>

  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
      <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading Wether...</p>}>
        <Wether />
      </Suspense>
    </section>
  )
}
