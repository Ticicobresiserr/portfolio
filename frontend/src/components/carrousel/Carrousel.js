import React, { useRef } from "react";
import "./carrousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import { products } from "../../context/data";


const Carrousel = () => {
    const sliderRef = useRef();

    var settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    };
    const gotoNext = () => {
        sliderRef.current.slickPrev();
    }
    const gotoPrev = () => {
        sliderRef.current.slickNext();
    }

    return (
        <>
            <section id="projects">
                <div className="pl2">

                    <div className="pl-texts2">
                        <h1 className="pl-title2">Projects</h1>
                        <p className="pl-desc2">
                            Ready and onging projects ...
                        </p>
                    </div>
                    <div className="flexbutton">
                        <button onClick={() => gotoNext()} className="butonright">
                            <i className="fa-solid fa-arrow-left fa-xl color"></i>
                        </button>
                        <button onClick={() => gotoPrev()} className="butonright">
                            <i className="fa-solid fa-arrow-right fa-xl color"></i>
                        </button>
                    </div>


                    <Slider ref={sliderRef} {...settings} className="hid">
                        {products.map((item) => (
                            //   <Product key={item.id} img={item.img} link={item.link} />
                            <div key={item.id} className="divbox">
                                <Card bg="secondary" className="custom" >
                                    <video controls height="400px" width="100%" allowFullScreen muted>
                                        <source src={item.img} type="video/mp4"/>
                                    </video>
                                    {/* <iframe className="videoyes" src={item.img} height="400px" type="video/mp4"
                                        title="YouTube video player" frameBorder="0" allowFullScreen>
                                    </iframe> */}
                                    <Card.Body>
                                        <Card.Title style={{ color: "black" }}>{item.name}</Card.Title>
                                        <Card.Text style={{ color: "black" }}>
                                            {item.exp}
                                        </Card.Text>
                                        <Button variant="primary" href={item.link}>Visit</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}

                    </Slider>


                </div>
            </section>
        </>

    );
};
export default Carrousel;

