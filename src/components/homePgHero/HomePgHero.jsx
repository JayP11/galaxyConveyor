import React from "react";
import "./HomePgHero.css";
import { Link } from "react-router-dom";
const HomePgHero = () => {
  return (
    <div className="HomePgHero_main">
      <div className="HomePgHero_one">
        <div>
          <span className="HomePgHero_name_MANUFACTURER">MANUFACTURER OF </span>
          <br />
          <span className="HomePgHero_name_cat">INDUSTRIAL </span>
          <br />
          <span className="HomePgHero_name_head">
            {" "}
            ROLLER
            <br /> CHAINS
          </span>

          <br />
          <div style={{ marginTop: "2rem" }}>
            <Link
              to="https://theapplified.com/galaxychainfront"
              className="btn btn_black"
              style={{
                marginTop: "2rem",
              }}>
              Visit Now
            </Link>
          </div>
        </div>
      </div>
      <div className="HomePgHero_two">
        <div>
          <span className="HomePgHero_name_MANUFACTURER">MANUFACTURER OF </span>
          <br />
          <span className="HomePgHero_name_cat">CUSTOMIZED </span>
          <br />
          <span className="HomePgHero_name_head">
            CONVEYOR <br />
            CHAINS{" "}
          </span>
          {/* <span style={{ fontSize: "18px" }}>MANUFACTURER OF </span>
          <br />
          <span style={{ fontSize: "30px", letterSpacing: "3px" }}>
            CUSTOMIZED{" "}
          </span>
          <br />
          <span style={{ fontSize: "50px", fontWeight: "900" }}>
            CONVEYOR <br />
            CHAINS{" "}
          </span>{" "} */}
          <br />
          <div style={{ marginTop: "2rem" }}>
            <Link
              to="/ProductPage"
              className="btn"
              style={{ marginTop: "2rem" }}>
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePgHero;

/* <div
  style={{
    backgroundImage: `url(${images.Factory_img})`,
    backgroundSize: "cover",
    height: "85vh",
  }}
>
  <div
    className=""
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "var(--color-white)",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div className="homehero_galaxychain_logos_main">
      <div className="homehero_gc_logo_main">
        <img
          src={images.gc_logo}
          alt="gc_logo"
          className="homehero_gc_logo_inner"
        />
      </div>
      <div className="homehero_gc_logo_main">
        <img
          src={images.gconveyors}
          alt="gc_logo"
          className="homehero_gc_logo_inner"
        />
      </div>
    </div>
    <div className="manufacturing_details_home_hero">
      <div>
        <h1 style={{ color: "whitesmoke", fontStyle: "italic" }}>
          Manufacturer of
        </h1>
      </div>
      <div>
        <h1 className="INDUSTRIAL_ROLLER_CHAINS_H1">
          INDUSTRIAL ROLLER CHAINS
        </h1>
      </div>
      <div>
        <h1 className="CUSTOMIZED_CONVEYOR_CHAINS_H1">
          & CUSTOMIZED CONVEYOR CHAINS.
        </h1>
      </div>
    </div>
  </div>
</div>; */
