import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ;

export default class Carrossel extends React.Component {
    render() {
        return (
            <Swiper className='swiper-container'>
                <SwiperSlide className='slide-item'>
                <img src={require('../public/amarelopokemon.jpg')}/>
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                <img src={require('../public/pokemon azulverde.jpg')}/>
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                <img src={require('../public/pokemons laranazulverde.jpg')}/>
                </SwiperSlide>

            </Swiper>
        );

    }
}