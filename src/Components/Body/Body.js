import React from 'react';
import './Body.css';
import { useHistory } from 'react-router-dom';

const Body = () => {
    const history = useHistory();
    return (
        <section className="main-body">
            <div className="row">
                <div className="col-md-5 destination-info">
                    <h1 className="my-3">Cox's Bazar</h1>
                    <h6 className="my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque magnam pariatur molestiae quam tempora nobis tempore a porro possimus. Modi fugit illo minus reiciendis corrupti ab architecto rerum omnis voluptatem.</h6>
                    <button className="booking my-3" onClick={() => history.push('/booking')}>Booking</button>
                </div>
                <div className="col-md-7 d-flex flex-wrap justify-content-center">
                    <div className="card">
                        <h3 className="mt-auto mb-5 ml-3">Cox's Bazar</h3>
                    </div>
                    <div className="card">
                        <h3 className="mt-auto mb-5 ml-3">Sreemangal</h3>
                    </div>
                    <div className="card">
                        <h3 className="mt-auto mb-5 ml-3">Sundarbans</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Body;