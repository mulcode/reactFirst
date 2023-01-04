import React from "react"
export default function Header() {
    return (
        <header>
            <nav class="nav">
                <img src="th.jpg" width="50px" />
                <ul className="nav-items">
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}