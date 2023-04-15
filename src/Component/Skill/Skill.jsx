import styles from './Skill.module.scss'
import Experience from './Experience'

const Skill = () => {
    return (
        <section className={styles.section}>
            <div className={styles.skills}>
                <div className={styles.heading}>
                    <h2>Habilidades e Experiências</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos, ex saepe sequi omnis voluptatum nisi? 
                    </p>
                </div>
                <div className={styles.content}>
                    <h3>Habilidades</h3>
                    <ul>
                        <li className='h5'>Habilidade</li>
                        <li className='h5'>Habilidade</li>
                        <li className='h5'>Habilidade</li>
                    </ul>
                </div>
            </div>
            <div className={styles.experiences}>
                <h2>Experiências</h2>
                <ul>
                    <Experience/>
                    <Experience/>
                    <Experience/>
                </ul>
            </div>
        </section>
    )
}

export default Skill