import "./userInput.css"

export default function userInput({ placeholder, type, value, onChange, icon }) {
    return (
        <div className="input-container">
            <div className="input-icon">
                <img src={icon} alt="icone usuario" />
            </div>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input-field"
            />
        </div>
    )
}