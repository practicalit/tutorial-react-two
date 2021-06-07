import React from "react";
import "./css/App.css";
import Checkbox from "./component/Checkbox";

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.technology = ["db", "cloud", "security", "network"];
    this.pageTitle = "Event handlers";
    this.state = {
      textValue: "Initial Value",
      languages: {
        php: false,
        java: false,
        ruby: false,
        c: false,
        basic: false,
      },
      payByCC: true,
    };
    //this.buttonHandler = this.buttonHandler.bind(this);
  }

  // buttonHandler() {
  //   console.log(`We are on ${this.pageTitle} page`);
  // }

  buttonHandler = () => {
    console.log(`We are on ES6 ${this.pageTitle} page`);
  };

  textHandler = (event) => {
    console.log(event.target.value);
    this.setState({ textValue: event.target.value });
    this.textValue = event.target.value;
  };

  handleCheckbox = (event) => {
    let state = this.state;
    state.languages[event.target.value] = event.target.checked;
    this.setState(state);

    console.log(event);
    console.log("call from checkbox component")
  };

  handleSubmit = (event) => {
    //stopping the default behaviour
    event.preventDefault();
    console.log(this.state.textValue);
  };

  ccForm() {
    return <p>Show the CC Form here</p>
  }

  paypalForm() {
    return <p>show paypal form here</p>
  }
  
  paymentTypeHandler = (event) => {
    let value = event.target.value;
    let ccSelected = false;
    console.log(value);
    if (value == 'cc') {
      ccSelected = true;
    }
    this.setState({payByCC: ccSelected});
  } 

  render() {
    const color = "green";
    let styles = {
      color: color,
      fontSize: "50px",
      textDecoration: "none",
    };

    let form = <h1>CC Form goes here</h1>;
    if (!this.state.payByCC) {
      form = <h1>Paypal form goes here</h1>;
    }

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>The text value is: {this.state.textValue} </p>
          <p style={styles}>Selective/Conditional Rendering</p>
          <button onClick={this.buttonHandler} type="button">
            Click to see the effect
          </button>
          <div>
            <input
              type="text"
              onChange={this.textHandler}
              value={this.state.textValue}
            />
          </div>
          <div>
            {Object.keys(this.state.languages).map((lang) => {
              return (
                <>
                  {/* <input
                onChange={this.handleCheckbox}
                type="checkbox"
                name="languages"
                value={lang}
                checked={this.state.languages[lang]}
              /> {lang}  */}
                  <Checkbox name="languages" value={lang} 
                  checked={this.state.languages[lang]}
                  label={lang} callback={this.handleCheckbox}
                  />
                </>
              );
            })}
          </div>
          <button className="submitButton" type="submit">
            Submit
          </button>
          <div>
            <p>Payment method</p>
            <span>Credit Card<input checked={this.state.payByCC} onChange={this.paymentTypeHandler} type="radio" name="payment" value="cc" /></span>
            <span>Paypal<input onChange={this.paymentTypeHandler} type="radio" name="payment" value="paypal" /></span>
            {
              form
            }
          </div>
        </form>
        {/* {this.technology.map((tech) => (
          <p>{tech}</p>
        ))} */}
      </div>
    );
  }
}

export default App;
