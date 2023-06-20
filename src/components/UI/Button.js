import './Button.css'

function Button(props) {
  return (
    <button type={props.type || "button"} onClick={props.onClick} form={props.form || ''} value={props.value || ''}>
      {props.children}
    </button>
  );
}

export default Button;
