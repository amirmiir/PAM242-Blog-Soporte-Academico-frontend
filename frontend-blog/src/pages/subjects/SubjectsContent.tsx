import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Mousewheel } from 'swiper/modules';
import ContentFilters from './ContentFilters';
import { ROUTES } from '../../shared/utils/routes';
import { Link } from 'react-router-dom';

import axios from 'axios'


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

type ContentType = {
    'content': string,
}

const SubjectsContent: FC = () => {

    const [subjects, setSubjects] = useState<Content[]>([]);
    const [resources, setResources] = useState<Content[]>([]);

    useEffect(() => {
        axios.get("subjects.json")
            .then((response) => setSubjects(response.data))
            .catch((error) => console.error('Error fetching subjects:', error));
    }, []);
    useEffect(() => {
        axios.get("resources.json")
            .then((response) => setResources(response.data))
            .catch((error) => console.error('Error fetching resources:', error));
    }, []);

    const Content: Content[] = [
        ...subjects,
        ...resources,
    ]

    return (
        <div className="flex flex-row bg-gray-300 p-3 mb-24 md:mx-24 h-full">
            <div className="bg-white py-3 px-4 pr-8x w-auto">
                <ContentFilters />
            </div>
            <div className="w-4/5 ml-6 p-4 bg-white h-auto">
                <div className="px-2 pb-4 space-x-12">
                    <button>CURSOS</button>
                    <button>RECURSOS</button>
                </div>
                <Swiper
                    direction={'vertical'}
                    mousewheel={true}
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    modules={[Scrollbar, Mousewheel]}
                    scrollbar={{
                        hide: false,
                        draggable: true,
                    }}
                    className="mySwiper bg-white h-[calc(100%-50px)]"

                >
                    {
                        Content.map((item: Content, index: number) => (
                            <SwiperSlide
                                key={index}
                                className=" flex flex-col w-max !h-min"
                            >
                                <div className="flex flex-col h-min bg-gray-300 p-1 mr-4 shadow-md rounded-s">
                                    {/* left side */}
                                    <div className="space-y-1 h-min p-1 w-3/4">
                                        <Link to={ROUTES.SUBJECTS.ID}>
                                            <h2 className="text-xl font-semibold">
                                                {item.title}
                                            </h2>
                                        </Link>

                                        <div className=" p-1">
                                            <div className=" flex flex-row">
                                                {item.professors.map((item: Professor) => (
                                                    <span key={item.name} className="text-xs text-black tracking-wider my-2 mr-6">{item.name}</span>
                                                ))}
                                            </div>

                                            <div className="space-x-4 flex flex-row">
                                                {item.tags.map((item: Tag) => (
                                                    <span key={item.tag} className="py-0.5 px-2 bg-red-500 text-white font-thin tracking-wider text-xs">
                                                        {item.tag}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                    {/* right side */}

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );

}

export default SubjectsContent