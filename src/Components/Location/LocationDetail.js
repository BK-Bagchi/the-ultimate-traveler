import React from 'react';
import './Location.css';

const LocationDetail = () => {
    return (
        <section className="location-detail mt-5">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1>Cox's Bazar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero sapiente eveniet repudiandae sequi enim minima. Nam hic blanditiis, error dolores explicabo obcaecati minus, consectetur animi nihil voluptas totam magni tempora laudantium at perferendis cum voluptate numquam alias, quod similique temporibus dolorem neque reiciendis? Facilis veniam obcaecati ipsa officia ullam illum a vel aut similique sed. Rem culpa sunt exercitationem blanditiis ullam voluptatibus, magni repellendus accusantium dolore quis optio distinctio consequatur, dignissimos, quod pariatur corporis? Deserunt enim distinctio assumenda excepturi unde officiis, saepe tempore veritatis asperiores totam placeat repellat omnis accusamus delectus. Alias aliquid sunt dignissimos reprehenderit magnam, autem quasi.</p>
                </div>
                <div className="col-md-6 d-flex justify-content-center">

                    <form className="submit-info d-flex flex-column align-items-center">
                        <span className="align-self-start">Origin</span>
                        <input type="text" placeholder="From" />

                        <span className="align-self-start">Destination</span>
                        <input type="text" placeholder="to" />

                        <span className="align-self-start">Form</span>
                        <input type="text" placeholder="now" />
                        <input type="submit" value="Start Booking" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LocationDetail;