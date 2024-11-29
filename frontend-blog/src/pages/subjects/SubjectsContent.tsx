import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import SearchBar from '../../components/search-bar/SearchBar';
import ContentFilters from './ContentFilters';
import { ROUTES } from '../../shared/utils/routes';

type Tag = {
    'tag': string,
}

type Professor = {
    'name': string,
}

type Subject = {
    'title': string,
    'route': string,
    tags: Tag[],
    professors: Professor[],
    'views': number,
    'votes-up': number,
    'latest-upd': string
}

const SubjectsContent: FC = () => {
    const Subjects: Subject[] = [
        {
            'title': 'Cálculo Diferencial',
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name:'Bazán'}, { name:'Osorio'}
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Cálculo Diferencial',
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name:'Bazán'}, { name:'Osorio'}
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Cálculo Diferencial',
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name:'Bazán'}, { name:'Osorio'}
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Cálculo Diferencial',
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name:'Bazán'}, { name:'Osorio'}
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Cálculo Diferencial',
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name:'Bazán'}, { name:'Osorio'}
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
    ]

    return (
        <div className="flex flex-row bg-gray-300 p-3 h-full overflow-hidden">
            <div className="bg-white py-3 px-4 pr-8x  w-auto">
                <SearchBar />
                <ContentFilters />
            </div>
            <div className="w-4/5 ml-6 p-4 bg-white h-full ">
                <div >
                    <button>Cursos</button>
                    <button>Recursos</button>
                </div>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={4}
                    spaceBetween={30}
                    mousewheel={true}
                    
                    modules={[Mousewheel]}
                    className="mySwiper bg-white h-[calc(100%-50px)]"
                >
                    {
                        Subjects.map((item: Subject, index: number) => (
                            <SwiperSlide className="bg-gray-300 p-3">
                                {/* left side */}
                                <div className="space-y-1">
                                    <h2 className="text-xl font-semibold">
                                        {item.title}
                                    </h2>
                                    <div className="space-x-4">
                                        {item.tags.map((item: Tag, index: number) => (
                                            <span className="py-0.5 px-2 bg-red-500 text-white text-xs" >{item.tag}</span>
                                        ))}
                                    </div>
                                    <div>
                                        {item.professors.map((item: Professor, index: number) => (
                                            <span className="text-xs">{item.name}</span>
                                        ))}
                                    </div>
                                </div>
                                {/* right side */}
                                <div></div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default SubjectsContent