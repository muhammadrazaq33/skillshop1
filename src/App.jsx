import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Footer from "./Components/Footer";
import GoogleWorkSpace from "./GoogleWorkSpace/GoogleWorkSpace";
import ConsolidateFiles from "./ConsolidateFiles/ConsolidateFiles";
import ManageFile from "./ManageFile/ManageFile";
import Collaboration from "./CollaborationWithDocs/Collaboration";
import OrganizeSearchGmail from "./OrganizeSearchGmail/OrganizeSearchGmail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/GoogleWorkspace" element={<GoogleWorkSpace />}></Route>
          <Route
            path="/ConsolidateFiles"
            element={<ConsolidateFiles />}
          ></Route>
          <Route path="/ManageFile" element={<ManageFile />} />
          <Route path="/Collaboration" element={<Collaboration />} />
          <Route
            path="/OrganizeSearchGmail"
            element={<OrganizeSearchGmail />}
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
