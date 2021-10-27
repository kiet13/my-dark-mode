import Blog from './containers/Blog';
import { useThemeContext } from './context';

function App() {
  const { theme } = useThemeContext();
  const styleList = ["container"];
  if (theme.darkMode) {
    styleList.push("dark-theme");
  }

  return (
    <div className={styleList.join(' ')}>
      <Blog />
    </div>
  );
}

export default App;
