import React from "react";
import Nav from "../../components/MainPage/Nav"; // Updated import path
import Footer from "../../components/MainPage/Footer"; // Updated import path
import ScrollToTop from "react-scroll-to-top";

const About = () => {
  return (
    <>
    <ScrollToTop smooth color="#6f00ff" />

      <Nav />
      <div className="header">
        <h1>GREAT IDEAS CAM COME </h1>
        <h1>FROM ANYONE AND </h1>
        <h1>THEY DO.</h1>
      </div>
      <div className="video">
        <iframe src="https://www.youtube.com/embed/sU0dktjxTLE?si=FWqmhR93jY7uec1J"></iframe>
      </div>
      <div className="about">
        <h1>WHAT THEY DREAM</h1>
        <h1>ABOUT WE MAKE IT REAL</h1>

        <div className="team">
          <div className="teamPics">
            <img src="https://s.yimg.com/ny/api/res/1.2/lpGZEwKlEU90q5OQ6e4F2g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en/snappa_tech_788/8f3a840d22c06baa217a3384687b4888" />
          </div>

          <div className="info">
            <p>
              We try and make people feel like family as quick as possible, and
              help get them acclimated to our project.
            </p>
          </div>
        </div>

        <div className="games">
          <p>
            Our studio is composed of a group of diverse, ambitious, highly
            collaborative creatives who empower one another, while working as a
            team to deliver high quality experiences.
          </p>
          <div className="a">
            <img
              className="gta5"
              src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png"
              alt=""
            />
            <h4>We made history</h4>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
            alt=""
          />
        </div>

        <div className="start">
          <h2>STARTING FROM</h2>
          <h2>THE BOTTOM</h2>
          <div className="top">
            <img
              className="gta1"
              src="https://upload.wikimedia.org/wikipedia/en/e/e7/GTA_-_Box_Front.jpg"
              alt=""
            />
            <div className="topText">
              <h3>
                Rockstar Games, Inc. is an video game publisher based in New
                York City.
              </h3>

              <h4>
                The company was established in December 1998 as a subsidiary of
                Take-Two Interactive, using the assets Take-Two had previously
                acquired from BMG Interactive.
              </h4>

              <h4>
                Founding members of the company were Sam and Dan Houser, Terry
                Donovan and Jamie King, who worked for Take-Two at the time, and
                of which the Houser brothers were previously executives at BMG
                Interactive. Sam Houser heads the studio as president.
              </h4>
            </div>
          </div>

          <div className="middle">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg"
              alt=""
            />

            <div className="middleText">
              <h3>
                In 2006, as part of testing its new RAGE engine ahead of GTA IV
                and RDR.
              </h3>
            </div>
          </div>
          <div className="bottom">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSg6YV1olRV_ZPiKpfyw1VIMxJTSADNapvTaPB8yFSqcKs-y1wk"
              alt=""
            />
            <div className="bottomText">
              <h4>
                Rockstar started working with DMA on GTA 2, which was supposed
                to get better, bigger and harder. Rockstar sterte working with
                DMA on GTA 2, which was supposed to get better, bigger and
                harder.
              </h4>
              <br />
              <h4>
                After several successful (but not profitable) successful
                projects that broke the mold, Rockstar Games is back to its
                roots and greatest treasure, the GTA franchise. In 2013, Grand
                Theft Auto V was released.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
