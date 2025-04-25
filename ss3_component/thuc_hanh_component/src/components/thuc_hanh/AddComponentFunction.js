function AddComponentFunction(props) {
    console.log(props)
    return (
        <h1>TotalFunction: {props.firstNumber + props.secondNumber}</h1>
    );
}

export default AddComponentFunction;