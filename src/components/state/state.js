import { Component } from 'react'; 
import './button.css';
import './text.css';


class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0
        }
    }

    moreLikes = () => {
        this.setState({
            like: this.state.like + 1
        })
    }

    lessLikes = () => {
        this.setState({
            like: this.state.like - 1
        })
    }

    render() {
        const {joke, date} = this.props;
        return (
        <div>
            <p>Joke of the day: </p> 
            <p className="text">{joke}</p> 
            <p>Like: {this.state.like}
            <button onClick={this.moreLikes} className="button button-image-like">
            <img src = "like1.svg" alt="Like"/>    
            </button> 
            <button onClick={this.lessLikes} className="button button-image-dislike" >Dislike</button> </p>
            <p>Today is: {date}</p>

        </div>
      )  
    } 
}

function TellingJoke() {
    return(
        <div>
           <Jokes joke="Когда-то я пыталaсь познать мир. Потом его изменить. 
           Потом изменить свое отношение к миру. А сейчас я уверенa, что если помыть в доме окна, 
           пользы будет больше..."
           date="24/01/2023" /> 
        </div>
    )
}

export default TellingJoke;