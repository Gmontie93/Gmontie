const Button = (props) => {
    return (

        <button type='sbumit' className="button btn" onClick={props.onClick}>{props.buttonName}</button>

    )
}

export default Button;