import React, { useEffect, useState } from "react";
import "./RivetlessType.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import images from "../../../constants/images";

const RivetlessType = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Rivetless Type Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}
        >
          <h2 className="prodpage_thought_inner">Rivetless Type Chains</h2>
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
              src={images.ForgedRivetlessChain_Image}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.ForgedRivetlessChain_Graph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>

        {/*  */}
        <div className="table_main">
          <table border="0" width="494" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <th>CHAIN NO.</th>
                <th>PITCH</th>
                <th>A</th>
                <th>C</th>
                <th>R</th>
                <th>F</th>
                <th>G</th>
                <th>H</th>
                <th>K</th>
                <th>T</th>
                <th>AVERAGE BREAKING LOAD (KGF)</th>
              </tr>
              <tr>
                <td>698</td>
                <td class="et7">153.19</td>
                <td class="et7">28.58</td>
                <td class="et7">95.30</td>
                <td class="et7">39.60</td>
                <td class="et7">68.30</td>
                <td class="et7">25.40</td>
                <td class="et7">65.80</td>
                <td class="et7">31.80</td>
                <td class="et7">14.20</td>
                <td class="et8">59000</td>
              </tr>
              <tr>
                <td>S698</td>
                <td class="et7">153.19</td>
                <td class="et7">28.58</td>
                <td class="et7">82.60</td>
                <td class="et7">39.60</td>
                <td class="et7">68.30</td>
                <td class="et7">25.40</td>
                <td class="et7">63.50</td>
                <td class="et7">31.80</td>
                <td class="et7">12.70</td>
                <td class="et8">59000</td>
              </tr>
              <tr>
                <td>9118</td>
                <td class="et7">229.39</td>
                <td class="et7">34.93</td>
                <td class="et7">124.00</td>
                <td class="et7">50.00</td>
                <td class="et7">77.70</td>
                <td class="et7">33.30</td>
                <td class="et7">76.20</td>
                <td class="et7">38.10</td>
                <td class="et7">19.80</td>
                <td class="et8">90000</td>
              </tr>
              <tr>
                <td>S9118</td>
                <td class="et7">229.39</td>
                <td class="et7">34.93</td>
                <td class="et7">111.30</td>
                <td class="et7">50.00</td>
                <td class="et7">77.70</td>
                <td class="et7">33.30</td>
                <td class="et7">76.20</td>
                <td class="et7">38.10</td>
                <td class="et7">19.10</td>
                <td class="et8">90000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RivetlessType;
