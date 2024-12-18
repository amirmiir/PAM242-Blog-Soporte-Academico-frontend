import { FC, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Mousewheel } from 'swiper/modules';

import SearchBar from '../../components/search-bar/SearchBar'

import { RiCheckboxBlankLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";

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

type SubjectsContentProps = {
    search?: string;
};
/**
 * This is the main component to be rendered in the Subjects page, as it is
 * Component Loading via axios a JSON to be displayed on
 * the self-adjustable Swiper slides.
 */

const SubjectsContent: FC<SubjectsContentProps> = ({ search = '' }) => {
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

    const especialidades: string[] = [
        'Matemática',
        'Ciencia de la Computación',
        'Física',
        'Química',
        'Ingeniería Física'
    ]

    const categories: string[] = ['TODO', 'MATERIAS', 'RECURSOS']

    const [selectedCategory, setSelectedCategory] = useState<string>('TODO');
    const [filteredContentCards, setFilteredContentCards] = useState<TContentCard[]>([]);

    const [subjectsInfo, setSubjectsInfo] = useState<TContentInfo[]>([]);
    const [subjectsRoutes, setSubjectsRoutes] = useState<TContentRoute[]>([]);
    const [resourcesInfo, setResourcesInfo] = useState<TContentInfo[]>([]);
    const [resourcesRoutes, setResourcesRoutes] = useState<TContentRoute[]>([]);

    const [subjectsCards, setSubjectsCards] = useState<TContentCard[]>([]);
    const [resourcesCards, setResourcesCards] = useState<TContentCard[]>([]);

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
            /**
             * Correct routing, for this case, it is needed to use '/'
             * as if done without it would lead to the improper load of
             * data and would fetch index.html information.
             * 
             * Same for the axios.get on 'resources'
             */
            axios.get('/subjectsInfo.json'),
            axios.get('/subjectsRoutes.json')
        ])
            .then(([responseSubjectsInfo, responseSubjectsRoutes]) => {
                /**
                 * showing if the data was fetched correctly
                 */
                console.log("Subjects Info Response:", responseSubjectsInfo);
                console.log("Subjects Route Response:", responseSubjectsRoutes);

                setSubjectsInfo(responseSubjectsInfo.data);
                setSubjectsRoutes(responseSubjectsRoutes.data);

                /**
                 * Union of routing and information to display in cards
                 */
                const combinedSubjects = responseSubjectsInfo.data.map((info: TContentInfo) => {
                    /*  matching routes with current id */
                    const route = responseSubjectsRoutes.data.find((r: TContentRoute) => r.id === info.id)

                    return {
                        ...info,
                        ...route,
                        /** failure case */
                        route: route?.route || ''
                    }
                })

                setSubjectsCards(combinedSubjects);
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
            axios.get('/resourcesInfo.json'),
            axios.get('/resourcesRoutes.json')
        ])
            .then(([responseResourcesInfo, responseResourcesRoutes]) => {

                console.log("Resources Info Response:", responseResourcesInfo);
                console.log("Resources Route Response:", responseResourcesRoutes);

                setResourcesInfo(responseResourcesInfo.data);
                setResourcesRoutes(responseResourcesRoutes.data);

                /**
                 * Union of routing and information to display in cards
                 */
                const combinedResources = responseResourcesInfo.data.map((info: TContentInfo) => {
                    /*  matching routes with current id */
                    const route = responseResourcesRoutes.data.find((r: TContentRoute) => r.id === info.id)
                    console.log(route?.route)
                    return {
                        ...info,
                        ...route,
                        /** failure case */
                        route: route?.route || ''


                    }
                })

                setResourcesCards(combinedResources)
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

    const contentCards: TContentCard[] = useMemo(() => {
        return [...subjectsCards, ...resourcesCards];
    }, [subjectsCards, resourcesCards]);

    /** 
     * Filtering content based on subjects, resources button
     * Filtering content based on prop 'search' obtained from SearchBar component.
     * Its purpose is to first remove all diacritics, so regardless of punctuation,
     * it still generates a match and displays it on screen correctly.
     * It also shows coincidences that are inside a word, via 'string.include'
     * */
    useEffect(() => {
        /* \p{Diacritic} */
        const removeDiacritics = (str: string) =>
            str.normalize('NFD').replace(/\p{Diacritic}/gu, '');

        let filteredCards = contentCards;

        if (selectedCategory !== 'TODO') {
            filteredCards = filteredCards.filter((category) =>
                selectedCategory === 'MATERIAS'
                    ? category.type === 'subject'
                    : category.type === 'resource'
            );
        }

        if (search.trim()) {
            const normalizedSearch = removeDiacritics(search.toLowerCase());

            /** Searching for every coincidence in each of the visible properties of each card */
            filteredCards = filteredCards.filter(
                (card) =>
                    removeDiacritics(card.title.toLowerCase()).includes(normalizedSearch) ||
                    card.tags.some((tag) => removeDiacritics(tag.tag.toLowerCase()).includes(normalizedSearch)) ||
                    card.credits.some((credit) => removeDiacritics(credit.name.toLowerCase()).includes(normalizedSearch))
            );
        }

        setFilteredContentCards(filteredCards);

    }, [selectedCategory, search, contentCards]);

    return (
        <div className="flex flex-row bg-gray-300 p-3 mb-24 md:mx-24 h-full">
            <div className="bg-white py-3 px-4 pr-8x w-auto">
                <div className="space-y-2 content-start">
                    <div className="flex text-center ">
                        <FaFilter />
                        <h2>Filtros</h2>
                    </div>

                    <div>
                        <div>
                            Especialidades
                        </div>
                        <SearchBar searchBar={{ placeholder: 'Buscar especialidad' }} />
                        {
                            especialidades.map((item: string, index: number) => (
                                <div key={index} className="flex flex-row items-center space-x-1">
                                    <RiCheckboxBlankLine />
                                    <span className="">{item}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-4/5 ml-6 p-4 bg-white h-auto">
                <div className="px-2 pb-4 space-x-12">
                    {
                        categories.map((category: string, index: number) => (
                            <button key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md ${selectedCategory === category
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-200'
                                    }`}>
                                {category}
                            </button>
                        ))
                    }
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
                        filteredContentCards.map((item: TContentCard, index: number) => (
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