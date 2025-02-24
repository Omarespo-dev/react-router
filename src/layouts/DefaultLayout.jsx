// Importiamo il componente outlet come segnaposto
import { Outlet } from "react-router-dom";

// importo i componenti header 
import Header from "../components/Header"

// Esporto La funzione DefaulLayout
export default function DefaultLayout() {


    return (
        <>
            <Header />

            <Outlet />

        </>
    );

}