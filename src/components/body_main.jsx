import React, { Component } from "react";
import "./body_main.css";

class Body_Main extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="header">
          <div className="container flex">
            <div className="text">
              <h1 className="mb">
                Complete Daily <br />
                <span>Workout</span> At Home
              </h1>

              <p className="mb">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                sunt sed tempora neque molestiae corrupti nobis harum ullam eos
                nam!
              </p>

              <a href="#" className="btn mt">
                Get Started Now
              </a>
            </div>

            <div className="visual">
              <img
                src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/banner-img.png"
                alt=""
              />
            </div>
          </div>
        </header>
        <div className="section">
          <div className="container flex">
            <div className="text">
              <h2 className="primary mb">Why Choose Us?</h2>
              <h3 className="secondary mb">Consulatation with Expert.</h3>
              <p className="tertiary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                quos maxime tempore?
              </p>
              
            </div>
            <div className="visual">
              <img
                src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/why-us.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="section" id="explore">
      <div className="container flex">
        <div className="visual">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/explore.jpg"
            alt=""
          />
        </div>
        <div className="text">
          <h2 className="primary mb">
            Explore Our Fitness <br />
            Studio
          </h2>
          <p className="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            esse vitae ratione quos maiores eveniet temporibus illum! Eligendi
            amet officia unde sint totam ut optio. Molestiae, illo quia?
          </p>

          <a href="#" className="btn mt">Get Started Now</a>
        </div>
      </div>
    </div>

    <div className="section" id="trainer">
      <h2 className="primary mb">Our Professional Trainers</h2>
      <div className="container flex">
        <div className="trainer">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg"
            alt=""
          />
          <h3 className="secondary mb">Alan Smith</h3>
          <p className="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
          </p>

          <a href="#" className="btn-2">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
        </div>

        <div className="trainer">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg"
            alt=""
          />
          <h3 className="secondary mb">Alan Smith</h3>
          <p className="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
          </p>

          <a href="#" className="btn-2">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
        </div>

        <div className="trainer">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg"
            alt=""
          />
          <h3 className="secondary mb">Alan Smith</h3>
          <p className="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
          </p>

          <a href="#" className="btn-2">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
          </a>
        </div>
      </div>
    </div>

    <div className="section" id="testimonial">
      <div className="container flex">
        <div className="text">
          <h2 className="primary">
            That's What Our Super <br />
            Client Says
          </h2>

          <br />
          <br />
          <br />

          <div className="client">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/client1.jpg"
              alt=""
            />
            <h2 className="secondary">Exelent Training</h2>
            <p className="tertiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas voluptatem ad, repudiandae voluptates odio deleniti
              reiciendis in veniam quidem expedita maxime error fugit. Pariatur
              quasi sunt aut id. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Neque, officiis.
            </p>
          </div>
        </div>
        <div className="visual">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="section" id="discount">
      <div className="container flex">
        <div className="visual">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/discount.png"
            alt=""
          />
        </div>
        <div className="text">
          <h2 className="primary mb">
            Fitness classNamees This Summer, Pay Now And Get 25% Discount
          </h2>

          <p className="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
            minus praesentium est et veniam voluptate alias excepturi minima
            placeat amet nostrum, eligendi, quod cum ducimus nesciunt ipsa eum,
            explicabo eaque obcaecati.
          </p>

          <a href="#" className="btn bt">Book Now</a>
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="container flex">
        <p className="tertiary">
          &copy; 2022 Programmer Cloud. All Rights Reserved.
        </p>
      </div>
    </footer>

    <a href="https://www.youtube.com/watch?v=H_rRlMSbarg" className="youtube" target="__blank">
  <p>Watch Tutorial 🔥</p>
</a>
      </>
    );
  }
}

export default Body_Main;
