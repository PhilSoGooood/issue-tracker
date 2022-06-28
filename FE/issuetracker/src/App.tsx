import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import Router from 'Router';
import { ThemeProvider } from 'styled-components';
import { theme } from 'design/theme';
import GlobalStyles from 'design/GlobalStyles';
import 'assets/style.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
