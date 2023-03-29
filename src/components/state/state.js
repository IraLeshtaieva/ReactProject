import { Component } from 'react'; 
import './button.css';
import './text.css';
import like from './like.svg';
import dislike from './dislike.svg';


class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0,
            joke: 0
        }
    }

    newJoke = () => {
        this.setState({
          joke: this.state.joke + 1  
    })
    }

    oldJoke = () => {
        this.setState({
          joke: this.state.joke - 1  
    })
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
        const {date} = this.props;
        let somejoke = "";
        if(this.state.joke === 0) {
            somejoke = "Лучше быть в поиске, чем в розыске"
        } else if (this.state.joke === 1) {
            somejoke = "Когда вас упрекают в том, что вы слишком ленивы, напомните им, что кто-то вообще назвал породу собак 'дог'"
        } else if (this.state.joke === 2) {
            somejoke = "Верный признак, что в отношениях что-то разладилось - если в квартире помимо вас находятся медики, полиция и понятые..."
        } else {
            somejoke = <a  className="App-link" 
                           href='https://anekdotov.net'
                           target="_blank"
                           rel="noopener noreferrer"
                           >
                           Больше анекдотов читайте на сайте: 'https://anekdotov.net'
                           </a>;
        }
        return (
        <div>
            <p>Joke of the day: </p> 
            <p className="text">{somejoke}</p> 
            <button onClick={this.oldJoke} className="button" >Previos JoKe</button>
            <button onClick={this.newJoke} className="button" >Next JoKe</button>
            <p>Like: {this.state.like} 
            <div> 
                <img src={like} alt="Like" className="likes" onClick={this.moreLikes}/>
                <img src={dislike} alt="Dislike" className="likes" onClick={this.lessLikes}/>    
            </div>
             </p>
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