import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider} from '@mui/material';
import lightTheme from './Theme/lightTheme';



function App() {
  return (
    <ThemeProvider theme = {lightTheme} >
      <CssBaseline/>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
