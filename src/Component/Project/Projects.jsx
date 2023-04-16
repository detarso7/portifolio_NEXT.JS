import styles from './Projects.module.scss'

const Projects = () => {
    return (
            <>
                <li className={styles.projects}>
                    <a href="#">
                        <div className={styles.image}>

                        </div>
                        <span>React</span>
                        <span>Sanity</span>
                        <span>Next.js</span>
                        <h3 className='h5'>Titulo do projeto</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut corporis cum numquam exercitationem soluta obcaecati!</p>
                    </a>
                </li>
            </>
    )
}

export default Projects