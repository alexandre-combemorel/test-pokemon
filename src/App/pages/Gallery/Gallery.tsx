// components
import data from './data/data.json'
import { DefaultLayout } from '../../layouts/Default/Default'
// data
import Image from '../../components/Image/Image'

export default function Gallery() {
    return <DefaultLayout className="gallery">
        <h1>My gallery</h1>
        <div className='gallery'>
            {data.images.map(image => <Image key={image.title} src={image.url} title={image.title} />)}
        </div>
    </DefaultLayout>
}