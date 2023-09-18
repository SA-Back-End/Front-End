import React, { useState } from "react"
import "./Toogle.btn.css"

export default function ToogleBtn({toFilter}) {

    const [isToggled, toggle] = useState(false)

    const callback = () => {
        toggle(!isToggled)
        toFilter(!isToggled)
    }

    return (
        <label className="toogle-container">
            <input type="checkbox" defaultChecked={isToggled} onClick={callback}/>
            <span />
        </label>
    )
}