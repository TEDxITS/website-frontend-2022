import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { removeToken, setToken } from '@/lib/auth';

import { User } from '@/types/auth';

type AuthStoreType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
  stopLoading: () => void;
};

const useAuthStoreBase = create<AuthStoreType>(
  devtools(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,
      login: (user) => {
        setToken(user.token);
        set(
          produce<AuthStoreType>((state) => {
            state.isAuthenticated = true;
            state.user = user;
          })
        );
      },
      logout: () => {
        removeToken();
        set(
          produce<AuthStoreType>((state) => {
            state.isAuthenticated = false;
            state.user = null;
          })
        );
      },
      stopLoading: () => {
        set(
          produce<AuthStoreType>((state) => {
            state.isLoading = false;
          })
        );
      },
    }),
    { name: 'AuthStore' }
  )
);

const useAuthStore = createSelectorHooks(useAuthStoreBase);

export default useAuthStore;
