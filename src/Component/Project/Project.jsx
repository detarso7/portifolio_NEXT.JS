import styles from './Project.module.scss'
import Projects from './Projects'

const Project = () => {
    return (
        <section className={styles.project}>
            <h2>Projetos</h2>
            <ul className={styles.list}>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
            </ul>
            <a href="#" className="btn btn-primary">Veja Mais</a>
        </section>
    )
}

export default Project