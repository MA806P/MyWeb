import React from "react";
import './App.css';
import AContext from "./01-context";


class App extends React.Component {

  constructor(props) {
    super(props);
    const navs = [{type:0, text:"Context"}, {type:1, text:"Error"}];
    this.state = {type: -1, navs: navs};
  }

  navClick(type) {
    console.log('nav click '+type);
    this.setState({nav: type});
  }

  render() {

    // const navItems = this.state.navs.forEach(
    //     (item) => <p key={item.type.toString()}>aaa</p>
    // );

    const type = this.state.type;
    let contentView;
    if (type === 0) {
      contentView = <AContext />;
    } else {
      contentView = <p>Hello !</p>
    }

    return (
        <div className="App">
          <header className="App-header">
            <div className="App-nav"><button className="App-link" onClick={this.navClick(0)}>Context</button></div>
            <div className="App-content">{contentView}</div>
          </header>
        </div>
    );
  }
}
export default App;
