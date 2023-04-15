import styles from './Experience.module.scss'


const Experience = () => {
    return (
        <>
            <li className={styles.experience}>
                <div className={styles.period}> 2020 - 2023</div>
                <div className={styles.description}>
                    <h4>Desenvolvedor front end</h4>
                    <h5>Braccialetto</h5>
                </div>
            </li>
        </>
    )
}

export default Experience