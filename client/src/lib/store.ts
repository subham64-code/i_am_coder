import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: {
    userId: string;
    role: string;
    studentId?: string;
    fullName?: string;
  } | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: typeof window !== "undefined" ? localStorage.getItem("iac_token") : null,
  refreshToken: typeof window !== "undefined" ? localStorage.getItem("iac_refresh") : null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{ token: string; refreshToken: string; user?: AuthState["user"] }>,
    ) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      if (action.payload.user) state.user = action.payload.user;
      state.isAuthenticated = true;
      if (typeof window !== "undefined") {
        localStorage.setItem("iac_token", action.payload.token);
        localStorage.setItem("iac_refresh", action.payload.refreshToken);
      }
    },
    setUser(state, action: PayloadAction<AuthState["user"]>) {
      state.user = action.payload;
    },
    logout(state) {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      state.isAuthenticated = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("iac_token");
        localStorage.removeItem("iac_refresh");
      }
    },
  },
});

export const { setCredentials, setUser, logout } = authSlice.actions;

export const store = configureStore({
  reducer: { auth: authSlice.reducer },
  middleware: (get) => get({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
