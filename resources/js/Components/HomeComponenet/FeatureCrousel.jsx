import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="row">
                        <div className="col-lg-6 my-5">
                            <h2 className="pt-5 text-dark">
                                HEALTHY SKIN IS BEAUTIFUL
                            </h2>
                            <p className="product-cat-description w-75">
                                The original doctor brand, nurse your skin back
                                to full strength with Murad’s science-backed
                                formulas.
                            </p>
                            <button className="btn btn-outline-secondary">
                                SHOP MURAD
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="productImages/muradproduct.jpeg"
                                alt="product"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row">
                        <div className="col-lg-6 my-5" >
                            <h2 className="pt-5 text-dark">
                                HEALTHY SKIN IS BEAUTIFUL
                            </h2>
                            <p className="product-cat-description w-75">
                                The original doctor brand, nurse your skin back
                                to full strength with Murad’s science-backed
                                formulas.
                            </p>
                            <button className="btn btn-outline-secondary">
                                SHOP MURAD
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="productImages/muradproduct.jpeg"
                                alt="product"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
