import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider} from '@mui/material';
import lightTheme from './Theme/lightTheme';
import Home from './component/Home/Home';



function App() {
  return (
    <ThemeProvider theme = {lightTheme} >
      <CssBaseline/>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
