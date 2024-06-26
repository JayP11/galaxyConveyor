import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProductPage = () => {
  const [getchild, setchild] = useState([]);
  const [getColor, setColor] = useState(1);
  const [getcondition, SetCondition] = useState(false);

  // const category = [
  //   {
  //     id: 1,
  //     name: "Small Roller Chains",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Small Roller Chains",
  //         img: require("../../assets/RollerChain1.png"),
  //         // category: "British Standard",
  //         link: "/SmallRollerChains",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Flanged Rollers",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Flanged Rollers",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/FlangedRollers",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Bushed Chains",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Bushed Chains",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/BushChain",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Flow Conveyor Chains",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Flow Conveyo Chains",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/FlowConveyor",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Welded Bush Chains",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Welded Bush Chains",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/WeldedChains",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Hollow Bearing Pin Chain",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Hollow Bearing Pin Chain",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/HollowBearingPinChain",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     name: "Solid Bearing Pin Chain",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Solid Bearing Pin Chain",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/SolidBearingPinChain",
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     name: "Rivet Type",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Rivet Type",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/RivetType",
  //       },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     name: "Detachable Type",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Detachable Type",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/DetachableType",
  //       },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     name: "Rivetless Type",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Rivetless Type",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/RivetlessType",
  //       },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     name: "Drag Chains",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Drag Chains",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/DragChains",
  //       },
  //     ],
  //   },
  //   {
  //     id: 12,
  //     name: "Offsetside Link",
  //     list: [
  //       {
  //         id: 1,
  //         name: "Offsetside Link",
  //         img: require("../../assets/RollerChain1.png"),
  //         link: "/OffsetsideLinkChain",
  //       },
  //     ],
  //   },
  // ];

  const category = [
    {
      id: 1,
      name: "Roller Chains",
      list: [
        {
          id: 1,
          name: "Small Roller Chains",
          img: require("../../assets/SmallRoller.png"),
          // category: "British Standard",
          link: "/SmallRollerChains",
        },
        {
          id: 2,
          name: "Flanged Rollers",
          img: require("../../assets/FlangedRoller.png"),
          // category: "British Standard",
          link: "/FlangedRollers",
        },
      ],
    },
    {
      id: 2,
      name: "Bushed Chains",
      list: [
        {
          id: 1,
          name: "Bushed Chains",
          // img: require("../../assets/BushedChain.jpg"),
          img: require("../../assets/BushedChain_Image.png"),
          link: "/BushChain",
        },
      ],
    },
    {
      id: 3,
      name: "Flow Conveyor Chains",
      list: [
        {
          id: 1,
          name: "Flow Conveyor Chains",
          img: require("../../assets/FlowConveyor.png"),
          link: "/FlowConveyor",
        },
      ],
    },
    {
      id: 4,
      name: "Welded Bushed Chains",
      list: [
        {
          id: 1,
          name: "Welded Bushed Chains",
          img: require("../../assets/WeldedBush.png"),
          link: "/WeldedChains",
        },
      ],
    },
    {
      id: 5,
      name: "Hollow & Solid Pin",
      list: [
        {
          id: 1,
          name: "Hollow Bearing Pin Chain",
          img: require("../../assets/HollowPin.png"),
          link: "/HollowBearingPinChain",
        },
        {
          id: 2,
          name: "Solid Bearing Pin Chain",
          img: require("../../assets/SolidPin.png"),
          link: "/SolidBearingPinChain",
        },
      ],
    },
    {
      id: 6,
      name: "Bottling Chains",
      list: [
        {
          id: 1,
          name: "Rivet type Bottling Chains",
          img: require("../../assets/RivettedBottlingChain.png"),
          link: "/RivetType",
        },
        {
          id: 2,
          name: "Detachable type Bottling Chains",
          img: require("../../assets/DetachableBottlingChain.png"),
          link: "/DetachableType",
        },
      ],
    },
    {
      id: 7,
      name: "Forged Chains",
      list: [
        {
          id: 1,
          name: "Rivetless Type Chains",
          img: require("../../assets/Rivetless.png"),
          link: "/RivetlessType",
        },
        {
          id: 2,
          name: "Drag Chains",
          img: require("../../assets/Drag.png"),
          link: "/DragChains",
        },
      ],
    },
    // {
    //   id: 8,
    //   name: "Offsetside Link",
    //   list: [
    //     {
    //       id: 1,
    //       name: "Offsetside Link",
    //       img: require("../../assets/RollerChain1.png"),
    //       link: "/OffsetsideLinkChain",
    //     },
    //   ],
    // },
    // {
    //   id: 10,
    //   name: "Rivetless Type",
    //   list: [
    //     {
    //       id: 1,
    //       name: "Rivetless Type",
    //       img: require("../../assets/RollerChain1.png"),
    //       link: "/RivetlessType",
    //     },
    //   ],
    // },
    // {
    //   id: 11,
    //   name: "Drag Chains",
    //   list: [
    //     {
    //       id: 1,
    //       name: "Drag Chains",
    //       img: require("../../assets/RollerChain1.png"),
    //       link: "/DragChains",
    //     },
    //   ],
    // },
    // {
    //   id: 12,
    //   name: "Offsetside Link",
    //   list: [
    //     {
    //       id: 1,
    //       name: "Offsetside Link",
    //       img: require("../../assets/RollerChain1.png"),
    //       link: "/OffsetsideLinkChain",
    //     },
    //   ],
    // },
  ];

  const category1 = [
    {
      id: 1,
      name: "Small Roller Chains",
      img: require("../../assets/SmallRoller.png"),
      // category: "British Standard",
      link: "/SmallRollerChains",
    },
    {
      id: 2,
      name: "Flanged Rollers",
      img: require("../../assets/FlangedRoller.png"),
      // category: "British Standard",
      link: "/FlangedRollers",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Galaxy Conveyor Pvt. Ltd.| Products</title>
      </Helmet>
      <div style={{ background: "#F6F6F6" }}>
        <div className="prodpage_thought_main">
          <h2 className="prodpage_thought_inner">
            linking efficiency. unleashing potential.
          </h2>
        </div>
        <div
          className="industries_filter_title_main"
          style={{ padding: "1rem 0px 4px 0px" }}
        >
          {category.map((item) => {
            return (
              <div
                style={{
                  textDecoration: item.id == getColor ? "underline" : "",
                  textDecorationThickness: item.id == getColor ? "5px" : "",
                  fontWeight: item.id == getColor ? "800" : "600",
                  textDecorationColor:
                    item.id == getColor ? "var(--color_orange_shade2)" : "",
                  color:
                    item.id == getColor
                      ? "var(--color_orange_shade2)"
                      : "var(--color-gray)",
                  textUnderlineOffset: "10px",
                }}
                className="industries_filter_title"
                onClick={() => {
                  setchild(item.list);
                  setColor(item.id);
                  SetCondition(true);
                }}
              >
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <img
            src={images.Chainimg}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>

        <div className="propage_img_block">
          {getcondition === true ? (
            <>
              {getchild.map((item, index) => {
                return (
                  <Link to={item.link} style={{ cursor: "pointer" }}>
                    <div className="propage_img_main">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          background: "#fff",
                          objectFit: "fill",
                        }}
                      />
                    </div>
                    <div className="propage_name_main">
                      <div>{item.name}</div>
                    </div>
                    {/* <div className="propage_name_main">
                      <div>{item.category}</div>
                    </div> */}
                  </Link>
                );
              })}
            </>
          ) : (
            <>
              {category1.map((item, index) => {
                return (
                  <Link to={item.link} style={{ cursor: "pointer" }}>
                    <div className="propage_img_main">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          background: "#fff",
                          // background: "white",
                          // objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="propage_name_main">
                      <div>{item.name}</div>
                    </div>
                    {/* <div className="propage_name_main">
                      <div>{item.category}</div>
                    </div> */}
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;

// Roller Chains
// Bushed Chains
// Flow Conveyor Chains
// Welded Bush Chains
// Pin Chains
// Forged Chains
// Bottling Chains
