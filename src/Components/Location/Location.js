import React from 'react';
import './Location.css';
import LocationImage from '../../Resources/Image/Rectangle26.png'

const Location = () => {
    return (
        <section className="location">
            <p className="ml-3">252 stays Aug 13-15 3 guests</p>
            <h4 className="ml-3">Stay in Cox's Bazar</h4>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="d-flex my-2">
                            <div className="col-md-6 ml-2">
                                <img className="w-100" src={LocationImage} alt="Hotel Img" />
                            </div>
                            <div className="col-md-6 p-0">
                                <h5>Light Bright Airy Stylish Art & Safe Peaceful Stay</h5>
                                <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                                <p>Wif Air Conditioning Available</p>
                            </div>
                        </div>
                        <div className="d-flex my-2">
                            <div className="col-md-6 ml-2">
                                <img className="w-100" src={LocationImage} alt="Hotel Img" />
                            </div>
                            <div className="col-md-6 p-0">
                                <h5>Light Bright Airy Stylish Art & Safe Peaceful Stay</h5>
                                <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                                <p>Wif Air Conditioning Available</p>
                            </div>
                        </div>
                        <div className="d-flex my-2">
                            <div className="col-md-6 ml-2">
                                <img className="w-100" src={LocationImage} alt="Hotel Img" />
                            </div>
                            <div className="col-md-6 p-0">
                                <h5>Light Bright Airy Stylish Art & Safe Peaceful Stay</h5>
                                <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                                <p>Wif Air Conditioning Available</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">Map coming soon</div>
            </div>
        </section>
    );
};

export default Location;