// import React, { useEffect, useState } from "react";
// import "./NumCountHome.css";
// import images from "../../constants/images";
// import CountUp from "react-countup";

// const NumCountHome = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isCounterStarted, setCounterStarted] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     const startCounterOnScroll = () => {
//       // Replace the following line with the actual scroll threshold you want
//       if (scrollPosition > /* Your Scroll Threshold */ 700) {
//         setCounterStarted(true);
//         // Remove the scroll event listener once the counter is started (optional)
//         window.removeEventListener("scroll", startCounterOnScroll);
//       }
//     };

//     // Attach the scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Attach a separate event listener for starting the counter on scroll
//     window.addEventListener("scroll", startCounterOnScroll);

//     // Clean up the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("scroll", startCounterOnScroll);
//     };
//   }, [scrollPosition]);
//   return (
//     <div className="NumCountHome_main">
//       <div className="heading">
//         <h1>Milestones</h1>
//       </div>
//       <div class="underline"></div>
//       <div
//         className=""
//         style={{
//           backgroundImage: `url(${images.chain_img})`,
//           backgroundSize: "cover",
//           height: "100%",
//         }}
//       >
//         <div
//           className=""
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             color: "var(--color-white)",
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             alignItems: "center",
//             flexDirection: "column",
//             justifyContent: "flex-start",
//           }}
//         >
//           <div className="milestone_con">
//             <div className="milestone_part">
//               <div className="milestone_part_inner1">
//                 <p className="milestone_part_text">GLOBAL</p>
//                 <p className="milestone_part_text">PRESENCE</p>
//               </div>

//               <div className="milestone_part_inner2_main">
//                 <div className="milestone_part_inner2">
//                   {isCounterStarted && (
//                     <p className="milestone_part_text_white">
//                       <CountUp start={0} end={5} duration={2.75}></CountUp> +
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="milestone_part">
//               <div className="milestone_part_inner1__light_blue_main">
//                 <div className="milestone_part_inner1__light_blue">
//                   {isCounterStarted && (
//                     <p className="milestone_part_text_white">
//                       <CountUp start={0} end={20} duration={2.75}></CountUp> +
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="milestone_part_inner1 milestone_part_inner1_trans">
//                 <p className="milestone_part_text">INDIAN STATES</p>
//                 <p className="milestone_part_text">PRESENCE</p>
//               </div>
//             </div>

//             <div className="milestone_part">
//               <div className="milestone_part_inner1">
//                 <p className="milestone_part_text">TEAM</p>
//                 <p className="milestone_part_text">MEMBERS</p>
//               </div>

//               <div className="milestone_part_inner2_main_green">
//                 <div className="milestone_part_inner2_green">
//                   {isCounterStarted && (
//                     <p className="milestone_part_text_white">
//                       <CountUp start={0} end={200} duration={2.75}></CountUp> +
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="milestone_part">
//               <div className="milestone_part_inner1__light_yellow_main">
//                 <div className="milestone_part_inner1__light_yellow">
//                   {isCounterStarted && (
//                     <p className="milestone_part_text_white">
//                       <CountUp start={0} end={1100} duration={2.75}></CountUp> +
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="milestone_part_inner1 milestone_part_inner1_trans">
//                 <p className="milestone_part_text">HAPPY</p>
//                 <p className="milestone_part_text">CUSTOMERS</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NumCountHome;

import React, { useEffect, useState } from "react";
import "./NumCountHome.css";
import images from "../../constants/images";
import CountUp from "react-countup";

const NumCountHome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isCounterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const startCounterOnScroll = () => {
      if (scrollPosition > /* Your Scroll Threshold */ 900) {
        setCounterStarted(true);
        window.removeEventListener("scroll", startCounterOnScroll);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Attach a separate event listener for starting the counter on scroll
    window.addEventListener("scroll", startCounterOnScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", startCounterOnScroll);
    };
  }, [scrollPosition]);
  return (
    <div className="NumCountHome_main">
      <div
        className=""
        style={{
          backgroundImage: `url(${images.chain_img})`,
          backgroundSize: "cover",
          height: "100%",
        }}>
        <div
          className=""
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "var(--color-white)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingBottom: "4rem",
          }}>
          <div className="heading" style={{ color: "darkgray" }}>
            <h1>Milestones</h1>
          </div>
          <div className="underline"></div>
          <div className="card_count_top">
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.global}
                  alt="global"
                  className="count_icon_inner"
                />
              </div>
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  0<CountUp start={0} end={5} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Global Presence</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.india_location}
                  alt="india_location"
                  className="count_icon_inner"
                />
              </div>
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={20} duration={2.75}></CountUp> +
                </div>
              )}

              <div>
                <h3 style={{ fontWeight: "800" }}>Indian States Presence</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Industries_Serving}
                  alt="Industries_Serving"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={15} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Industries Serving</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Team_Members}
                  alt="Team_Members"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={200} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Team Members</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Happy_Customers}
                  alt="Happy_Customers"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={1100} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Happy Customers</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Manufacturing_Capacity}
                  alt="Manufacturing_Capacity"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={250000} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Manufacturing Capacity</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Manufacturing_Unitof}
                  alt="Manufacturing_Unitof"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={85000} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Manufacturing Unit of</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.experience}
                  alt="experience"
                  className="count_icon_inner"
                />
              </div>
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={33} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Years of experience</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumCountHome;
