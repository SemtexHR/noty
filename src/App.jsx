import "./Style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import Todo from "./Pages/Todos";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Layout from "./components/TopBar/Layout";
import { PocketProvider } from "./context/PocketContext";
import { RequireAuth } from "./context/RequireAuth";

function App() {
  return (
    <PocketProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<RequireAuth />}>
              <Route path="/home" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/todo" element={<Todo />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </PocketProvider>
  );
}

export default App;
