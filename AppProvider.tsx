import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { Alert } from 'react-native';
import App from './App';
import { AxiosError } from 'axios';
import React from 'react';
import { RecoilRoot } from 'recoil';

const AppProvider = () => {
  // * react query 글로벌 에러 핸들링 세팅
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: error => {
        const axiosError = error as AxiosError<string>;
        if (__DEV__) {
          Alert.alert('오류', axiosError.message, [
            {
              text: '확인',
            },
          ]);
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: error => {
        const axiosError = error as AxiosError<string>;
        if (__DEV__) {
          Alert.alert('오류', axiosError.message, [
            {
              text: '확인',
            },
          ]);
        }
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default AppProvider;
