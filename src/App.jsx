import "./Style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import Todo from "./Pages/Todos";
import Settings from "./Pages/Settings";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Layout from "./components/TopBar/Layout";
import { PocketProvider } from "./context/PocketContext";
import { RequireAuth } from "./context/RequireAuth";
import { Client } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('681dc9ac0003c9d03f61');


const savedTheme = localStorage.getItem("theme") || "default";
document.documentElement.setAttribute("data-theme", savedTheme);

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
              <Route path="/set" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </PocketProvider>
  );
}

export default App;
