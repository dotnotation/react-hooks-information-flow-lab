import React from 'react'

export default function Header(handleDarkModeClick, isDarkMode) {
    function handleClick(){
        handleDarkModeClick(isDarkMode)
    }
  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
  )
}
