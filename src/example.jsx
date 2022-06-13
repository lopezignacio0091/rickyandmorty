import React from "react";
const ThemeContext = React.createContext();

const Content = () => {
  const context = React.useContext(ThemeContext);
  return (
    <section className={`theme-${context.theme}`}>
      <span>Current theme: {context.theme}</span>
      <button onClick={context.switchTheme}>Switch Theme</button>
    </section>
  );
};

const Example = () => {
  const [theme, setTheme] = React.useState("dark");
  const switchTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const providerValue = {
    theme,
    switchTheme,
  };
  return (
    <ThemeContext.Provider value={providerValue}>
      <Content />
    </ThemeContext.Provider>
  );
};
export default Example;
