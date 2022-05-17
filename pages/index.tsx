import type { NextPage } from 'next'
import dynamic from 'next/dynamic';

const DynamicEditor = dynamic(
  () => import('../components/ReEditor'),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <div>
      <DynamicEditor />
    </div>
  )
}

export default Home
