import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "../../styles/layout.css"

export default function Footer() {
    return (
        <footer className="text-center text-white">
            <div className="container pt-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1 icon" href="#" role="button">
                        <i className="fa fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1 icon" href="#" role="button">
                        <i className="fa fa-twitter"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1 icon" href="#" role="button">
                        <i className="fa fa-google"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1 icon" href="#" role="button">
                        <i className="fa fa-instagram"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1 icon" href="#" role="button">
                        <i className="fa fa-linkedin"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1 icon" href="https://github.com/hoangdesu/Library-Management-System-SEAD-Group4" role="button">
                        <i className="fa fa-github"></i></a>
                </section>

            </div>
            <div className="text-center pb-3" >
                © 2022 Copyright: Group 4 - Library Management System
            </div>
        </footer>
    )
}