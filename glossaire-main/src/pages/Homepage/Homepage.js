import "./App.css";
import Translate from "./Components/Translate";
import PhraseTranslate from "./Components/PhraseTranslate";
import Navbar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom"
function HomePage() {
  return (
    //   <Route exact path="/admin"
    //   element={
    //     <PrivateRoute>
    //       <Dashboard />
    //     </PrivateRoute>
    //   }
    // />
    <div className="App">

      <Navbar />
      <Routes>

        <Route exact path="/"
          element={
            <div className="Translate">
              <Translate />
            </div>
          }
        />
        <Route exact path="/Translate"
          element={
            <div className="Translate">
              <PhraseTranslate />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

{/* <PhraseTranslate /> */ }
export default HomePage;
