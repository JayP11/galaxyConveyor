import React, { useEffect  } from "react";
import "./SmallRollerChains.css";
 import { Helmet } from "react-helmet";
 import images from "../../../constants/images";

const SmallRollerChains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Small Roller Chains</title>
      </Helmet>

      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}
        >
          <h2 className="prodpage_thought_inner">Small Roller Chains</h2>
        </div>
        <div className="chart_chainGraph_imgs_main">
          <div>
            <img
              src={images.SmallRollerChain_Image}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.SmallRollerChain_Graph}
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
                <th>A</th>
                <th>B</th>
                <th>D</th>
                <th>E</th>
                <th>F</th>
                <th>T</th>
                <th>H</th>
                <th>AVERAGE BREAKING LOAD&nbsp; (KGF)</th>
              </tr>
              <tr>
                <td>620</td>
                <td>42.01</td>
                <td>9.53</td>
                <td>49.00</td>
                <td>22.40</td>
                <td>25.40</td>
                <td>28.00</td>
                <td>3.10</td>
                <td>14.30</td>
                <td>5100</td>
              </tr>
              <tr>
                <td>622</td>
                <td>42.01</td>
                <td>11.13</td>
                <td>56.00</td>
                <td>22.40</td>
                <td>25.40</td>
                <td>28.00</td>
                <td>5.00</td>
                <td>15.88</td>
                <td>9080</td>
              </tr>
              <tr>
                <td>388</td>
                <td>66.27</td>
                <td>10.87</td>
                <td>55.70</td>
                <td>22.40</td>
                <td>25.40</td>
                <td>28.00</td>
                <td>5.00</td>
                <td>15.88</td>
                <td>10900</td>
              </tr>
              <tr>
                <td>881</td>
                <td>66.27</td>
                <td>11.13</td>
                <td>56.90</td>
                <td>22.40</td>
                <td>28.70</td>
                <td>28.00</td>
                <td>5.00</td>
                <td>15.88</td>
                <td>9080</td>
              </tr>
              <tr>
                <td>882</td>
                <td>66.27</td>
                <td>11.13</td>
                <td>63.00</td>
                <td>22.40</td>
                <td>28.70</td>
                <td>28.00</td>
                <td>6.00</td>
                <td>15.88</td>
                <td>11800</td>
              </tr>
              <tr>
                <td>2010</td>
                <td>63.50</td>
                <td>15.82</td>
                <td>84.60</td>
                <td>31.80</td>
                <td>38.10</td>
                <td>45.00</td>
                <td>8.00</td>
                <td>22.50</td>
                <td>23500</td>
              </tr>
              <tr>
                <td>3200</td>
                <td>63.50</td>
                <td>19.71</td>
                <td>88.20</td>
                <td>39.60</td>
                <td>39.10</td>
                <td>55.00</td>
                <td>8.00</td>
                <td>22.50</td>
                <td>35000</td>
              </tr>
              <tr>
                <td>040</td>
                <td>78.11</td>
                <td>15.88</td>
                <td>84.60</td>
                <td>31.80</td>
                <td>38.10</td>
                <td>38.00</td>
                <td>8.00</td>
                <td>22.50</td>
                <td>12710</td>
              </tr>
              <tr>
                <td>1031</td>
                <td>78.11</td>
                <td>15.88</td>
                <td>84.60</td>
                <td>31.80</td>
                <td>38.10</td>
                <td>38.00</td>
                <td>8.00</td>
                <td>22.50</td>
                <td>20000</td>
              </tr>
              <tr>
                <td>031</td>
                <td>78.11</td>
                <td>15.88</td>
                <td>100.00</td>
                <td>31.80</td>
                <td>38.10</td>
                <td>45.00</td>
                <td>10.00</td>
                <td>22.50</td>
                <td>22500</td>
              </tr>
              <tr>
                <td>032</td>
                <td>78.11</td>
                <td>15.88</td>
                <td>100.00</td>
                <td>31.80</td>
                <td>38.10</td>
                <td>45.00</td>
                <td>10.00</td>
                <td>22.50</td>
                <td>34050</td>
              </tr>
              <tr>
                <td>4824</td>
                <td>152.40</td>
                <td>38.10</td>
                <td>184.00</td>
                <td>76.20</td>
                <td>76.20</td>
                <td>101.60</td>
                <td>18.50</td>
                <td>50.80</td>
                <td>176000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SmallRollerChains;
