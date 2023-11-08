import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="defaultFooterCss text-center text-lg-start ">
        <section className="upperFooter">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    src="./images/seetasmalllogo.png"
                    alt="Seeta logo"
                    className="footerImg"
                  />
                  Seeta
                </h6>
                <p>
                We are a home for Optimism tinkers, OP Stack developers & Web3 eco-system users focused towards developing iot solutions for Optimism Collective. 
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"></div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Discord Links</h6>
                <p>manusheel#3075</p>
                <p>deeptigupta#4290</p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>Building number 203, A2
                  block Janakpuri New Delhi 110058
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  manu@seeta.in
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  dev@seeta.in
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i>99580 54646
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="copyrightSec">
          © 2023 Copyright: <strong>SEETA All Rights Reserved.</strong>
        </div>
        <div className="text-center optionalNameSec">
          Credits: Optimism Website Frontend by:{" "}
          {/* This {" "} javascript helps in adding space */}
          <a
            className="text-reset fw-bold"
            href="https://in.linkedin.com/in/pradhuman-chhabra-30a757214"
            target="_blank"
            rel="noreferrer"
          >
            Pradhuman Chhabra
          </a>
        </div>
      </footer>
    </>
  );
};
