import React, { useEffect } from "react";
import "./RivetType.css";
import { Helmet } from "react-helmet";
import images from "../../../constants/images";

const RivetType = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Rivet Type Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}>
          <h2 className="prodpage_thought_inner">Rivet Type Chains</h2>
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
              src={images.RivetTypeBottlingChain_Image}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.RivetTypeBottlingChain_Graph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>
        {/*  */}
        <div className="table_main">
          <table width="412">
            <tbody>
              <tr>
                <th>CHAIN NO.</th>
                <th>PITCH&nbsp; P</th>
                <th>E</th>
                <th>D</th>
                <th>W</th>
                <th>F</th>
                <th>T</th>
                <th>BREAKING LOAD&nbsp; (KGF)</th>
              </tr>
              <tr>
                <td>11455</td>
                <td>63.5</td>
                <td>14.0</td>
                <td>30.0</td>
                <td>44.0</td>
                <td>32.0</td>
                <td>6.0</td>
                <td>5500</td>
              </tr>
              <tr>
                <td>11465</td>
                <td>63.5</td>
                <td>14.0</td>
                <td>30.0</td>
                <td>44.0</td>
                <td>32.0</td>
                <td>6.0</td>
                <td>6500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RivetType;
