import React from "react";
import Header from "../components/Header"
import "../style.css";
import HomePage from "./HomePage";
import ResumeTemplates from "./ResumeTemplates";
export default function App() {
 
    return(
        <div className="app">
            <Header/>
            <HomePage />
            <ResumeTemplates />
        </div>
    )
}