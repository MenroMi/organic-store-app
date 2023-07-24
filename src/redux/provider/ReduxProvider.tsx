'use client';

// base
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

// reducers
import {filters, user} from '@/redux/slices';

// store
export const store = configureStore({
  reducer: {
    filters,
    user,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

// interface
interface IReduxProvider {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<IReduxProvider> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

// type for dispatch thunk
export type AppDispatch = typeof store.dispatch;
