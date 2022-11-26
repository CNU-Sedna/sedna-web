import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import AppRouter from './Router';
import { ReactQueryDevtools } from "react-query/devtools";
import global from './styles/global';
import { Global } from '@emotion/react';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <AppRouter/>
          <Global styles={global} />
					<ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
