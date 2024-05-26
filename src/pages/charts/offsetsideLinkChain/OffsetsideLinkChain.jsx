import React, { useEffect } from "react";
import "./OffsetsideLinkChain.css";
 import { Helmet } from "react-helmet"; 
 
const OffsetsideLinkChain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Offset Side Link Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}>
          <h2 className="prodpage_thought_inner">Offset Side Link Chains</h2>
          {/* <span>
            TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp;
            BRITISH STANDARD &nbsp;- &nbsp;SINGLE STRAND
            &nbsp;&nbsp;&nbsp;&nbsp; [As per BS 228 / DIN 8187 / IS 2403 / ISO
            606]
          </span> */}
        </div>

        {/*  */}
        <div className="table_main">
          <table border="0" cellspacing="0" cellpadding="0">
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
                  H
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
                <td>3006</td>
                <td class="et13">76.20</td>
                <td class="et13">11.13</td>
                <td class="et13">53.60</td>
                <td class="et13">38.10</td>
                <td class="et13">25.40</td>
                <td class="et13">28.00</td>
                <td class="et13">15.88</td>
                <td class="et13">5.00</td>
                <td class="et19">5900</td>
                <td class="et19">7200</td>
              </tr>

              <tr>
                <td>4006</td>
                <td class="et13">101.60</td>
                <td class="et13">11.13</td>
                <td class="et13">53.60</td>
                <td class="et13">38.10</td>
                <td class="et13">25.40</td>
                <td class="et13">28.00</td>
                <td class="et13">15.88</td>
                <td class="et13">5.00</td>
                <td class="et19">5900</td>
                <td class="et19">7200</td>
              </tr>
              <tr>
                <td>4108</td>
                <td class="et13">101.60</td>
                <td class="et13">12.70</td>
                <td class="et13">57.70</td>
                <td class="et13">38.10</td>
                <td class="et13">23.10</td>
                <td class="et13">32.00</td>
                <td class="et13">18.24</td>
                <td class="et13">6.00</td>
                <td class="et19">8625</td>
                <td class="et19">10000</td>
              </tr>
              <tr>
                <td>4212</td>
                <td class="et13">101.60</td>
                <td class="et13">15.88</td>
                <td class="et13">81.80</td>
                <td class="et13">44.50</td>
                <td class="et13">32.50</td>
                <td class="et13">38.00</td>
                <td class="et13">23.10</td>
                <td class="et13">8.00</td>
                <td class="et19">12710</td>
                <td class="et19">14300</td>
              </tr>
              <tr>
                <td>4312</td>
                <td class="et13">101.60</td>
                <td class="et13">15.88</td>
                <td class="et13">88.70</td>
                <td class="et13">57.20</td>
                <td class="et13">33.30</td>
                <td class="et13">38.00</td>
                <td class="et13">22.23</td>
                <td class="et13">10.00</td>
                <td class="et19">12710</td>
                <td class="et19">20000</td>
              </tr>
              <tr>
                <td>1532</td>
                <td class="et13">150.00</td>
                <td class="et13">25.00</td>
                <td class="et13">109.00</td>
                <td class="et13">75.00</td>
                <td class="et13">37.00</td>
                <td class="et13">60.00</td>
                <td class="et13">33.00</td>
                <td class="et13">12.00</td>
                <td class="et19">32000</td>
                <td class="et19">40000</td>
              </tr>
              <tr>
                <td>1530</td>
                <td class="et13">150.00</td>
                <td class="et13">22.74</td>
                <td class="et13">98.00</td>
                <td class="et13">75.00</td>
                <td class="et13">37.00</td>
                <td class="et13">60.00</td>
                <td class="et13">31.00</td>
                <td class="et13">10.00</td>
                <td class="et19">30000</td>
                <td class="et19">40000</td>
              </tr>
              <tr>
                <td>1540</td>
                <td class="et13">150.00</td>
                <td class="et13">25.00</td>
                <td class="et13">98.00</td>
                <td class="et13">75.00</td>
                <td class="et13">37.00</td>
                <td class="et13">65.00</td>
                <td class="et13">33.00</td>
                <td class="et13">12.00</td>
                <td class="et19">40000</td>
                <td class="et19">50000</td>
              </tr>
              <tr>
                <td>6008</td>
                <td class="et13">152.40</td>
                <td class="et13">11.13</td>
                <td class="et13">63.00</td>
                <td class="et13">50.80</td>
                <td class="et13">28.70</td>
                <td class="et13">32.00</td>
                <td class="et13">15.88</td>
                <td class="et13">6.00</td>
                <td class="et19">8170</td>
                <td class="et19">11600</td>
              </tr>
              <tr>
                <td>6112</td>
                <td class="et13">152.40</td>
                <td class="et13">15.88</td>
                <td class="et13">81.80</td>
                <td class="et13">50.80</td>
                <td class="et13">32.50</td>
                <td class="et13">38.00</td>
                <td class="et13">23.10</td>
                <td class="et13">8.00</td>
                <td class="et19">12710</td>
                <td class="et19">14300</td>
              </tr>
              <tr>
                <td>6221</td>
                <td class="et13">152.40</td>
                <td class="et13">15.88</td>
                <td class="et13">88.10</td>
                <td class="et13">76.20</td>
                <td class="et13">31.80</td>
                <td class="et13">50.00</td>
                <td class="et13">23.90</td>
                <td class="et13">10.00</td>
                <td class="et19">21000</td>
                <td class="et19">31300</td>
              </tr>
              <tr>
                <td>6330</td>
                <td class="et13">152.40</td>
                <td class="et13">22.74</td>
                <td class="et13">98.00</td>
                <td class="et13">76.20</td>
                <td class="et13">37.00</td>
                <td class="et13">60.00</td>
                <td class="et13">31.00</td>
                <td class="et13">10.00</td>
                <td class="et19">30000</td>
                <td class="et19">40000</td>
              </tr>
              <tr>
                <td>6440</td>
                <td class="et13">152.40</td>
                <td class="et13">25.00</td>
                <td class="et13">98.00</td>
                <td class="et13">76.20</td>
                <td class="et13">37.00</td>
                <td class="et13">65.00</td>
                <td class="et13">33.00</td>
                <td class="et13">12.00</td>
                <td class="et19">40000</td>
                <td class="et19">50000</td>
              </tr>
              <tr>
                <td>9035</td>
                <td class="et13">228.60</td>
                <td class="et13">25.40</td>
                <td class="et13">143.50</td>
                <td class="et13">76.20</td>
                <td class="et13">66.80</td>
                <td class="et13">65.00</td>
                <td class="et13">38.61</td>
                <td class="et13">12.00</td>
                <td class="et19">35000</td>
                <td class="et19">50000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OffsetsideLinkChain;
