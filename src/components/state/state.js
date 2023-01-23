import { Component } from 'react'; 
import './button.css';


class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 1990
        }
    }

    nextYear = () => {
        this.setState({
            year: this.state.year + 1
        })
    }

    render() {
        const {date, day} = this.props;
        return (
        <div>
            <button onClick={this.nextYear} className="button" >Future</button>
            <p>Today is - {date}, day - {day}, year - {this.state.year}</p>
        </div>
      )  
    } 
}

function New() {
    return(
        <div>
           <Date date="13.12" day="Четверг" /> 
        </div>
    )
}

export default New;