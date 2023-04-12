import styles from './About.module.scss'

const About = () => {
    return(
        <section className={styles.about}>
            <div className={styles.image}></div>
            <div className={styles.content}>
                <h1>Sobre</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum exercitationem facere temporibus illo ullam, atque odio tenetur non dignissimos
                    alias molestias id quaerat, qui maiores accusantium velit aliquid, mollitia delectus!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum exercitationem facere temporibus illo ullam, atque odio tenetur non dignissimos
                    alias molestias id quaerat, qui maiores accusantium velit aliquid, mollitia delectus!
                </p>
                <a href="#" className='btn btn-primary'>link</a>
            </div>
        </section>
    )
}

export default About