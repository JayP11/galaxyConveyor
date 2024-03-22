import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import ContactUsPage from "./pages/contactuspage/ContactUsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import RollerChains from "./pages/rollerChains/RollerChains";
import LeafChains from "./pages/leafChains/LeafChains";
import ExtendedPitchChains from "./pages/extendedPitchChains/ExtendedPitchChains";
import AttachmentChains from "./pages/attachmentChains/AttachmentChains";
import AgricultureChains from "./pages/agricultureChains/AgricultureChains";
import ProductPage from "./pages/productPage/ProductPage";
import FooterDown from "./common/footerDown/FooterDown";
import ChartDemo from "./pages/chartDemo/ChartDemo";
import SmallRollerChains from "./pages/charts/smallRollerChains/SmallRollerChains";
import FlangedRollers from "./pages/charts/flangedRollers/FlangedRollers";
import BushChain from "./pages/charts/bushChain/BushChain";
import FlowConveyor from "./pages/charts/flowConveyor/FlowConveyor";
import WeldedChains from "./pages/charts/weldedChains/WeldedChains";
import HollowBearingPinChain from "./pages/charts/hollowBearingPinChain/HollowBearingPinChain";
import SolidBearingPinChain from "./pages/charts/solidBearingPinChain/SolidBearingPinChain";
import RivetType from "./pages/charts/rivetType/RivetType";
import DetachableType from "./pages/charts/detachableType/DetachableType";
import RivetlessType from "./pages/charts/rivetlessType/RivetlessType";
import DragChains from "./pages/charts/dragChains/DragChains";
import OffsetsideLinkChain from "./pages/charts/offsetsideLinkChain/OffsetsideLinkChain";

function App() {
  return (
    <BrowserRouter basename="galaxyconveyorfront">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="/Contact" element={<ContactUsPage />}></Route>
        <Route path="/ProductPage" element={<ProductPage />}></Route>
        <Route path="/RollerChains" element={<RollerChains />}></Route>
        <Route
          path="/ExtendedPitchChains"
          element={<ExtendedPitchChains />}></Route>
        <Route path="/LeafChains" element={<LeafChains />}></Route>
        <Route path="/AttachmentChains" element={<AttachmentChains />}></Route>
        <Route
          path="/AgricultureChains"
          element={<AgricultureChains />}></Route>
        <Route path="/ChartDemo" element={<ChartDemo />}></Route>

        <Route
          path="/SmallRollerChains"
          element={<SmallRollerChains />}></Route>
        <Route path="/FlangedRollers" element={<FlangedRollers />}></Route>
        <Route path="/BushChain" element={<BushChain />}></Route>
        <Route path="/FlowConveyor" element={<FlowConveyor />}></Route>
        <Route path="/WeldedChains" element={<WeldedChains />}></Route>
        <Route
          path="/HollowBearingPinChain"
          element={<HollowBearingPinChain />}></Route>
        <Route
          path="/SolidBearingPinChain"
          element={<SolidBearingPinChain />}></Route>
        <Route path="/RivetType" element={<RivetType />}></Route>
        <Route path="/DetachableType" element={<DetachableType />}></Route>
        <Route path="/RivetlessType" element={<RivetlessType />}></Route>
        <Route path="/DragChains" element={<DragChains />}></Route>
        <Route
          path="/OffsetsideLinkChain"
          element={<OffsetsideLinkChain />}></Route>
      </Routes>
      <Footer />
      <FooterDown />
    </BrowserRouter>
  );
}

export default App;
