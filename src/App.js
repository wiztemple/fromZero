
import { ThemeProvider } from './context/themeContext';
import Background from './components/Background';
import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider>
      <Background>
        <Home />
      </Background>
    </ThemeProvider>
  );
}

export default App;
