import * as React from "react";
import { Link, useParams } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import useFindCurrentPet from "../hooks/useCurrentPet";

export default function Details() {
    const { id } = useParams();
    //const { pets, setPets } = useContext(petsDataContext);
    //mocked info
    //const { currentPet } = useFindCurrentPet(id, petsContext);
    const pet = {
        name: 'Galo',
        description: 'Richi is still very young. He is a confident, energetic and good-tempered dog. Sociable with people and like-minded dogs, he needs a welcoming home to express his full potential.',
        category: ['dog'],
        images: ['https://adopcionanimal.es/wp-content/uploads/2022/02/Galo_4.jpg', 'https://adopcionanimal.es/wp-content/uploads/2022/02/Galo_1.jpg'],
        gender: 'male',
        breed: 'mixed',
        size: 'big',
        weight: 45,
        rescued: '12/12/24'
    }
    return (
        <div className="component">
            <section className="details-main">
                <Swiper id="main"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}>
                    {
                        pet.images.map((image) => (
                            <SwiperSlide className="swiper-slide">
                                <img src={`${image}`} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {/* image component */}
                {/* <div class="imageBox">
                <div class="imageInn">
                    <img src="https://adopcionanimal.es/wp-content/uploads/2022/02/Galo_1.jpg" alt="Default Image"/>
                </div>
                <div class="hoverImg">
                    <img src="https://adopcionanimal.es/wp-content/uploads/2022/02/Galo_2.jpg" alt="Profile Image"/>
                </div>
            </div> */}
                <section className="details__pet-data">
                    <div className="details__pet-name">{pet.name}</div>
                    <div className="details__pet-description">{pet.description}</div>
                    <div className="details__pet-category">
                        <span className="category">Category:</span> {pet.category.map((category) => <span className="category-name">{category}</span>)}
                    </div>
                    <button className="details__adopt-button">
                        <Link to={`pet/${id}/adoption-form`}>
                            <span>Adopt</span>
                        </Link>
                        <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="37" cy="37" r="35.5" stroke="white" stroke-width="4"></circle>
                            <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="white"></path>
                        </svg>
                    </button>
                </section>
            </section>
            <section className="details-description">
                <div className="description-title">Description</div>
                <ul>
                    <li>Gender: {pet.gender}</li>
                    <li>Breed: {pet.breed}</li>
                    <li>Size: {pet.size}</li>
                    <li>Weight: {pet.weight}kg</li>
                    <li>Recued: {pet.rescued}</li>
                </ul>
            </section>
        </div>

    )
}