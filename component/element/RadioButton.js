function RadioButton({status, setStatus, value, title, children}) {
    return (
        <div>
            <div className={value}>
                <label htmlFor={value}>
                    {children}
                    {title}
                </label>
                <input
                    type="radio"
                    id={value}
                    value={value}
                    checked={status === value}
                    onChange={(e) => setStatus(e.target.value)}
                />
            </div>
        </div>
    )
};

export default RadioButton;