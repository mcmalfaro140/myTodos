import React from 'react'

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <h6>By Misael Corvera</h6>
        </header>
    )
}

let headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding:'10px'
}

export default Header