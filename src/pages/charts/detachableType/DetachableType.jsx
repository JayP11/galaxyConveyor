import React, { useEffect, useState } from "react";
import "./DetachableType.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const DetachableType = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Detachable Type Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}>
          <h2 className="prodpage_thought_inner">Detachable Type Chains</h2>
          {/* <span>
            TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp;
            BRITISH STANDARD &nbsp;- &nbsp;SINGLE STRAND
            &nbsp;&nbsp;&nbsp;&nbsp; [As per BS 228 / DIN 8187 / IS 2403 / ISO
            606]
          </span> */}
        </div>

        {/*  */}
        <div className="table_main">
          <table width="406">
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
                <td>12665</td>
                <td>63.5</td>
                <td>13.0</td>
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

export default DetachableType;
