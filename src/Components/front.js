import { Row, Col, Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import li from "../Images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import qa from "../Images/one.jpg";
import qb from "../Images/two.jpeg";
import qc from "../Images/three.jpg";
import qd from "../Images/four.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Netflix() {
  return (
    <>
      <div className="a1">
        <Row className="z1">
          <Col lg={1} md={0} xs={0}></Col>
          <Col lg={8} md={8} xs={6}>
            <img src={li} className="fr"></img>
          </Col>
          <Col className="u1" lg={3} md={4} xs={6}>
            <button className="b1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-translate"
                viewBox="0 0 16 16"
              >
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
              </svg>
              <span className="b3">
                English
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </button>
            <button className="b2">Signup</button>
          </Col>
        </Row>
        <Row className="z1">
          <Col lg={3} md={2} xs={1}></Col>

          <Col lg={6} md={8} xs={10}>
            <p className="c1">
              Unlimited movies, TV <span className="d1">shows and more</span>
            </p>
          </Col>

          <Col lg={3} md={2} xs={1}></Col>
        </Row>
        <Row className="z1">
          <Col lg={4} md={3} xs={2}></Col>

          <Col lg={4} md={5} xs={8}>
            <center>
              <p className="c2">Starts at ₹149. Cancel anytime.</p>
            </center>
          </Col>

          <Col lg={4} md={4} xs={2}></Col>
        </Row>

        <Row className="z1">
          <Col lg={3} md={2} xs={1}></Col>

          <Col lg={6} md={8} xs={10}>
            <p className="c3">
              Ready to watch? Enter your email to create{" "}
              <span className="d3">
                or restart your <span className="d2">membership.</span>
              </span>
            </p>
          </Col>

          <Col lg={3} md={2} xs={1}></Col>
        </Row>

        <Row className="z1">
          <Col lg={3} md={2} xs={0}></Col>

          <Col lg={4} md={4} xs={12}>
            <label className="f1" for="email"></label>
            <input
              type="email"
              className="g1"
              placeholder="Email address"
            ></input>
          </Col>

          <Col lg={2} md={4} xs={12}>
            <button className="f2">Get Started</button>
          </Col>

          <Col lg={3} md={2} xs={0}></Col>
        </Row>
      </div>
      <button className="grbu"></button>
      <div className="di"></div>

      <div className="a11">
        <Container>
          <Row>
            <Col lg={12} md={12} xs={12}>
              <h4 className="c11">Trending Now</h4>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={12} xs={12}>
              <button className="c12">
                India
                <span className="i11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </span>
              </button>
            </Col>

            <Col className="mw" lg={6} md={12} xs={12}>
              <button className="c13">
                Movies
                <span className="i12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </span>
              </button>
            </Col>

            <Col lg={0} md={0} xs={0}></Col>
          </Row>

          <Swiper
            // className="fr0"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img src={qa} className="sw1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={qb} className="sw1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={qc} className="sw1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={qd} className="sw1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={qa} className="sw1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={qb} className="sw1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={qc} className="sw1"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={qd} className="sw1"></img>
            </SwiperSlide>
          </Swiper>

          <Row>
            <Col lg={12} md={12} xs={12}>
              <h4 className="more">More reasons to join</h4>
            </Col>
          </Row>
          <div className="cards">
            <Row>
              <Col lg={3} md={12} xs={12}>
                <Card
                  className="cardb"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    border: "none",
                  }}
                >
                  <Card.Body className="cardq">
                    <Card.Title>
                      <span className="ct">Enjoy on your TV</span>
                    </Card.Title>
                    <Card.Text>
                      <span className="cb">
                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple
                        TV, Blu-ray players and more.
                      </span>
                    </Card.Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30%"
                      height="5%"
                      fill="currentColor"
                      class="em bi-display"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
                    </svg>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={12} xs={12}>
                <Card
                  className="cardb"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    border: "none",
                  }}
                >
                  <Card.Body className="cardq">
                    <Card.Title>
                      <span className="ct">
                        Download your shows to watch offline
                      </span>
                    </Card.Title>
                    <Card.Text>
                      <span className="cb">
                        Save your favourites easily and always have something to
                        watch.
                      </span>
                    </Card.Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30%"
                      height="5%"
                      fill="currentColor"
                      class="em bi-arrow-down-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                    </svg>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={12} xs={12}>
                <Card
                  className="cardb"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    border: "none",
                  }}
                >
                  <Card.Body className="cardq">
                    <Card.Title>
                      <span className="ct">Watch everywhere</span>
                    </Card.Title>
                    <Card.Text>
                      <span className="cb">
                        Stream unlimited movies and TV shows on your phone,
                        tablet, laptop and TV.
                      </span>
                    </Card.Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40%"
                      height="5%"
                      fill="currentColor"
                      class="em bi-cast"
                      viewBox="0 0 16 16"
                    >
                      <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0" />
                      <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z" />
                    </svg>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={12} xs={12}>
                <Card
                  className="cardb"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    border: "none", 
                  }}
                >
                  <Card.Body className="cardq">
                    <Card.Title>
                      <span className="ct">ECreate profiles for kids</span>
                    </Card.Title>
                    <Card.Text>
                      <span className="cb">
                        Send kids on adventures with their favourite characters
                        in a space made just for them — free with your
                        membership.
                      </span>
                    </Card.Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30%"
                      height="5%"
                      fill="currentColor"
                      class="em bi-emoji-smile"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                    </svg>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      
    </>
  );
}

export default Netflix;
