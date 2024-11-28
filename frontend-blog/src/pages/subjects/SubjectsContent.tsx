import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import SearchBar from '../../components/search-bar/SearchBar';
import ContentFilters from './ContentFilters';

const SubjectsContent: FC = () => {
    return (
        <div className="flex flex-row bg-red-500 mx-24 p-3 h-screen overflow-hidden">
            <div className="bg-white py-3 px-4 pr-8 w-auto">
                <SearchBar />
                <ContentFilters />
            </div>
            <div className="w-4/5 ml-8">
                <div >
                    <button>Cursos</button>
                    <button>Recursos</button>
                </div>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className="mySwiper bg-white"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default SubjectsContent