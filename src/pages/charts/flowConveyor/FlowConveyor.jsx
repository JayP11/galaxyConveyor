import React, { useEffect, useState } from "react";
import "./FlowConveyor.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const FlowConveyor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Flow Conveyor Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}>
          <h2 className="prodpage_thought_inner">Flow Conveyor Chains</h2>
          {/* <span>
            TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp;
            BRITISH STANDARD &nbsp;- &nbsp;SINGLE STRAND
            &nbsp;&nbsp;&nbsp;&nbsp; [As per BS 228 / DIN 8187 / IS 2403 / ISO
            606]
          </span> */}
        </div>

        {/*  */}
        <div className="table_main">
          <table width="622">
            <tbody>
              <tr>
                <th rowspan="2" width="43">
                  CHAIN NO.
                </th>
                <th rowspan="2" width="40">
                  PITCH
                </th>
                <th rowspan="2" width="34">
                  A
                </th>
                <th rowspan="2" width="40">
                  L
                </th>
                <th rowspan="2" width="34">
                  D
                </th>
                <th rowspan="2" width="34">
                  E
                </th>
                <th rowspan="2" width="34">
                  F
                </th>
                <th rowspan="2" width="19">
                  T1
                </th>
                <th rowspan="2" width="19">
                  T2
                </th>
                <th colspan="2" width="177">
                  SWEEP
                </th>
                <th colspan="2" width="143">
                  BREAKING LOAD&nbsp; (KGF)
                </th>
              </tr>
              <tr>
                <th>HORIZONTAL 'X'</th>
                <th>VERTICAL 'S'</th>
                <th>NORMAL</th>
                <th width="65">H-SERIES</th>
              </tr>
              <tr>
                <td>3108</td>
                <td>76.20</td>
                <td>14.00</td>
                <td>55.50</td>
                <td>24.60</td>
                <td>19.00</td>
                <td>40.00</td>
                <td>6</td>
                <td>6</td>
                <td>185</td>
                <td>46</td>
                <td>8300</td>
                <td>12300</td>
              </tr>
              <tr>
                <td>4106</td>
                <td>101.60</td>
                <td>14.60</td>
                <td>56.00</td>
                <td>25.40</td>
                <td>22.00</td>
                <td>40.00</td>
                <td>5</td>
                <td>8</td>
                <td>190</td>
                <td>47</td>
                <td>6500</td>
                <td>10200</td>
              </tr>
              <tr>
                <td>M510</td>
                <td>125.00</td>
                <td>16.00</td>
                <td>83.00</td>
                <td>25.00</td>
                <td>28.00</td>
                <td>40.00</td>
                <td>6</td>
                <td>8</td>
                <td>385</td>
                <td>90</td>
                <td>10200</td>
                <td>15900</td>
              </tr>
              <tr>
                <td>M508</td>
                <td>125.00</td>
                <td>14.60</td>
                <td>80.00</td>
                <td>25.40</td>
                <td>27.50</td>
                <td>40.00</td>
                <td>6</td>
                <td>8</td>
                <td>276</td>
                <td>69</td>
                <td>7800</td>
                <td>12200</td>
              </tr>
              <tr>
                <td>M510</td>
                <td>125.00</td>
                <td>16.00</td>
                <td>91.00</td>
                <td>31.75</td>
                <td>35.60</td>
                <td>50.00</td>
                <td>6</td>
                <td>8</td>
                <td>476</td>
                <td>94</td>
                <td>9800</td>
                <td>15300</td>
              </tr>
              <tr>
                <td>M513</td>
                <td>125.00</td>
                <td>19.85</td>
                <td>97.00</td>
                <td>31.75</td>
                <td>34.00</td>
                <td>50.00</td>
                <td>8</td>
                <td>8</td>
                <td>482</td>
                <td>120</td>
                <td>13000</td>
                <td>20400</td>
              </tr>
              <tr>
                <td>M521</td>
                <td>125.00</td>
                <td>22.00</td>
                <td>97.00</td>
                <td>35.00</td>
                <td>34.00</td>
                <td>65.00</td>
                <td>8</td>
                <td>10</td>
                <td>482</td>
                <td>120</td>
                <td>21600</td>
                <td>30400</td>
              </tr>
              <tr>
                <td>507</td>
                <td>127.00</td>
                <td>14.60</td>
                <td>56.00</td>
                <td>25.00</td>
                <td>22.00</td>
                <td>40.00</td>
                <td>5</td>
                <td>8</td>
                <td>315</td>
                <td>78</td>
                <td>6700</td>
                <td>10500</td>
              </tr>
              <tr>
                <td>1522</td>
                <td>150.00</td>
                <td>25.00</td>
                <td>115.00</td>
                <td>49.00</td>
                <td>43.00</td>
                <td>70.00</td>
                <td>12</td>
                <td>12</td>
                <td>580</td>
                <td>150</td>
                <td>22600</td>
                <td>35200</td>
              </tr>
              <tr>
                <td>1621</td>
                <td>160.00</td>
                <td>21.00</td>
                <td>95.00</td>
                <td>30.00</td>
                <td>40.00</td>
                <td>60.00</td>
                <td>8</td>
                <td>10</td>
                <td>315</td>
                <td>78</td>
                <td>21600</td>
                <td>33700</td>
              </tr>
              <tr>
                <td>1616</td>
                <td>160.00</td>
                <td>21.00</td>
                <td>95.00</td>
                <td>30.00</td>
                <td>48.00</td>
                <td>60.00</td>
                <td>6</td>
                <td>8</td>
                <td>315</td>
                <td>100</td>
                <td>16200</td>
                <td>25700</td>
              </tr>
              <tr>
                <td>M830</td>
                <td>200.00</td>
                <td>25.00</td>
                <td>116.00</td>
                <td>36.00</td>
                <td>48.00</td>
                <td>70.00</td>
                <td>10</td>
                <td>10</td>
                <td>600</td>
                <td>150</td>
                <td>30600</td>
                <td>47600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FlowConveyor;