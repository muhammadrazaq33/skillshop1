import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Footer from "./Components/Footer";
import GoogleWorkSpace from "./GoogleWorkSpace/GoogleWorkSpace";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/GoogleWorkspace" element={<GoogleWorkSpace />}></Route>
          {/* <Route path="/airportTransfer" element={<AirportTransfer />}></Route> */}
          {/* <Route path="/hourlyHire" element={<HourlyHire />} /> */}
          {/* <Route path="/choufferservices" element={<ChoufferServices />} /> */}
          {/* <Route path="/limousineservices" element={<LimousineServices />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
