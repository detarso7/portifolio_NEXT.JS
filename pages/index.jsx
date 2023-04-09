import Header from "src/Component/Header/Header"
import client from 'src/Sanity'

// Request
export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`)

  return {
    props: {
      header
    }
  }
}
// -----------

// Content
export default function Home({header}) {

console.log(header)

  return (
    <div>
      <Header/>
    </div>
  )
}
