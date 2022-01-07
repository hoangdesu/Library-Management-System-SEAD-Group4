import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "../../styles/layout.css"

export default function Footer() {
    return (

        <footer class="text-center text-white">
            <div class="container pt-4 pb-0">
                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1 icon" href="" role="button">
                        <i class="fa fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1 icon" href="" role="button">
                        <i class="fa fa-twitter"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1 icon" href="" role="button">
                        <i class="fa fa-google"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1 icon" href="" role="button">
                        <i class="fa fa-instagram"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1 icon" href="" role="button">
                        <i class="fa fa-linkedin"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1 icon" href="" role="button">
                        <i class="fa fa-github"></i></a>
                </section>

            </div>

            <div class="text-center pb-3" >
                © 2020 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    )
}