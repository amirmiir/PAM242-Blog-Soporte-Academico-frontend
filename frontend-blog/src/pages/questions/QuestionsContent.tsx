import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import ContentFilters from './ContentFilters';
import { ROUTES } from '../../shared/utils/routes';

type Tag = {
    'tag': string,
}

type Professor = {
    'name': string,
}

type Content = {
    'title': string,
    type: ContentType,
    'route': string,
    tags: Tag[],
    professors: Professor[],
    'views': number,
    'votes-up': number,
    'latest-upd': string
}

type ContentType ={
    'content': string,
}

const SubjectsContent: FC = () => {
    const Subjects: Content[] = [
        {
            'title': 'Cálculo Diferencial',
            type:{'content': 'Subject'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }, { name: 'Osorio' }
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },{
            'title': 'Cálculo Diferencial',
            type:{'content': 'Subject'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }, { name: 'Osorio' }
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Cálculo Diferencial',
            type:{'content': 'Subject'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }, { name: 'Osorio' }
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Cálculo Diferencial',
            type:{'content': 'Subject'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }, { name: 'Osorio' }
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Cálculo Diferencial',
            type:{'content': 'Subject'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }, { name: 'Osorio' }
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Cálculo Diferencial',
            type:{'content': 'Subject'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Matemática" }, { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }, { name: 'Osorio' }
            ],
            'views': 14,
            'votes-up': 2,
            'latest-upd': '2024-11-28'
        },
        
    ]

    const Resources: Content[]=[
        {
            'title': 'Guía de Latex',
            type:{'content': 'Resources'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }
            ],
            'views': 402,
            'votes-up': 32,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Guía de Latex',
            type:{'content': 'Resources'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }
            ],
            'views': 402,
            'votes-up': 32,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Guía de Latex',
            type:{'content': 'Resources'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }
            ],
            'views': 402,
            'votes-up': 32,
            'latest-upd': '2024-11-28'
        },
        {
            'title': 'Guía de Latex',
            type:{'content': 'Resources'},
            'route': ROUTES.SUBJECTS.ID,
            tags: [
                { tag: "Generales" }
            ],
            professors: [
                { name: 'Bazán' }
            ],
            'views': 402,
            'votes-up': 32,
            'latest-upd': '2024-11-28'
        },
    ]

    const Content: Content[] =[
        ...Subjects,
        ...Resources,
    ]

    return (
        <div className="flex flex-row bg-gray-300 p-3 mb-24 md:mx-24 h-full ">
            <div className="bg-white py-3 px-4 pr-8x  w-auto">
                <ContentFilters />
            </div>
            <div className="w-4/5 ml-6 p-4 bg-white h-full ">
                <div className="px-2 pb-4 space-x-12">
                    <button>CURSOS</button>
                    <button>RECURSOS</button>
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
                        Content.map((item: Content, index: number) => (
                            <SwiperSlide key={index} className="bg-gray-300 p-3">
                                {/* left side */}
                                <div className="space-y-1">
                                    <h2 className="text-xl font-semibold">
                                        {item.title}
                                    </h2>
                                    <div className="space-x-4">
                                        {item.tags.map((item: Tag) => (
                                            <span key={item.tag} className="py-0.5 px-2 bg-red-500 text-white text-xs" >{item.tag}</span>
                                        ))}
                                    </div>
                                    <div>
                                        {item.professors.map((item: Professor) => (
                                            <span key={item.name} className="text-xs">{item.name}</span>
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