import React from "react";


/*
Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
Context 的目的是为了共享那些对于一个组件树而言是“全局”的数据
Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。


*/

// 为当前的 theme 创建一个 context 设置默认值 light
const ThemeContext = React.createContext('light');

class MyContext extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

//中间组件不必致命往下传递 theme
function Toolbar() {
    return (<div><ThemeButton /></div>);
}

class ThemeButton extends React.Component {
    //指定 contextType 读取当前的 theme context
    //react 会往上找到最近的 theme Provider 然后使用它的值

    static contextType = ThemeContext;
    render() {
        return (
            <div>
                <button theme={this.context} />
                <p>{this.context}</p>
            </div>

        );
    }
}

export default MyContext;
