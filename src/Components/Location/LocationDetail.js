import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LocationInfo from '../Database/LocationInfo';
import './Location.css';

const LocationDetail = () => {
    const history = useHistory();
    const { id } = useParams();
    const locationDetail = LocationInfo.filter(location => location.id === Number(id));

    return (
        <section className="location-detail mt-5">
            <div className="row">
                {
                    locationDetail.map(location => {
                        return (
                            <div className="col-md-6 d-flex flex-column justify-content-center" key={location.id}>
                                <h1>{location.location}</h1>
                                <p>{location.detailDescription}</p>
                            </div>
                        )
                    })
                }
                <div className="col-md-6 d-flex justify-content-center">

                    <form className="submit-info d-flex flex-column align-items-center">
                        <span className="align-self-start">Origin</span>
                        <input type="text" placeholder="From" />

                        <span className="align-self-start">Destination</span>
                        <input type="text" placeholder="to" />

                        <span className="align-self-start">Form</span>
                        <input type="text" placeholder="now" />
                        <input type="submit" value="Start Booking" onClick={() => history.push("/location")} />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LocationDetail;