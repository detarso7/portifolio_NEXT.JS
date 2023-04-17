import styles from './Project.module.scss'
import Projects from './Projects'

const Project = ({pro}) => {

   console.log(pro.projects)

    const {title, projects, button, url} = pro

    const renderProj = projects.map((p)=>(
        <Projects key={p._key} proje={p}/>
    ))

    return (
        <section className={styles.project}>
            <h2>{title}</h2>
            <ul className={styles.list}>
                {renderProj}
            </ul>
            <a href={url} className={[`btn btn-primary ${styles.margin}`]}>{button}</a>
        </section>
    )
}

export default Project