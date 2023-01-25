import { Component } from 'react'; 
import './element.css';
import './flower.css';
import flower from './flower.svg';

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

    buyFlower = () => {
      prompt('Количество букетов?', 5);
    }

    render() {
        return (
        <div>
          <img onMouseEnter={this.moreVisitors} className="flower-style" src={flower} alt="flower" />
          <button onClick={this.buyFlower} className="custom-btn btn-8">Подарить букет</button>
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