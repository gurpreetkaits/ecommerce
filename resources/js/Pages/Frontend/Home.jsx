import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import "../../../assets/icons/css/all.css";
import FeatureCrousel from "@/Components/HomeComponenet/FeatureCrousel";
import { FeatureTab } from "@/Components/HomeComponenet/FeatureTab";

export default function Welcome(props) {
    return (
        <>
            <Head title="Home" />
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container mx-5">
                    <ul className="navbar-nav my-2">
                        <li className="nav-item me-4 cursor-pointer">
                            <i
                                style={{ fontSize: 18 }}
                                className="fab fa-twitter"
                            ></i>
                        </li>
                        <li className="nav-item me-4 cursor-pointer">
                            <i
                                style={{ fontSize: 18 }}
                                className="fab fa-linkedin"
                            ></i>
                        </li>
                        <li className="nav-item me-4 cursor-pointer">
                            <i
                                style={{ fontSize: 18 }}
                                className="fab fa-instagram"
                            ></i>
                        </li>
                        <li className="nav-item me-4 cursor-pointer">
                            <i
                                style={{ fontSize: 18 }}
                                className="fab fa-tiktok"
                            ></i>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item me-4 cursor-pointer">
                            <i
                                style={{ fontSize: 17 }}
                                className="far fa-heart"
                            ></i>
                        </li>
                        <li className="nav-item me-4 cursor-pointer">
                            <i
                                style={{ fontSize: 17 }}
                                className="fas fa-shopping-cart"
                            ></i>
                        </li>
                        <li className="nav-item me-4 cursor-pointer">
                            <i
                                style={{ fontSize: 17 }}
                                className="fas fa-user"
                            ></i>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container mx-5">
                    <a className="navbar-brand cursor-pointer fs-3" href="#">
                        Fragrance <span className="text-primary"> Beauty</span>
                    </a>
                    <form className="d-flex">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="ms-2 btn btn-outline-primary my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container mx-5">
                    <ul className="navbar-nav mx-auto my-2">
                        <li className="nav-item me-4 cursor-pointer">BRANDS</li>
                        <li className="nav-item me-4 cursor-pointer">
                            FRAGRANCE
                        </li>
                        <li className="nav-item me-4 cursor-pointer">
                            SKINCARE
                        </li>
                        <li className="nav-item me-4 cursor-pointer">MAKEUP</li>
                    </ul>
                </div>
            </nav>
            <div className="container mx-5" style={{padding:0}}>
                <FeatureCrousel />
            </div>
            
            <div className="container mt-3">
                <FeatureTab />
            </div>
        </>
    );
}
