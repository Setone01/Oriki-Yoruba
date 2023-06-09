import {
  //createBrowserRouter//,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Town from "./pages/Town/town";
import Blog from "./pages/Blog/Blog";
import Layout from "./component/Layout";
import Oriki from "./pages/Oriki/Oriki";
import OrikiPlayer from "./pages/Oriki/OrikiPlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/oriki" element={<Oriki/>} />
          <Route path="/orikiPlayer/:id" element={<OrikiPlayer/>} />
          <Route path="/town" element={<Town />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
