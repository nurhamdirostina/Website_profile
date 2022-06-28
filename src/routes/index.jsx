import React from "react";
import '../styles/style.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Loading from '../components/Loading';

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Portofolio = React.lazy(() => import("./Portofolio"));
const Footer = React.lazy(() => import("./Footer"));
const Skill = React.lazy(() => import("./Skill"));
const NoMatch = React.lazy(() => import("./NoMatch"));


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="home"
            element={
              <React.Suspense fallback={<Loading />}>
                  <Home />
                  <About />
                  <Skill />
                  <Portofolio />
                  <Footer />
              </React.Suspense>
            }
          />
           <Route path="/*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
