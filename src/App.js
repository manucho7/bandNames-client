import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';


const connectSocketServer = () => {
    const socket = io.connect('http://localhost:8080', {
        transports: ['websocket']
    });
    return socket;
}

function App() {

    const [socket] = useState(connectSocketServer());
    const [online, setOnline] = useState(false);
    const [bands, setBands] = useState([]);

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

    //escuchar cualquier cambio emitido por servidor llamado current-bands
    useEffect(() => {
       socket.on('current-bands', (bands) => {
           console.log(bands);
           setBands(bands);
       })
    }, [socket])

    return (
        <div className="container">

            <div className="alert">
                <p>
                    Service status: 
                    {
                        online
                        ? <span className="text-success"> Online</span>
                        : <span className="text-danger"> Offline</span>
                    }
                </p>
            </div>

            <h1>BandNames</h1>
            <hr />

            <div className="row">
                <div className="col-8">
                    <BandList 
                        data={ bands }
                    />
                </div>
   

                <div className="col-4">
                    <BandAdd />
                </div>
            </div>

        </div>
    );
}

export default App;
