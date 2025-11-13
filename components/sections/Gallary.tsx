import '@/styles/project.css';
import ProjectList from "@/data/gallary.json";
import CardGallary from "../CardGallary";


import Pagination from "../Pagination";
import NotFoundMsg from "../NotFoundMsg";
import { SectionGallaryType } from '@/types/sectionGallary';

const Gallary = ({
    wrapperCls,
    container
}: SectionGallaryType) => {
    const projectList = ProjectList;

    if(projectList.length == 0) {
        return <NotFoundMsg message="No projects found!" />
    }

    return (
        <div className={`page-projects ${wrapperCls}`}>
            <div className={container}>
                <div className="grid grid-cols-12 sm:gap-1 product-grid">
                    {ProjectList.map((project, index) => (                        
                        <div 
                            className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" data-aos="fade-up" 
                            data-aos-delay={`${index + 1}00`} 
                            key={`project-list-${index}`}
                        >
                            <CardGallary data={project} />
                        </div>
                    ))}
                </div>
                
                <Pagination />
            </div>
        </div>
    )
}

export default Gallary;