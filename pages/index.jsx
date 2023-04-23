import About from "src/Component/About/About"
import Footer from "src/Component/Footer/Footer"
import Header from "src/Component/Header/Header"
import Project from "src/Component/Project/Project"
import Skill from "src/Component/Skill/Skill"
import client from 'src/Sanity'

// Request
export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`)
  const about = await client.fetch(`*[_type == "about"][0]`)
  const skills = await client.fetch(`*[_type == "skills"][0]`)
  const projects = await client.fetch(`*[_type == "projects"][0]`)
  const contact = await client.fetch(`*[_type == "contact"][0]`)

  return {
    props: {
      header,
      about,
      skills,
      projects,
      contact
    }
  }
}
// -----------


// Content
export default function Home({header, about, skills, projects, contact}) {

  return (
    <>
      <Header header={header}/>
      <main>
        <About about={about}/>
        <Skill skills={skills}/>
        <Project pro={projects}/>
        <Footer/>
      </main>
    </>

  )
}
