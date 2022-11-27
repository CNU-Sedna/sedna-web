import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import AppRouter from './Router';
import { ReactQueryDevtools } from "react-query/devtools";
import global from './styles/global';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Wrapper>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <AppRouter/>
          <Global styles={global} />
					<ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </RecoilRoot>
    </Wrapper>
  );
}

export default App;
