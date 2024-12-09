import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Mousewheel } from 'swiper/modules';
import ContentFilters from './ContentFilters';
import { Link } from 'react-router-dom';

import axios from 'axios'



/**
 * Definition of types for structured access.
 */
type Tag = {
    'tag': string,
}

type Credits = {
    'name': string,
}

type ContentType = "subject" | "resource"

type TContentInfo = {
    'id': string,
    type: ContentType,
    'title': string,
    tags: Tag[],
    credits: Credits[],
    'views': number,
    'votes-up': number,
    'latest-upd': string
}

type TContentRoute = {
    'id': string,
    'route': string
}

type TContentCard = TContentInfo & TContentRoute;
/**
 * This is the main component to be rendered in the Subjects page, as it is
 * Component Loading via axios a JSON to be displayed on
 * the self-adjustable Swiper slides.
 */

const SubjectsContent: FC = () => {
    /**
     * Changes implemented:
     * 
     * - axios use for showing loading screen whilst loading all data from 
     * json (database). This requires useState to decide what to show 
     * depending on its value.
     * 
     * - added error handler for axios in case of failure to load all data.
     * 
     * - data will be displayed once it is not loading anymore and no error
     * was found upon request.
     * 
     * - axios is used twice, first for routing, second for displaying routes
     * along extra information
     * 
     * - axios all (deprecated) shall not be used for loading subjects and resources as in this
     * case since we are trying to load both files independently so that if one 
     * fails, it doesn't affect the other.
     * 
     * - Promise.all is used twice as each card is the union of information and routing data.
     */

    const [subjectsInfo, setSubjectsInfo] = useState<TContentInfo[]>([]);
    const [subjectsRoutes, setSubjectsRoutes] = useState<TContentRoute[]>([]);
    const [resourcesInfo, setResourcesInfo] = useState<TContentInfo[]>([]);
    const [resourcesRoutes, setResourcesRoutes] = useState<TContentRoute[]>([]);

    const [loadingSubjectsInfo, setLoadingSubjectsInfo] = useState(true);
    const [loadingResourcesInfo, setLoadingResourcesInfo] = useState(true);

    const [errorSubjectsInfo, setErrorSubjectsInfo] = useState<string | null>(null);
    const [errorResourcesInfo, setErrorResourcesInfo] = useState<string | null>(null);

    /**
     * Defining hooks to combine Routes and Info into a single array
     */

    useEffect(() => {
        setLoadingSubjectsInfo(true);

        Promise.all([
            axios.get('subjectsInfo.json'),
            axios.get('subjectsRoutes.json')
        ])
            .then(([responseSubjectsInfo, responseSubjectsRoutes]) => {
                setSubjectsInfo(responseSubjectsInfo.data);
                setSubjectsRoutes(responseSubjectsRoutes.data);
                setErrorSubjectsInfo(null);
            })
            .catch((error) => {
                setErrorSubjectsInfo('Failed to fetch subjectsCard');
                console.error('One or more requests failed', error);
            })
            .finally(() => {
                setLoadingSubjectsInfo(false);
            });
    }, []);


    useEffect(() => {
        setLoadingResourcesInfo(true);

        Promise.all([
            axios.get('resourcesInfo.json'),
            axios.get('resourcesRoutes.json')
        ])
            .then(([responseResourcesInfo, responseResourcesRoutes]) => {
                setResourcesInfo(responseResourcesInfo.data);
                setResourcesRoutes(responseResourcesRoutes.data);
                setErrorResourcesInfo(null);
            })
            .catch((error) => {
                setErrorResourcesInfo('Failed to fetch resourcesCard');
                console.error('One or more requests failed', error);
            })
            .finally(() => {
                setLoadingResourcesInfo(false);
            });
    }, []);
    


    return (
        <div className="flex flex-row bg-gray-300 p-3 mb-24 md:mx-24 h-full">
            <div className="bg-white py-3 px-4 pr-8x w-auto">
                <ContentFilters />
            </div>
            <div className="w-4/5 ml-6 p-4 bg-white h-auto">
                <div className="px-2 pb-4 space-x-12">
                    <button>CURSOS</button>
                    <button>RECURSOS</button>
                </div>{ }
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
                        content.map((item: TContent, index: number) => (
                            <SwiperSlide
                                key={index}
                                className=" flex flex-col w-max !h-min"
                            >
                                <div className="flex flex-col h-min bg-gray-300 p-1 mr-4 shadow-md rounded-s">
                                    {/* left side */}
                                    <div className="space-y-1 h-min p-1 w-3/4">
                                        <Link to={item.route}>
                                            <h2 className="text-xl font-semibold">
                                                {item.title}
                                            </h2>
                                        </Link>

                                        <div className=" p-1">
                                            <div className=" flex flex-row">
                                                {item.credits.map((item: Credits) => (
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

export default SubjectsContent;