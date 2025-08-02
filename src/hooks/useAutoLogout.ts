// src/hooks/useAutoLogout.ts
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useTypedHooks";
import { logout } from "../features/auth/authSlice";
import { getTokenExpiration } from "../utils/tokenUtils";

let logoutTimer: NodeJS.Timeout;

export const useAutoLogout = () => {
  const dispatch = useAppDispatch();
  const { accessToken, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated || !accessToken) {
      clearTimeout(logoutTimer);
      return;
    }

    const expiration = getTokenExpiration(accessToken);
    if (!expiration) return;

    const now = Date.now();
    const timeout = expiration - now;

    if (timeout <= 0) {
      dispatch(logout());
      return;
    }

    logoutTimer = setTimeout(() => {
      dispatch(logout());
      window.location.href = "/login";
    }, timeout);

    return () => clearTimeout(logoutTimer);
  }, [accessToken, isAuthenticated, dispatch]);
};
