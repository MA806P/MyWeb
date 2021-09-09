'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        return e(
            'button',
            { onClick: () => this.setState({ liked: true}) },
            'Like'
        );
        //return (<button onclick={ ()=> this.setState({liked: true}) }>Like</button>);
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
// 在 HTML 中找到 id=like_button_container 的 div，然后在他内部显示我们的 React 组件 Like 按钮。


//压缩 js 代码的工具
//npx terser -c -m -o like_button.min.js -- like_button.js