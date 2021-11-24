import './Menu.css'
import React from "react"

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/conteudo01/123">Conteúdo 01</link>
                </li>
                <li>
                    <link to="/conteudo02">Conteúdo 02</link>
                </li>
                <li>
                    <link to="/conteudo03">Conteúdo 03</link>
                </li>
                <li>
                    <link to="/conteudo04">Conteúdo 04</link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu