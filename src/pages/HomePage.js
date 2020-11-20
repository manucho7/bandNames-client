import React, { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

import { BandAdd } from '../components/BandAdd';
import { BandList } from '../components/BandList';


function HomePage() {

    // const [bands, setBands] = useState([]);

    const { online } = useContext(SocketContext);

    //escuchar cualquier cambio emitido por servidor llamado current-bands
    // useEffect(() => {

    //    socket.on('current-bands', (bands) => {

    //        console.log(bands);
    //        setBands(bands);
    //    })
    // }, [socket])

    // const votar = (id) => {
    //     socket.emit('votar-banda', id);
    // }

    // const borrarBanda = (id) => {
    //     socket.emit('borrar-banda', id);
    // }

    // const cambiarNombre = (id, nombre) => {
    //     socket.emit('cambiar-nombre-banda', { id, nombre });
    // }


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
                    {/* <BandList 
                        data={ bands }
                        votar={ votar }
                        borrarBanda={ borrarBanda }
                        cambiarNombre={ cambiarNombre }
                    /> */}
                </div>
   

                <div className="col-4">
                    {/* <BandAdd /> */}
                </div>
            </div>

        </div>
    );
}

export default HomePage;
