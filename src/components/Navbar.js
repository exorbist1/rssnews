import React from "react"

export default function Navbar(){
    return(
        <nav className="navbar">
            <h1> World Wide News</h1>
            <div className="search--container">
                <form action="">
                    <input type="search" placeholder="Search.." name="search" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </nav>
    )
}