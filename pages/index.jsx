import About from "src/Component/About/About"
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

  return (
    <>
      <Header header={header}/>
      <main><About/></main>
    </>

  )
}
