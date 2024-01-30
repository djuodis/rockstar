import React from "react";

const Rockstars = () => {
  return (
    <>
      <div className="rg">
        <div className="name">
          <h2>ROCKSTAR</h2>
          <h2>GAME</h2>
        </div>

        <div className="parahraps">
          <div className="parahraph1">
            <h4>Philosophy</h4>
            <p>
              When we started, the core idea was that we will make games that we
              want to play. Games that had progressive gameplay on the one hand
              and cinematic production values.
            </p>
          </div>
          <div className="parahraph2">
            <h4>Play it</h4>
            <p>
              Our games up to now have been different from any genre that
              existed at the time; we made new genres by ourselves. We didn't
              rely on testimonials in a business textbook to do what we've done.
            </p>
          </div>
        </div>
        <div className="name">
          <h2>EXPLORE</h2>
          <h2> OUR GAMES</h2>
        </div>

        <div className="parahraps">
          <h2>RED DEAD Redemption 2</h2>
          <div className="parahraph3">
            <div className="card">
              <img
                src="https://images.hdqwalls.com/download/red-dead-redemption-2-arthur-morgan-el-480x854.jpg"
                alt=""
              />
              <p>
                Red Dead Redemption 2 - an open-world action adventure and
                third-person shooter video game.
              </p>
              <img
                src="https://img.goodfon.com/wallpaper/nbig/0/85/game-rockstar-games-red-dead-redemption-2-gang-rdr-4.jpg"
                alt=""
              />
            </div>
            <div className="card">
              <h4>Such a wild west you have never seen</h4>
              <p>
                With over 175 awards and 250 top ratings from gaming titles,
                RDR2 is the epic tale of mobster Arthur Morgan and the Van der
                Linde gang as they flee the law across America at the dawn of
                the modern era.
              </p>

              <img
                src="https://www.psu.com/wp/wp-content/uploads/2020/09/Red-Dead-Redemption-2-PS4-Wallpaper-38.jpg%22"
                alt=""
              />

              <h4>The bigest choice</h4>
              <h4>in a hero's life</h4>

              <button>
                <a href="http://localhost:5176/game/4">Explore</a>
              </button>
            </div>
          </div>

          <h2>Grand theft auto Online</h2>
          <div className="parahraph4">
            <img
              className="gta_online"
              src="https://cdn2.unrealengine.com/gta-online-beginners-guide-tips-1920x1080-5d6144ffed9d.jpg"
              alt=""
            />
            <div className="card">
              <img
                src="https://editors.dexerto.fr/wp-content/uploads/sites/2/2021/05/10/trevor-labo-gta-5-vraie-vie.jpg"
                alt=""
              />
              <p>
                The open-world design lets players freely roam San Andreas,
                which includes an open countryside and the fictional city of Los
                Santos. Players control a protagonist who arrives in Los Santos
                and aims to become the city's ultimate crime lord.
              </p>
              <br />
              <h4>Do whatever</h4>
              <h4>you want</h4>
              <button>
                <a href="http://localhost:5176/game/2">Explore</a>
              </button>
            </div>
            <div className="card">
              <h4>With friends</h4>
              <p>
                When a young street rogue, a retired bank robber and a dangerous
                psychopath find themselves embroiled in a showdown with the most
                frightening and crazy members of the criminal world.
              </p>

              <img
                src="https://i.pinimg.com/originals/29/c8/e1/29c8e19c20123c3a11dbcf1c69872eb8.jpg"
                alt=""
              />
            </div>
          </div>

          <h2>Red Dead Redemption 2</h2>
          <div className="parahraph4">
            <div className="card">
              <img
                src="https://wallpapers.com/images/hd/wallpaper-red-dead-redemption-2-rockstar-games-4k-games-cwx8kbho9mfim8n7.jpg"
                alt=""
              />

              <h4>Land of Opportunities</h4>
              <br />
              <p>
                When a young street rogue, a retired bank robber and a dangerous
                psychopath find themselves embroiled in a showdown with the most
                frightening and crazy members of the criminal world.
              </p>
              <br />
              <img src="https://wallpaperaccess.com/full/7934322.jpg" alt="" />
            </div>
            <div className="card">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/399/260/869/online-rockstar-games-red-dead-red-dead-online-rockstar-studios-hd-wallpaper-preview.jpg"
                alt=""
              />
              <h4>With friends</h4>
              <p>
                Red Dead Online - the vibrant, ever-evolving world where you can
                take on a range of unique roles and pursuits to blaze your own
                outlaw trail across the American frontier - will be available to
                purchase as a standalone game.
              </p>
              <br />
              <br />
              <p>
                Like the single-player game, Red Dead Online is presented in a
                first- and third-person perspective, and the player is free to
                navigate the open, interactive world.
              </p>
              <button>
                <a href="http://localhost:5176/game/5">Explore</a>
              </button>
            </div>
          </div>

          
          <button className="all_games"><a href="/games"> View all games</a></button>
        </div>
      </div>
    </>
  );
};

export default Rockstars;
