import React, { useEffect, useState } from "react";
import "./WeldedChains.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const WeldedChains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Welded Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}
        >
          <h2 className="prodpage_thought_inner">Welded Chains</h2>
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
              src={images.WeldedBushChain_Img}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.WeldedBushChain_Graph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>
        {/*  */}
        <div className="table_main">
          <table width="466">
            <tbody>
              <tr>
                <th>CHAIN NO.</th>
                <th>PITCH</th>
                <th>A</th>
                <th>B</th>
                <th>D</th>
                <th>E</th>
                <th>F</th>
                <th>T</th>
                <th>W</th>
                <th colspan="2" width="117">
                  AVERAGE BREAKING LOAD&nbsp; (KGF)
                </th>
              </tr>
              <tr>
                <td>W78</td>
                <td>66.27</td>
                <td>12.70</td>
                <td>78.70</td>
                <td>22.40</td>
                <td>28.70</td>
                <td>28.70</td>
                <td>6.40</td>
                <td>51.10</td>
                <td>10900</td>
                <td>13620</td>
              </tr>
              <tr>
                <td>W82</td>
                <td>78.11</td>
                <td>14.30</td>
                <td>85.80</td>
                <td>31.00</td>
                <td>31.80</td>
                <td>31.80</td>
                <td>6.40</td>
                <td>57.40</td>
                <td>11800</td>
                <td>15890</td>
              </tr>
              <tr>
                <td>W124</td>
                <td>101.60</td>
                <td>19.05</td>
                <td>101.50</td>
                <td>36.60</td>
                <td>41.40</td>
                <td>38.10</td>
                <td>9.14</td>
                <td>71.60</td>
                <td>20880</td>
                <td>27240</td>
              </tr>
              <tr>
                <td>W111</td>
                <td>120.90</td>
                <td>19.05</td>
                <td>122.50</td>
                <td>36.60</td>
                <td>41.40</td>
                <td>38.10</td>
                <td>9.70</td>
                <td>85.90</td>
                <td>20880</td>
                <td>27240</td>
              </tr>
              <tr>
                <td>W132</td>
                <td>153.67</td>
                <td>25.40</td>
                <td>161.80</td>
                <td>44.50</td>
                <td>76.20</td>
                <td>50.80</td>
                <td>12.70</td>
                <td>111.80</td>
                <td>38140</td>
                <td>45400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WeldedChains;
