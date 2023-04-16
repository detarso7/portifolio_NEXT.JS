import Image from 'next/image'
import useSanityImage from 'src/Hooks/useSanityImage'

import styles from './About.module.scss'

import Box from '../UI/Box'

const About = ({about}) => {

    const imageUrl = useSanityImage()
    const {image, title, text, button, url } = about
    const renderBio = text.map((t) =>(
        <p key={t._key}>{t.paragraph}</p>
    ))

    return(
        <section className={styles.about}>
            <div className={styles.image}>
                <Image src={imageUrl(image).url()} alt='Saulo de Tarso' layout='fill'/>
                <div className={styles.box}>
                    <Box text="Sobre"/>
                </div>
            </div>
            <div className={styles.content}>
                <h1>{title}</h1>
                    {renderBio}
                <a href={url} className='btn btn-primary'>{button}</a>
            </div>
        </section>
    )
}

export default About