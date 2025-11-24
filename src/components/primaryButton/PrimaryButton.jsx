import "./primaryButton.css"

export default function PrimaryButton({ onClick, children }) {
  return (
    <button className='primaryButton' onClick={onClick}>
      {children }
    </button>
  )
}
