import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "react-bootstrap";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      variant="outline-primary"
      size="sm"
      className="float-end"
      title="Toggle Light/Dark Mode"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ThemeToggle;
