
function Calculator(props) {
    return (
      <div>
        {props.x}+{props.y} = {(+props.x) + (+props.y)}
      </div>
    );
  }
  
  export default Calculator;