import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import CreateLink from "./pages/CreateLink";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Home />} />
      <Route path="/create-link-invitation" element={<CreateLink />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
