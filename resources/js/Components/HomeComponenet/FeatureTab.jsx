import React from "react";

export const FeatureTab = () => {
    const tabChange = (e) => {
        document.getElementById(e.currentTarget.id);
    };
    return (
        <div>
            <div className="row">
                <h3 className="featuretabHeading  text-center text-dark mt-4">
                    YOUR LIFESTYLE JUST GOT
                    <span className="text-dark fw-bold">PERSONALISED</span>
                </h3>
                <p className="featuretabPara text-center text-secondary">
                    AT LIVING BEAUTY WE FOCUS ON.....
                </p>
                <div className="container">
                <div className="col-xl-12 mt-5">
                  <div className="nav-align-top mb-4">
                    <ul className="nav nav-pills mb-3 nav-fill mx-5" role="tablist">
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link active"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-justified-home"
                          aria-controls="navs-pills-justified-home"
                          aria-selected="true"
                        >
                          <i className="tf-icons bx bx-home"></i> ROUTINE BUILDER
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-justified-profile"
                          aria-controls="navs-pills-justified-profile"
                          aria-selected="false"
                        >
                          <i className="tf-icons bx bx-user"></i> LIVING BEAUTY
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#navs-pills-justified-messages"
                          aria-controls="navs-pills-justified-messages"
                          aria-selected="false"
                        >
                          <i className="tf-icons bx bx-message-square"></i> THE KNOWDOWN
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav-link"
                          role="tab"
                          data-bs-toggle="tab"
                          data-bs-target="#skin-consultation"
                          aria-controls="skin-consultation"
                          aria-selected="false"
                        >
                          <i className="tf-icons bx bx-message-square"></i> SKIN CONSULTATION
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content mt-4">
                      <div className="tab-pane fade show active" id="navs-pills-justified-home" role="tabpanel">
                        <p className="mb-0">
                        <img
                                src="productImages/routingbuilder.jpg"
                                alt="routing builder"
                                className="img-fluid"
                            />
                        </p>
                      </div>
                      <div className="tab-pane fade" id="navs-pills-justified-profile" role="tabpanel">
                        <p>
                          Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                          cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                          cheesecake fruitcake.
                        </p>
                        <p className="mb-0">
                          Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                          cotton candy liquorice caramels.
                        </p>
                      </div>
                      <div className="tab-pane fade" id="navs-pills-justified-messages" role="tabpanel">
                        <p>
                          Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                          cupcake gummi bears cake chocolate.
                        </p>
                        <p className="mb-0">
                          Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                          roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                          jelly-o tart brownie jelly.
                        </p>
                      </div>
                      <div className="tab-pane fade" id="skin-consultation" role="tabpanel">
                        <p>
                          Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                          cupcake gummi bears cake chocolate.
                        </p>
                        <p className="mb-0">
                          Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                          roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                          jelly-o tart brownie jelly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
    );
};
