import React from "react";



const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

/*
Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
Context 的目的是为了共享那些对于一个组件树而言是“全局”的数据
Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。

Context 的使用会使组件复用性变差，谨慎使用。
如果你只是想避免层层传递一些属性，组件组合有时比 context 更好。
*/

// 为当前的 theme 创建一个 context 设置默认值 light
const ThemeContext = React.createContext(themes.dark);

class MyContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };
        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        };
    }

    //使用 provider 来将当前的 theme 传递给下面的组件树，无论多深，任何组件都可读取
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
            </div>
        );
    }
}

//中间组件不必致命往下传递 theme
function Toolbar(props) {
    return (
        <ThemeButton onClick={props.changeTheme}>
            change theme
        </ThemeButton>
    );
}

class ThemeButton extends React.Component {
    //指定 contextType 读取当前的 theme context
    //react 会往上找到最近的 theme Provider 然后使用它的值
    //本例子当前 theme 值为 dark
    static contextType = ThemeContext;

    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <div>
                <button
                    {...props}
                    style={{backgroundColor: theme.background}}
                    onClick={props.onClick}/>
                <p>{theme.background}</p>
            </div>
        );
    }
}

export default MyContext;



/*
* const MyContext = React.createContext(defaultValue);
* 当 React 渲染一个订阅了这个 Context 对象的组件，
* 这个组件会从组件树种离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
* 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
* 注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。
*
* <MyContext.Provider value={}>
* 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
* Provider 接收一个 value 属性，传递给消费组件。
* 一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。
* 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。
* Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，
* 因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。
*
* 挂载在 class 上的 contextType 属性可以赋值为由 React.createContext() 创建的 Context 对象。
* 此属性可以让你使用 this.context 来获取最近 Context 上的值。你可以在任何生命周期中访问到它，包括 render 函数中。
*
* <MyContext.Consumer>{value => 基于context值进行渲染} </MyContext.Consumer>
* 一个 React 组件可以订阅 context 的变更，此组件可以让你在函数式组件中可以订阅 context。
* 这种方法需要一个函数作为子元素（function as a child）。
* 这个函数接收当前的 context 值，并返回一个 React 节点。
* 传递给函数的 value 值等价于组件树上方离这个 context 最近的 Provider 提供的 value 值。
* 如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue。
*
* MyContext.displayName = 'MyDisplayName';
* context 对象接受一个名为 displayName 的 property，类型为字符串。
* React DevTools 使用该字符串来确定 context 要显示的内容。
*
*
* */
