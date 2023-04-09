import client from "src/Sanity"
import imageUrlBuilder  from "@sanity/image-url"

const useSanityImage = () => {
    const builder = imageUrlBuilder(client)

    const urlFor = (source) => {
        return builder.image(source)
    }

    return urlFor
}

export default useSanityImage