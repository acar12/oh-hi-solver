let SizeSelector = ({ size, setSize }) => {
    const sizes = [4, 6, 8, 10, 12]

    return (
        <div id="size-selector">
            {sizes.map((s) => <span key={s}>
                <input type="radio" value={s} id={s} name="size" checked={s === size} 
                    onChange={(e) => {
                        setSize(parseInt(e.target.value))
                    }} />
                <label htmlFor={s}>{s}</label>
            </span>)}
        </div>
    )
}

export default SizeSelector
