import React from 'react';
import './Location.css';
import HotelInfo from '../Database/HotelInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import LocationInfo from '../Database/LocationInfo';

const Location = () => {
    const { id } = useParams();
    const location = LocationInfo.filter(location => location.id === Number(id))

    return (
        <section className="location">
            <p className="ml-3">252 stays Aug 13-15 3 guests</p>
            <h4 className="ml-3">Stay in {location[0].location}</h4>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        {
                            HotelInfo.map(hotel => {
                                const { id, description, rooms, comment1, comment2, rating, rate, total, image } = hotel
                                return (
                                    <div key={id} className="d-flex my-2">
                                        <div className="col-md-6 ml-2">
                                            <img className="w-100" src={require(`../../Resources/Image/${image}`)} alt="Hotel Img" />
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <h4 className="mb-4">{description}</h4>
                                            <h5 className="mb-1">{rooms}</h5>
                                            <p className="mb-1">{comment1}</p>
                                            <p className="mb-1">{comment2}</p>
                                            <div className="mt-3">
                                                <span><i><FontAwesomeIcon icon={faStar} /></i> {rating}</span>
                                                <span className="d-block"><strong>${rate}</strong>/Night &nbsp;&nbsp;&nbsp;&nbsp; <strong>${total}</strong> total</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-6">Map coming soon</div>
            </div>
        </section>
    );
};

export default Location;