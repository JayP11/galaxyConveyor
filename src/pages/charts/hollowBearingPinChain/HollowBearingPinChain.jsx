import React, { useEffect, useState } from "react";
import "./HollowBearingPinChain.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const HollowBearingPinChain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Hollow Bearing Pin Chain</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}
        >
          <h2 className="prodpage_thought_inner">Hollow Bearing Pin Chain</h2>
          {/* <span>
            TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp;
            BRITISH STANDARD &nbsp;- &nbsp;SINGLE STRAND
            &nbsp;&nbsp;&nbsp;&nbsp; [As per BS 228 / DIN 8187 / IS 2403 / ISO
            606]
          </span> */}
        </div>
        <div className="chart_chainGraph_imgs_main">
          <div>
            <img
              src={images.HollowBearingPinChain_Img}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.HollowBearingPinChain_Graph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>

        {/*  */}
        <div className="table_main">
          <table width="455">
            <tbody>
              <tr>
                <th>CHAIN NO.</th>
                <th>PITCH</th>
                <th>W</th>
                <th>D</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>L</th>
                <th>H</th>
                <th>T1</th>
                <th>T2</th>
                <th>BREAKING LOAD&nbsp; (KGF)</th>
              </tr>
              <tr>
                <td>HP272-6</td>
                <td>50.80-152.40</td>
                <td>15.0</td>
                <td>31.8</td>
                <td>18.0</td>
                <td>14.0</td>
                <td>10.1</td>
                <td>36.5</td>
                <td>25.4</td>
                <td>3.9</td>
                <td>3.9</td>
                <td>2750</td>
              </tr>
              <tr>
                <td>HP552-9</td>
                <td>50.80-228.60</td>
                <td>19.0</td>
                <td>47.6</td>
                <td>23.6</td>
                <td>19.0</td>
                <td>13.2</td>
                <td>44.0</td>
                <td>38.1</td>
                <td>5.0</td>
                <td>3.9</td>
                <td>5500</td>
              </tr>
              <tr>
                <td>HP110-12</td>
                <td>101.60-304.80</td>
                <td>25.4</td>
                <td>66.7</td>
                <td>33.2</td>
                <td>26.9</td>
                <td>20.1</td>
                <td>57.0</td>
                <td>50.8</td>
                <td>6.6</td>
                <td>5.0</td>
                <td>11000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HollowBearingPinChain;
