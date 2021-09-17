import React from "react";
import './App.css';
import MyContext from "./01-context";


class App extends React.Component {

  constructor(props) {
    super(props);
    const navs = [{type:0, text:"Context"}, {type:1, text:"Error"}];
    this.state = {type: -1, navs: navs};
  }

  navClick(type) {
    console.log('nav click '+type);
    this.setState({type: type});
  }

  render() {

    const navItems = this.state.navs.map(
        (item) =>
            <button
                className="App-link"
                onClick={() => this.navClick(item.type)}
                key={item.type.toString()}
            >
              {item.text}
            </button>
    );

    const type = this.state.type;
    let contentView;
    if (type === 0) {
      contentView = <MyContext />;
    } else {
      contentView = <p>Hello !</p>
    }

    return (
        <div className="App">
          <header className="App-header">
            <div className="App-nav"><ul>{navItems}</ul></div>
            <div className="App-content">{contentView}</div>
          </header>
        </div>
    );
  }
}
export default App;
