
/*
* Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素
*
* 几个适合使用 refs 的情况：
* 管理焦点，文本选择或媒体播放。
* 触发强制动画。
* 集成第三方 DOM 库。
*
* 避免使用 refs 做任何可通过声明式实现来完成的事情。
* 例如避免在 Dialog 组件里暴露 open() close() 方法，最好传递 isOpen 属性。
* 勿过度使用 Refs
*
* 如果要在函数组件中使用 ref，你可以使用 forwardRef，或者可以将该组件转化为 class 组件。
* */

import React, {useRef} from "react";


class MyRefs extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    //加载组件后就 focus
    componentDidMount() {
        this.textInput.current.focusTextInput();
    }
    render() {
        return (
            <div>
                <CustomTextInput ref={this.textInput}/>
                <CustomTextInputFuc />
            </div>
        );
    }
}

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：我们通过 "current" 来访问 DOM 节点
        this.textInput.current.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.textInput}/>
                <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
            </div>
        );
    }
}

function CustomTextInputFuc(props) {
    // 这里必须声明 textInput，这样 ref 才可以引用它
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={textInput} />
            <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            />
        </div>
    );
}


export default MyRefs;
