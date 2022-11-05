import { useState } from "react"

let SizeSelector = () => {
    const [size, setSize] = useState(4)
    const sizes = [4, 6, 8, 10, 12]

    return (
        <div className="size-selector">
            {sizes.map((s) => <span key={s}>
                <input type="radio" value={s} id={s} name="size" checked={s == size} 
                    onChange={(e) => setSize(parseInt(e.target.value))} />
                <label htmlFor={s}>{s}</label>
            </span>)}
        </div>
    )
}

export default SizeSelector
