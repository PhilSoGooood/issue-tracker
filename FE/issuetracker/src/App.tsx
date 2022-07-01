import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from 'Router';
import { ThemeProvider } from 'styled-components';
import { theme } from 'design/theme';
import GlobalStyles from 'design/GlobalStyles';
import 'assets/style.css';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Router />
          </RecoilRoot>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
