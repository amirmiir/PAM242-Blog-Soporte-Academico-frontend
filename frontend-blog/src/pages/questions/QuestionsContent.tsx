import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import useSmallScreenSize from '../../hooks/small-screen-size/useSmallScreen';
import axios from 'axios';
import { FaFilter } from 'react-icons/fa';
import SearchBar from '../../components/search-bar/SearchBar';
import { RiCheckboxBlankFill, RiCheckboxBlankLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

type Tag = {
    tag: string;
};

type TUser = {
    id: string;
    username: string;
};

type QuestionStatus = 'solved' | 'not-solved';

type TQuestionRoute = {
    id: string;
    route: string;
};

type TQuestionInfo = {
    id: string;
    author: TUser;
    editors: TUser[];
    title: string;
    description: string;
    images: string[];
    tags: Tag[];
    status: QuestionStatus;
    answersCount: number;
    views: number;
    votesUp: number;
    date: string;
};

type TQuestionCard = TQuestionInfo & TQuestionRoute;

type QuestionsContentProps = {
    search?: string;
};



const QuestionsContent: FC<QuestionsContentProps> = ({ search = '' }) => {
    const tags: string[] = [
        'calculus',
        'differential-calculus',
        'physics',
        'geometry',
        'trigonometry',
        'cpp',
    ];

    const categories: string[] = ['TODO', 'RESUELTO', 'ABIERTO'];

    const [searchFilter, setSearchFilter] = useState<string>('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]); 
    const [selectedCategory, setSelectedCategory] = useState<string>('TODO');

    const [filteredQuestions, setFilteredQuestions] = useState<TQuestionCard[]>([]); 

    const [questionsInfo, setQuestionsInfo] = useState<TQuestionInfo[]>([]);
    const [questionsRoutes, setQuestionsRoutes] = useState<TQuestionRoute[]>([]);

    const [questionCards, setQuestionCards] = useState<TQuestionCard[]>([]);

    const [loadingQuestions, setLoadingQuestions] = useState(true);
    const [errorQuestions, setErrorQuestions] = useState<string | null>(null);

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const isSmallScreen = useSmallScreenSize();

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleTagClick = (tag: string): void => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
        );
    };

    useEffect(() => {
        setLoadingQuestions(true);

        Promise.all([
            axios.get('/questionsInfo.json'),
            axios.get('/questionsRoutes.json'),
        ])
            .then(([responseQuestionsInfo, responseQuestionsRoutes]) => {
                setQuestionsInfo(responseQuestionsInfo.data);
                setQuestionsRoutes(responseQuestionsRoutes.data);

                const combinedQuestions = responseQuestionsInfo.data.map((info: TQuestionInfo) => {
                    const route = responseQuestionsRoutes.data.find(
                        (r: TQuestionRoute) => r.id === info.id
                    );

                    return {
                        ...info,
                        ...route,
                        route: route?.route || '',
                    };
                });

                setQuestionCards(combinedQuestions);
                setErrorQuestions(null);
            })
            .catch((error) => {
                setErrorQuestions('Failed to fetch questions');
                console.error('One or more requests failed', error);
            })
            .finally(() => {
                setLoadingQuestions(false);
            });
    }, []);

    useEffect(() => {
        const removeDiacritics = (str: string) =>
            str.normalize('NFD').replace(/\p{Diacritic}/gu, '');

        let filtered = questionCards;

        if (selectedCategory !== 'TODO') {
            filtered = filtered.filter((question) =>
                selectedCategory === 'RESUELTO'
                    ? question.status === 'solved'
                    : question.status === 'not-solved'
            );
        }

        if (search.trim()) {
            const normalizedSearch = removeDiacritics(search.toLowerCase());

            filtered = filtered.filter(
                (card) =>
                    removeDiacritics(card.title.toLowerCase()).includes(normalizedSearch) ||
                    card.tags.some((tag) =>
                        removeDiacritics(tag.tag.toLowerCase()).includes(normalizedSearch)
                    )
            );
        }

        if (selectedTags.length > 0) {
            filtered = filtered.filter((question) =>
                question.tags.some((tag) =>
                    selectedTags.some((selectedTag) =>
                        selectedTag.toLowerCase() === tag.tag.toLowerCase()
                    )
                )
            );
        }

        setFilteredQuestions(filtered);
    }, [selectedCategory, selectedTags, search, questionCards]);

    const filteredTags = tags.filter((tag) =>
        tag.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-300 space-y-3 md:space-y-0 p-3 mb-24 md:mx-24">
            {/* Filters for content */}
            <div className="bg-white py-3 px-4 pr-8x w-4/5 md:w-auto">
                <div className="space-y-2 content-start ">


                    {/* Responsive Filter Button */}
                    <div className="md:hidden flex flex-col ">
                        <button
                            onClick={toggleFilter}
                            className="flex flex-row items-center px-4 py-2 bg-gray-200 rounded-md shadow-md text-gray-800"
                        >
                            <FaFilter className="mr-2" />
                            <span className="font-semibold tracking-wide">Mostrar filtros</span>
                        </button>
                    </div>

                    {isFilterOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center sm:hidden">
                            <div className="bg-white p-4 rounded-lg w-3/4 sm:w-1/2 md:w-1/3">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold">Filtros</h2>
                                    <button onClick={toggleFilter} className="text-red-500 text-lg">
                                        x
                                    </button>
                                </div>
                                <SearchBar searchBar={{ placeholder: 'Buscar filtro', onSearchChange: (text) => setSearchFilter(text) }} />
                                <span className="font-bold tracking-wide">Etiquetas</span>
                                {filteredTags.map((filtro: string, index: number) => (
                                    <button
                                        key={index}
                                        className={`flex flex-row items-center space-x-1 `}
                                        onClick={() => handleTagClick(filtro)}
                                    >
                                        {!searchFilter.includes(filtro) && <RiCheckboxBlankLine />}
                                        {searchFilter.includes(filtro) && <RiCheckboxBlankFill className="text-red-500" />}
                                        <span className={`${searchFilter.includes(filtro) ? 'font-semibold' : ''}`}>{filtro}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Filter Content (Visible on regular screens) */}

                    <div className="hidden sm:block space-y-2">
                        <div className="flex items-center space-x-2">
                            <FaFilter />
                            <h2 className="tracking-wide font-bold">FILTROS</h2>
                        </div>
                        <SearchBar searchBar={{ placeholder: 'Buscar filtro', onSearchChange: (text) => setSearchFilter(text) }} />

                        <div>
                            <span className="font-bold tracking-wide">Especialidades</span>
                            {filteredTags.map((filtro: string, index: number) => (
                                <button
                                    key={index}
                                    className={`flex flex-row items-center space-x-1 `}
                                    onClick={() => handleTagClick(filtro)}
                                >
                                    {!searchFilter.includes(filtro) && <RiCheckboxBlankLine />}
                                    {searchFilter.includes(filtro) && <RiCheckboxBlankFill className="text-red-500" />}
                                    <span className={`${searchFilter.includes(filtro) ? 'font-semibold' : ''}`}>{filtro}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="w-4/5 md:ml-6 p-4 pb-10 bg-white space-y-4">
                <div className="flex flex-col md:flex-row px-2 space-x-0 md:space-x-12 -translate-x-2 space-y-2 md:space-y-0">
                    {
                        categories.map((category: string, index: number) => (
                            <button key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`w-full md:w-auto px-4 py-2 rounded-md shadow-md tracking-wide ${selectedCategory === category
                                    ? 'bg-red-500 text-white font-semibold'
                                    : 'bg-gray-200'
                                    }`}>
                                {category}
                            </button>
                        ))
                    }
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
                    className="mySwiper bg-white !h-[calc(100%-50px)] max-h-[500px] md:max-h-none "

                >
                    {
                        filteredQuestions.map((question: TQuestionCard, index: number) => (
                            <SwiperSlide
                                key={index}
                                className=" flex flex-col w-max !h-min"
                            >
                                <div className="flex flex-col h-min bg-gray-300 p-1 mr-4 shadow-md rounded-s">
                                    {/* left side */}
                                    <div className="space-y-1 h-min p-1 w-3/4">
                                        <Link to={question.route}>
                                            <h2 className="text-xl font-semibold">
                                                {question.title}
                                            </h2>
                                        </Link>

                                        <div className=" p-1">
                                            <div className=" flex flex-row">
                                                {question.author.map((item: Credits) => (
                                                    <span key={item.name} className="text-xs text-black tracking-wider my-2 mr-6">{item.name}</span>
                                                ))}
                                            </div>

                                            <div className="space-x-4 flex flex-row items-center">
                                                {question.tags.map((item: Tag) => (
                                                    <span key={item.tag} className="py-0.5 px-2 bg-red-500 text-white font-thin tracking-wider text-xs">
                                                        {item.tag}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                    {/* right side */}
                                    {/* place is currently empty but is meant to be reserved for a describing image */}

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );

}

export default QuestionsContent;
