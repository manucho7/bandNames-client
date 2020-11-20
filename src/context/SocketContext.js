import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

//Creando higher order component, SocketContext y Provider

//Creando context de Socket en el cual estara {socket y online}
export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket('http://localhost:8080');

    return (
        <SocketContext.Provider value={{socket, online}}>
            { children }
        </SocketContext.Provider>
    )
}