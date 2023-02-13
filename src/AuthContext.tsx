import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { User } from "./Interfaces";
import { useNavigate } from "react-router-dom";

export const Context = createContext<any>(null);

export const UserContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [curUser, setCurUser] = useState<User>();

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = () => {
      try {
        const hello = localStorage.getItem("currentUser") || "";
        const provide = JSON.parse(hello);
        setCurUser(provide);

        return provide;
      } catch (error) {
        return console.log("error");
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (curUser?.name) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [curUser]);

  return (
    <Context.Provider value={{ curUser, setCurUser }}>
      {children}
    </Context.Provider>
  );
};
