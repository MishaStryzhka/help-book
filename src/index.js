import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/fullscreenSwiper.css';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import Providers from 'contexts/Providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={process.env.REACT_APP_BASENAME || ''}>
        <ChakraProvider>
          <ErrorBoundary>
            <Providers>
              <App />
            </Providers>
          </ErrorBoundary>
        </ChakraProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
