import CarouselItem from '../../../../components/CarouselItem'
import { listsImage } from '../../shared/constants'

const BannerPage = () => {
    return (
        <CarouselItem>
            {listsImage && listsImage.length > 0 && listsImage.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.url} alt={item.alt} />
                    </div>
                )
            })}
        </CarouselItem>
    )
}

export default BannerPage 
