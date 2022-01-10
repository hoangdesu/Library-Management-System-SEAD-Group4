import React from "react";
import "../../styles/layout.css"

export default function Navbar() {
    return (
        <nav class="nav navbar">
            <div class="container-fluid">
                <a class="navbar-brand">Navbar</a>
                <form class="d-flex input-group w-auto">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </form>
            </div>
        </nav>
    )
}