import './Button.css'

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      form={props.form || ""}
      value={props.value || ""}
      className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-2 text-slate-200"
    >
      {props.children}
    </button>
  );
}

export default Button;
