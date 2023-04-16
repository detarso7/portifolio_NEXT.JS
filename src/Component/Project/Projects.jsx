import Image from 'next/image'
import useSanityImage from 'src/Hooks/useSanityImage'
import { AiFillGithub } from 'react-icons/ai'

import styles from './Projects.module.scss'

const Projects = ({proje}) => {

    const imageUrl = useSanityImage()

    const {image, title, technologies, description, url} = proje
   
    const renderTec = technologies.map((t) => (
        <span key={t._key}>{t.technology}</span>
        ))

    return (
            <>
                <li className={styles.projects}>
                    <a href={url}>
                        <div className={styles.image}>
                            <AiFillGithub className={styles.icon}/>
                            <Image src={imageUrl(image).url()} alt='Projetos de Saulo de Tarso' layout='fill'/>
                        </div>
                            {renderTec}
                            <h3 className='h5'>{title}</h3>
                        <p>
                            {description}
                        </p>
                    </a>
                </li>
            </>
    )
}

export default Projects