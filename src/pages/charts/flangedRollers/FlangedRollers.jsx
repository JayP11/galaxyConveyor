import React, { useEffect, useState } from "react";
import "./FlangedRollers.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const FlangedRollers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Flanged Rollers Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}>
          <h2 className="prodpage_thought_inner">Flanged Rollers Chains</h2>
          {/* <span>
            TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp;
            BRITISH STANDARD &nbsp;- &nbsp;SINGLE STRAND
            &nbsp;&nbsp;&nbsp;&nbsp; [As per BS 228 / DIN 8187 / IS 2403 / ISO
            606]
          </span> */}
        </div>

        {/*  */}
        <div className="table_main">
          <table width="565">
            <tbody>
              <tr>
                <th rowspan="2" width="49">
                  CHAIN NO.
                </th>
                <th rowspan="2" width="51">
                  PITCH
                </th>
                <th rowspan="2" width="34">
                  A
                </th>
                <th rowspan="2" width="40">
                  B
                </th>
                <th rowspan="2" width="40">
                  D
                </th>
                <th rowspan="2" width="34">
                  E
                </th>
                <th rowspan="2" width="34">
                  F
                </th>
                <th rowspan="2" width="34">
                  G
                </th>
                <th rowspan="2" width="34">
                  H
                </th>
                <th rowspan="2" width="28">
                  L
                </th>
                <th rowspan="2" width="34">
                  M
                </th>
                <th rowspan="2" width="28">
                  T
                </th>
                <th colspan="2" width="118">
                  AVERAGE BREAKING LOAD&nbsp; (KGF)
                </th>
              </tr>
              <tr>
                <th>NORMAL</th>
                <th>H-SERIES</th>
              </tr>
              <tr>
                <td>6512</td>
                <td>152.40</td>
                <td>15.88</td>
                <td>84.80</td>
                <td>76.20</td>
                <td>41.40</td>
                <td>50.80</td>
                <td>28.70</td>
                <td>23.90</td>
                <td>4.80</td>
                <td>10.40</td>
                <td>6.40</td>
                <td>11800</td>
                <td>20000</td>
              </tr>
              <tr>
                <td>9018</td>
                <td>228.60</td>
                <td>19.05</td>
                <td>107.20</td>
                <td>101.60</td>
                <td>50.80</td>
                <td>50.80</td>
                <td>31.80</td>
                <td>28.70</td>
                <td>3.30</td>
                <td>11.20</td>
                <td>9.70</td>
                <td>18610</td>
                <td>24000</td>
              </tr>
              <tr>
                <td>12040</td>
                <td>304.80</td>
                <td>19.05</td>
                <td>143.70</td>
                <td>101.60</td>
                <td>50.80</td>
                <td>50.80</td>
                <td>31.80</td>
                <td>28.70</td>
                <td>4.10</td>
                <td>10.40</td>
                <td>9.70</td>
                <td>18610</td>
                <td>40000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FlangedRollers;

