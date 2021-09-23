import React from "react";
import './App.css';
import MyContext from "./01-context";
import MyContext1 from "./01-context-1";
import MyRefs from "./02-refs";


class App extends React.Component {

  constructor(props) {
    super(props);
    const navs = [
        {type:0, text:"Context"},
        {type:1, text:"Context1"},
        {type:2, text:"Refs"},
    ];
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
      contentView = <MyContext/>;
    } else if (type === 1) {
      contentView = <MyContext1/>;
    } else if (type === 2) {
      contentView = <MyRefs/>;
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
