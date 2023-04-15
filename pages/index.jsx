import About from "src/Component/About/About"
import Header from "src/Component/Header/Header"
import Skill from "src/Component/Skill/Skill"
import client from 'src/Sanity'

// Request
export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`)
  const about = await client.fetch(`*[_type == "about"][0]`)

  return {
    props: {
      header,
      about
    }
  }
}
// -----------


// Content
export default function Home({header, about}) {

  return (
    <>
      <Header header={header}/>
      <main>
        <About about={about}/>
        <Skill/>
      </main>
    </>

  )
}
