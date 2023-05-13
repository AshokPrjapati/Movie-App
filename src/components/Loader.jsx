import { Component } from "react";
import "../App.css"

export default function Loader() {
    return (
        <div className="overlay">
            <div className="loader">
                <div className="spinner red-spinner"></div>
                <div className="spinner blue-spinner"></div>
                <div className="spinner yellow-spinner"></div>
            </div>
        </div>
    )
}