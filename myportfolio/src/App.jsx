
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./header/header";
const App = () => {
  return (
    <Router>
      <div className="App">

        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;