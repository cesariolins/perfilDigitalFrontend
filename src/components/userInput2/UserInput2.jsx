import "./userInput2.css"

export default function userInput({ placeholder, type, value, onChange, icon }) {
    return (
        <div className="input-container2">
            <div className="input-icon2">
                <img src={icon} alt="icone usuario2" />
            </div>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input-field2"
            />
        </div>
    )
}