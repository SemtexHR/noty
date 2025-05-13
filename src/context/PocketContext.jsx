import {
  useEffect,
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from "react";
import PocketBase from "pocketbase";
import { useInterval } from "usehooks-ts";
import { jwtDecode } from "jwt-decode";
import ms from "ms";

const BASE_URL = "http://209.38.185.18:80";
const fiveMininMs = ms("5m");
const twoMininMs = ms("2m");

const PocketContext = createContext({});

export const PocketProvider = ({ children }) => {
  const pb = useMemo(() => new PocketBase(BASE_URL), []);

  const [token, setToken] = useState(pb.authStore.token);
  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model);
    });
  });

  const register = useCallback(async (email, password) => {
    return await pb
      .collection("users")
      .create({ email, password, passwordConfirm: password });
  }, []);

  const login = useCallback(async (email, password) => {
    return await pb.collection("users").authWithPassword(email, password);
  }, []);

  const loginWithGoogle = useCallback(async () => {
    return await pb
      .collection("users")
      .authWithOAuth2({ provider: "google" });
  });

  const logout = useCallback(() => {
    pb.authStore.clear();
  }, []);

  /*const refreshSession = useCallback(async () => {
        if (!pb.authStore.isValid) return;
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const expirationWithBuffer = (decoded.exp + fiveMinutesInMs) / 1000;
        if (tokenExpiration < expirationWithBuffer) {
          await pb.collection("users").authRefresh();
        }
      }, [token]);
    
      useInterval(refreshSession, token ? twoMininMs : null);*/

  return (
    <PocketContext.Provider
      value={{ register, login, logout, loginWithGoogle ,user, token, pb }}
    >
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext);
