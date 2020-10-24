import React, { useState } from 'react';
import './Body.css';
import { useHistory } from 'react-router-dom';
import LocationInfo from '../Database/LocationInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SwiperCore, { Navigation, Pagination, Mousewheel, HashNavigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Mousewheel, HashNavigation]);
const Body = () => {
    const history = useHistory();
    const [locationId, setLocationId] = useState(4);
    const locationDetail = LocationInfo.filter(location => location.id === locationId)

    return (
        <section className="main-body">
            <div className="row">
                {
                    locationDetail.map(location => {
                        return (
                            <div className="col-md-5 destination-info" key={location.id}>
                                <h1 className="my-3">{location.location}</h1>
                                <h6 className="my-2">{location.shortDescription}</h6>
                                <button className="booking my-3" onClick={() => history.push(`/booking/${location.id}`)}>Booking &nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        )
                    })
                }
                <div className="col-md-7 d-flex flex-wrap justify-content-center">
                    <Swiper
                        spaceBetween={7}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        mousewheel={true}
                        hashNavigation={true}
                    >
                        {
                            LocationInfo.map((location) => {
                                return (
                                    <SwiperSlide style={{ minWidth: '250px' }} key={location.id}>
                                        <div className={`card ${location.section}`} onClick={() => setLocationId(location.id)}>
                                            <h3 className="mt-auto mb-5 ml-3">{location.location}</h3>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        {
                            LocationInfo.map((location) => {
                                return (
                                    <SwiperSlide style={{ minWidth: '250px' }} key={location.id}>
                                        <div className={`card ${location.section}`} onClick={() => setLocationId(location.id)}>
                                            <h3 className="mt-auto mb-5 ml-3">{location.location}</h3>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Body;