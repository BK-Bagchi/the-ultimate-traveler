import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LocationInfo from '../Database/LocationInfo';
import './Location.css';

const LocationDetail = () => {
    const history = useHistory();
    const { id } = useParams();
    const locationDetail = LocationInfo.filter(location => location.id === Number(id));
    const [error, setError] = useState({
        origin: ' ',
        from: ' ',
        to: ' '
    })

    const fieldValueValidation = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        console.log(fieldValue);
        if (fieldName === 'origin') {
            if (/[a-zA-Z]{3,}/.test(fieldValue)) {
                setError({ ...error, origin: '' })
            }
            else {
                setError({ ...error, origin: 'Enter valid location name' })
            }
        }
        else if (fieldName === 'from') {
            if (fieldValue.length > 5) {
                setError({ ...error, from: '' })
            }
            else {
                setError({ ...error, from: 'Enter check in date' })
            }
        }
        else if (fieldName === 'to') {
            if (fieldValue.length > 5) {
                setError({ ...error, to: '' })
            }
            else {
                setError({ ...error, to: 'Enter check out date' })
            }
        }
    }

    const startBooking = (e) => {
        e.preventDefault()
        console.log(error);
        const { origin, from, to } = error;
        if (!origin && !from && !to) {
            history.push(`/location/${locationDetail[0].id}`)
        }
    }


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
                        <input name="origin" type="text" className="mb-0" placeholder="From" onBlur={fieldValueValidation} />
                        <span className="align-self-start error">{error.origin}</span>

                        <span className="align-self-start mt-4">Destination</span>
                        <input type="text" className="mb-0" placeholder="to" value={locationDetail[0].location} readOnly />
                        <span className="align-self-start error"></span>

                        <div className="row d-flex mt-4">
                            <div className="col-md-6 d-flex flex-column align-items-center p-0">
                                <span className="align-self-start">Form</span>
                                <input name="from" type="date" className="mb-0" placeholder="now" onBlur={fieldValueValidation} />
                                <span className="align-self-start mb-2 error">{error.from}</span>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-center p-0">
                                <span className="align-self-start">To</span>
                                <input name="to" type="date" className="mb-0" placeholder="now" onBlur={fieldValueValidation} />
                                <span className="align-self-start mb-2 error">{error.to}</span>
                            </div>
                        </div>
                        <input type="submit" value="Start Booking" onClick={startBooking} />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LocationDetail;