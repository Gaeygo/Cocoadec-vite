import { useState, useEffect } from "react";
import {supabase} from "../supabase"
import "./App.css";
import { Route, Routes } from "react-router";
import { useAtom } from "jotai";

import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Otp from "./components/Otp";
import auth from "./auth/auth"
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);
  const { user } = auth;
  const [currentUser, setCurrentUser] = useAtom(user)
  useEffect(() => {
    // get session data if there is an active session
    const session = supabase.auth.session();

    setCurrentUser(session?.user ?? null);

    // listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setCurrentUser(session?.user ?? null);
      }
    );

    // cleanup the useEffect hook
    return () => {
      listener?.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
       
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="otp" element={<Otp />} />
          <Route path="dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
