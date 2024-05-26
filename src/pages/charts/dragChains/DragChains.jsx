import React, { useEffect } from "react";
import "./DragChains.css";
 import { Helmet } from "react-helmet"; 
import images from "../../../constants/images";

const DragChains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Drag Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}
        >
          <h2 className="prodpage_thought_inner">Drag Chains</h2>
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
              src={images.DragChain_Image}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.DragChain_Graph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>
        {/*  */}
        <div className="table_main">
          <table width="500">
            <tbody>
              <tr>
                <th>CHAIN NO.</th>
                <th>PITCH</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>E</th>
                <th>F</th>
                <th>AVERAGE BREAKING LOAD&nbsp; (KGF)</th>
              </tr>
              <tr>
                <td>500</td>
                <td>142.00</td>
                <td>19.00</td>
                <td>42.00</td>
                <td>50.00</td>
                <td>50.00</td>
                <td>11.00</td>
                <td>25.00</td>
                <td>25000</td>
              </tr>
              <tr>
                <td>511</td>
                <td>142.00</td>
                <td>19.00</td>
                <td>44.00</td>
                <td>50.00</td>
                <td>50.00</td>
                <td>14.00</td>
                <td>25.00</td>
                <td>25000</td>
              </tr>
              <tr>
                <td>515</td>
                <td>142.00</td>
                <td>30.00</td>
                <td>63.00</td>
                <td>50.00</td>
                <td>50.00</td>
                <td>18.00</td>
                <td>25.00</td>
                <td>35000</td>
              </tr>
              <tr>
                <td>MI545</td>
                <td>150.00</td>
                <td>32.00</td>
                <td>61.00</td>
                <td>60.00</td>
                <td>50.00</td>
                <td>20.00</td>
                <td>28.00</td>
                <td>45000</td>
              </tr>
              <tr>
                <td>960</td>
                <td>229.00</td>
                <td>32.00</td>
                <td>65.00</td>
                <td>70.00</td>
                <td>55.00</td>
                <td>22.00</td>
                <td>32.00</td>
                <td>60000</td>
              </tr>
              <tr>
                <td>507</td>
                <td>260.00</td>
                <td>35.00</td>
                <td>77.00</td>
                <td>78.00</td>
                <td>76.00</td>
                <td>22.00</td>
                <td>32.00</td>
                <td>60000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DragChains;
