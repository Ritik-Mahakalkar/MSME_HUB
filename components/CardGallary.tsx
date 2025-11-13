import Icons from "./Icons";
import Link from "next/link";
import Image from "next/image";
import { GallaryDataType} from '@/types/gallary';

const CardProject = ({ data }: GallaryDataType) => {
    const { 
        slug,
        title,
        category,
        image
    } = data || {};

    return (
        <div className="card-project radius18">
            {image &&
                <Image
                    src={image}
                    alt={`Image of ${title}`}
                    width={645}
                    height={690}
                    loading="lazy"
                />
            }

            <div className="card-project-content-absolute">
                <div className="card-project-content">
                    {title && <h2 className="heading text-24">{title}</h2>}
                    {category && <p className="text text-16">{category}</p>}
                </div>
            </div>
</div>
           
       
    )
}

export default CardProject;