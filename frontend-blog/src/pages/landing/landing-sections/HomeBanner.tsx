import { FC } from 'react';
import PabCentralUNI from '../../../assets/images/PabCentralUNI.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../shared/utils/routes';

type BannerSlide = {
    "header": string,
    "description": string
}

const HomeBanner: FC = () => {

    const BannerSlides: BannerSlide[] = [
        {
            "header": "Pregunta 1",
            "description": "Respuesta lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        },
        {
            "header": "Pregunta 2",
            "description": "Respuesta lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        },
        {
            "header": "Pregunta 3",
            "description": "Respuesta lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        }
    ];

    return (
        <div className="bg-black text-white w-full h-screen overflow-hidden">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    BannerSlides.map((item: BannerSlide, index: number) => (
                        <SwiperSlide key={index} className="flex flex-col justify-center items-center h-full mb-4 p-10">
                            <div className="title text-3xl font-semibold" data-swiper-parallax="-300">
                                {item.header}
                            </div>
                            <div className="text mb-6" data-swiper-parallax="-100">
                                <p>{item.description}</p>
                            </div>
                            <Link to={ROUTES.LOGIN} className="rounded-lg border border-red-500 bg-red-500 py-2 px-4 text-white hover:bg-red-600">Unirme</Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default HomeBanner;
