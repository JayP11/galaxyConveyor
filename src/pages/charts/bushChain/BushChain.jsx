import React, { useEffect } from "react";
import "./BushChain.css";
import { Helmet } from "react-helmet";
import images from "../../../constants/images";

const BushChain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Bush Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}>
          <h2 className="prodpage_thought_inner">Bush Chains</h2>
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
              src={images.Bushed_Chain_Image}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.BushedChain_Graph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>

        {/*  */}
        <div className="table_main">
          <table width="419">
            <tbody>
              <tr>
                <th>CHAIN NO.</th>
                <th>PITCH</th>
                <th>A</th>
                <th>B</th>
                <th>E</th>
                <th>G</th>
                <th>H</th>
                <th>T</th>
                <th>AVERAGE BREAKING LOAD&nbsp; (KGF)</th>
              </tr>
              <tr>
                <td>78</td>
                <td>66.27</td>
                <td>12.70</td>
                <td>67.00</td>
                <td>28.70</td>
                <td>28.70</td>
                <td>22.40</td>
                <td>6.40</td>
                <td>10900</td>
              </tr>
              <tr>
                <td>82</td>
                <td>78.11</td>
                <td>12.70</td>
                <td>73.00</td>
                <td>31.80</td>
                <td>38.10</td>
                <td>31.80</td>
                <td>6.40</td>
                <td>11800</td>
              </tr>
              <tr>
                <td>124</td>
                <td>101.60</td>
                <td>14.10</td>
                <td>95.00</td>
                <td>54.10</td>
                <td>38.10</td>
                <td>25.40</td>
                <td>9.14</td>
                <td>20880</td>
              </tr>
              <tr>
                <td>844</td>
                <td>152.40</td>
                <td>19.05</td>
                <td>131.80</td>
                <td>63.50</td>
                <td>50.80</td>
                <td>30.20</td>
                <td>12.70</td>
                <td>31780</td>
              </tr>
              <tr>
                <td>132</td>
                <td>153.67</td>
                <td>18.50</td>
                <td>145.00</td>
                <td>85.10</td>
                <td>50.80</td>
                <td>44.50</td>
                <td>12.70</td>
                <td>35000</td>
              </tr>
              <tr>
                <td>2530</td>
                <td>250.00</td>
                <td>25.00</td>
                <td>104.00</td>
                <td>45.00</td>
                <td>65.00</td>
                <td>40.00</td>
                <td>10.00</td>
                <td>30000</td>
              </tr>
              <tr>
                <td>2535</td>
                <td>250.00</td>
                <td>26.00</td>
                <td>112.00</td>
                <td>45.00</td>
                <td>65.00</td>
                <td>40.00</td>
                <td>12.00</td>
                <td>35000</td>
              </tr>
              <tr>
                <td>2545</td>
                <td>250.00</td>
                <td>26.00</td>
                <td>112.00</td>
                <td>45.00</td>
                <td>70.00</td>
                <td>40.00</td>
                <td>12.00</td>
                <td>45000</td>
              </tr>
              <tr>
                <td>2550</td>
                <td>250.00</td>
                <td>27.00</td>
                <td>104.00</td>
                <td>45.00</td>
                <td>80.00</td>
                <td>40.00</td>
                <td>10.00</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>2532</td>
                <td>250.00</td>
                <td>32.00</td>
                <td>150.00</td>
                <td>65.00</td>
                <td>75.00</td>
                <td>45.00</td>
                <td>14.00</td>
                <td>32000</td>
              </tr>
              <tr>
                <td>2540</td>
                <td>250.00</td>
                <td>36.00</td>
                <td>160.00</td>
                <td>65.00</td>
                <td>80.00</td>
                <td>50.00</td>
                <td>16.00</td>
                <td>40000</td>
              </tr>
              <tr>
                <td>2568</td>
                <td>250.00</td>
                <td>36.00</td>
                <td>175.00</td>
                <td>80.00</td>
                <td>100.00</td>
                <td>54.00</td>
                <td>16.00</td>
                <td>68000</td>
              </tr>
              <tr>
                <td>2570</td>
                <td>250.00</td>
                <td>38.00</td>
                <td>156.00</td>
                <td>75.00</td>
                <td>100.00</td>
                <td>56.00</td>
                <td>14.00</td>
                <td>70000</td>
              </tr>
              <tr>
                <td>25100</td>
                <td>250.00</td>
                <td>38.00</td>
                <td>180.00</td>
                <td>75.00</td>
                <td>100.00</td>
                <td>56.00</td>
                <td>20.00</td>
                <td>100000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BushChain;
