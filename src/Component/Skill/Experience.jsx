import styles from './Experience.module.scss'


const Experience = ({company, experience, period}) => {

    return (
        <>
            <li className={styles.experience}>
                <div className={styles.period}> {period}</div>
                <div className={styles.description}>
                    <h4>{experience}</h4>
                    <h5>{company}</h5>
                </div>
            </li>
        </>
    )
}

export default Experience