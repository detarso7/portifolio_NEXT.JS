import styles from './Skill.module.scss'
import Experience from './Experience'

const Skill = ({skills}) => {

    const {title, subtitle, skill_title, skills_list, experience_title, experience} = skills

    const renderListHab = skills_list.map((list) => (
        <li key={list._key} className='h5'>{list.skill}</li>
    ))

    const renderListExp = experience.map((ex) => (
        <Experience key={ex._key} company={ex.company} experience={ex.experience} period={ex.period} />       
    ))
    
    return (
        <section className={styles.section}>
            <div className={styles.skills}>
                <div className={styles.heading}>
                    <h2>{title}</h2>
                    <p>{subtitle} 
                    </p>
                </div>
                <div className={styles.content}>
                    <h3>{skill_title}</h3>
                    <ul>
                        {renderListHab}
                    </ul>
                </div>
            </div>
            <div className={styles.experiences}>
                <h2>{experience_title}</h2>
                <ul>
                    {renderListExp}
                </ul>
            </div>
        </section>
    )
}

export default Skill