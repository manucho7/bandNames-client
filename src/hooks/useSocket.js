import { useMemo, useEffect, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = (serverPath) => {

    const socket =  useMemo(() => io.connect(serverPath, {
        transports: ['websocket']
    }), [serverPath]);

    const [online, setOnline] = useState(false);

    //escuchando conexion de socketio
    useEffect(() => {
        setOnline(socket.connected);
    }, [socket])

    //escuchar la conexion
    useEffect(() => {
        socket.on('connect', () => {
            setOnline(true);
        })
    }, [socket])

    //escuchar la desconexion
    useEffect(() => {
        socket.on('disconnect', () => {
            setOnline(false);
        })
    }, [socket])

    return {
        socket,
        online,
    }

}