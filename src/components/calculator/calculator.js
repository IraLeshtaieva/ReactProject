import { Component } from 'react'; 
import './element.css';

class Visitors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visitor: 0
        }
    }
    moreVisitors = () => {
        this.setState({
            visitor: this.state.visitor + 1
        })
    }

    render() {
        return (
        <div>
          <button onMouseEnter={this.moreVisitors} className="custom-btn">иуу</button>
          <p> Сегодня наш сайт посетило {this.state.visitor}  счастливых людей </p>
        </div>
      )  
    } 
}



function Calculator() {
    return (
      <div>
        <Visitors/>
      </div>
    );
  }
  
  export default Calculator;