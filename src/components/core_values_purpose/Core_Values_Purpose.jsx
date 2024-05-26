// import React from "react";
// import "./Core_Values_Purpose.css";
// import images from "../../constants/images";

// const Core_Values_Purpose = () => {
//   return (
//     <div className="Core_Values_Purpose_main">
//       <div>
//         <div className="heading">
//           <h1>Core Purpose & Core Values</h1>
//         </div>
//         <div>
//           <div className="underline"></div>
//         </div>
//         <div className="core_purpose_main">
//           <h3 style={{ maxWidth: "610px" }}>
//             "To enhance the productivity and efficiency of the ecosystem by
//             providing innovative solutions."
//           </h3>
//         </div>
//       </div>
//       <div className="core_values_box_main">
//         <div className="core_values_box_inner">
//           <div className="core_values_icon_circle_main">
//             <img
//               className="quality_assurance_img_inner"
//               src={images.quality_assurance}
//               alt="quality_assurance"
//             />
//           </div>
//           <div className="vertical_main">
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//           </div>
//           <div className="core_title_num_box_main">
//             <div className="core_title_num_main">
//               <h4
//                 className="core_title_num_h2"
//                 style={{ background: "#e12525" }}>
//                 01
//               </h4>
//             </div>
//             <h2 className="core_title_h2">Quality Assurance</h2>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "1rem",
//           }}>
//           <div className="core_values_icon_circle_main">
//             <img
//               src={images.customer_satisfaction}
//               alt="quality_assurance"
//               style={{ height: "80px", width: "80px" }}
//             />
//           </div>
//           <div className="vertical_main">
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//           </div>
//           <div className="core_title_num_box_main">
//             <div className="core_title_num_main">
//               <h4 className="core_title_num_h2">02</h4>
//             </div>
//             <h2 className="core_title_h2">Customer Satisfaction</h2>
//           </div>
//         </div>
//         <div className="core_values_box_inner">
//           <div className="core_values_icon_circle_main">
//             <img
//               className="mutual_growth_img"
//               src={images.mutual_growth}
//               alt="quality_assurance"
//             />
//           </div>
//           <div className="vertical_main">
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//           </div>
//           <div className="core_title_num_box_main">
//             <div className="core_title_num_main">
//               <h4
//                 className="core_title_num_h2"
//                 style={{ background: "#e12525" }}>
//                 03
//               </h4>
//             </div>
//             <h2 className="core_title_h2">Mutual Growth</h2>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "1rem",
//           }}>
//           <div className="core_values_icon_circle_main">
//             <img
//               src={images.teamwork}
//               alt="quality_assurance"
//               style={{ height: "100px", width: "100px" }}
//             />
//           </div>
//           <div className="vertical_main">
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//           </div>
//           <div className="core_title_num_box_main">
//             <div className="core_title_num_main">
//               <h4 className="core_title_num_h2">04</h4>
//             </div>
//             <h2 className="core_title_h2">Team Work</h2>
//           </div>
//         </div>
//         <div className="core_values_box_inner">
//           <div className="core_values_icon_circle_main">
//             <img
//               src={images.respect_all}
//               alt="quality_assurance"
//               style={{ height: "90px", width: "90px" }}
//             />
//           </div>
//           <div className="vertical_main">
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//             <div className="vertical_inner"></div>
//           </div>
//           <div className="core_title_num_box_main">
//             <div className="core_title_num_main">
//               <h4
//                 className="core_title_num_h2"
//                 style={{ background: "#e12525" }}>
//                 05
//               </h4>
//             </div>
//             <h2 className="core_title_h2">Respect for All</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Core_Values_Purpose;

import React from "react";
import "./Core_Values_Purpose.css";
import images from "../../constants/images";

const Core_Values_Purpose = () => {
  return (
    <div className="Core_Values_Purpose_main">
      <div className="core_head_part">
        <div className="heading_values_purpose head_core">
          <h1
            style={{
              textTransform: "uppercase",
              fontWeight: "800",
              textAlign: "center",
            }}>
            Core Purpose & Core Values
          </h1>
        </div>
        <div className="underline"></div>
        <div className="core_purpose_main">
          <h3 style={{ fontWeight: "600" }}>
            "To enhance the productivity and efficiency of the ecosystem by
            providing innovative solutions."
          </h3>

          <img
            alt=""
            style={{ height: "100px" }}
            src={images.core_purpose_head}
            className="core_purpose_head_img"
          />
        </div>
        {/* <p
          style={{
            width: "100%",
            textAlign: "center",
            paddingBottom: "2rem",
            lineHeight: "1.3",
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          Galaxy chains believes in Innovating, Elevating and Excelling the
          Industries globally with high quality roller and conveyor chains.
        </p> */}
      </div>
      <div className="core_purpose_main_flex">
        <div className="core_purpose_inner_flex">
          <img src={images.core_img1} alt="" />
          <p className="core_img_text">
            Relentless
            <br />
            Quality
          </p>
        </div>

        <div className="core_purpose_inner_flex">
          <img src={images.core_img2} alt="" />
          <p className="core_img_text">
            CUSTOMER -<br />
            Centric Approach
          </p>
        </div>

        <div className="core_purpose_inner_flex">
          <img src={images.core_img3} alt="" style={{ height: "105px" }} />
          <p className="core_img_text">
            MUTUAL <br />
            GROWTH
          </p>
        </div>

        <div className="core_purpose_inner_flex">
          <img src={images.core_img4} alt="" style={{ height: "105px" }} />
          <p className="core_img_text">
            TEAM <br />
            WORK
          </p>
        </div>

        <div className="core_purpose_inner_flex">
          <img src={images.core_img5} alt="" style={{ height: "105px" }} />
          <p className="core_img_text">
            RESPECT <br />
            FOR ALL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Core_Values_Purpose;
