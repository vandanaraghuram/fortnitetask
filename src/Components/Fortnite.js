import React from "react";
import "./Fortnite.css";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Fortnite() {
  return (
    <div>

<div className="close-button-container">
          <button className="close-button">X</button>
        </div>
      <div className="" style={{ color: "white" }}>


        <p className="mt-5 fs-5 fw-lighter d-flex justify-content-center">
          Epic Games: An American Video Game And Software Developer
          <br /> And Publisher Based In Cary, North Carolina
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <img
            className="fornite"
            src="https://imagizer.imageshack.com/img922/5628/RTdvMK.jpg"
            alt=""
          />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p className="fw-lighter mt-4" style={{ textAlign: "center" }}>
            Create. Play and Battle with friends for free in fortnite, Be the
            last player standing Lorem, breadcrumb <br /> ipsum dolor sit amet
            consectetur adipisicing elit. Hic voluptate incidunt enim
            repellendus reiciendis cumque in an individual age rating{" "}
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-light w-25 mt-4 "
            style={{ borderRadius: "0" }}
          >
            Visit Website
          </button>
        </div>

        <Row className="justify-content-evenly" style={{ marginTop: "8%" }}>
          <Col className="d-flex align-items-center justify-content-center">
            <Card style={{ width: "16rem", background: "transparent" }}>
              <Card.Img
                style={{ height: "15rem", width: "16rem" }}
                variant="top"
                src="https://imagizer.imageshack.com/img923/8514/3GC4PV.jpg"
              />
              <Card.Body>
                <Card.Text
                  className="text-light fw-lighter"
                  style={{ textAlign: "center" }}
                >
                  Explore large,destructive environments where no two games are
                  ever the same
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <Card style={{ width: "16rem", background: "transparent" }}>
              <Card.Img
                style={{ height: "15rem", width: "16rem" }}
                variant="top"
                src="https://imagizer.imageshack.com/img922/1914/GSOA1f.jpg"
              />
              <Card.Body>
                <Card.Text
                  className="text-light fw-lighter"
                  style={{ textAlign: "center" }}
                >
                  Explore large,destructive environments where no two games are
                  ever the same
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <Card style={{ width: "16rem", background: "transparent" }}>
              <Card.Img
                style={{ height: "15rem", width: "16rem" }}
                variant="top"
                src="https://imagizer.imageshack.com/img922/5952/MZdSa7.jpg"
              />
              <Card.Body>
                <Card.Text
                  className="text-light fw-lighter"
                  style={{ textAlign: "center" }}
                >
                  Explore large,destructive environments where no two games are
                  ever the same
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div>
          <h2 className="fw-lighter text-center" style={{ marginTop: "8%" }}>
            Our Contribution
          </h2>
          <p className="mt-4 fw-lighter" style={{ textAlign: "center" }}>
            Our core offering extends beyond mere profit generation we emphasize
            the growth and active involvement of our user <br /> community.
            Collbrating with us represents an investment . rather than a mere
            expemditure <br /> distictive digital interactions gurantees
            unparalelled benefits of our clients
          </p>
        </div>
        <div className="d-flex align-content-center justify-content-center ms-5">
          <Row style={{ marginTop: "8%" }}>
            <Col className="me-5 ms-5">
              <h1 style={{ fontSize: "80px", fontWeight: "lighter" }}>5M</h1>
              <p className="fw-lighter">Daily user engagement </p>
            </Col>

            <Col className="me-5">
              <h1 style={{ fontSize: "80px", fontWeight: "lighter" }}>$500K</h1>
              <p className="fw-lighter">Revenue surge for a platform </p>
            </Col>

            <Col className="ms-4">
              <h1 style={{ fontSize: "80px", fontWeight: "lighter" }}>10X</h1>
              <p className="fw-lighter">ROAS on all our marketing campaigns </p>
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: "12%" }}>
          <h2 className="text-center fw-lighter">
            Interested In Delving Deeper Into The Project?
          </h2>
          <p className="mt-5" style={{ textAlign: "center" }}>
            If you would like to explore further details about our initiatives
            or any of our <br /> affiliated brands, dont hesitate to connect.
            You can reach out us via any of our <br /> email at @hello@acc.com
            or give us a call 480948799730
          </p>

          <div className="d-flex align-content-center justify-content-center mt-5 ">
            <button
              className="btn btn-outline-light w-25 me-5 "
              style={{ borderRadius: "0px" }}
            >
              Ring us on skype
            </button>

            <button
              className="btn btn-light w-25 "
              style={{ borderRadius: "0px" }}
            >
              Connect us
            </button>
          </div>



          <div className="text-center" style={{marginTop:'15%', paddingBottom:'2%', color:'grey'}}>
            <p>@ 2019-2023 abc technology solution pvt.ltd All Rights Are Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fortnite;
