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

const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});


function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {
                ({theme, toggleTheme}) => (
                    <button
                        onClick={toggleTheme}
                        style={{backgroundColor: theme.background}}>
                        toggle theme
                    </button>
                )
            }
        </ThemeContext.Consumer>
    );
}


function Content() {
    return (<div><ThemeTogglerButton /></div>);
}

class MyContext1 extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        };
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Content/>
            </ThemeContext.Provider>
        );
    }
}

export default MyContext1;
