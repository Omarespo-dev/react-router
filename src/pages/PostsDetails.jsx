// Importo useEffect e state cosi aggiorno ogni volta lo stato con i dati dell api e effect lo utiliziamo per evitare di fare chiamate infinite all api
import { useEffect, useState } from "react";
// Importo axios per la chiamata all api dove ricavo tutto
import axios from "axios";

// Per accedere alle informazioni provenienti da rotte
// dinamiche, il componente associato può utilizzare l'hook
// useParams messo a disposizione da React Router ------ Ci consente di estrarre questi parametri dalla URL e utilizzarli per vari scopi.
import { useParams } from "react-router-dom";




// Esporto La funzione PostsDetails e la importo su app
export default function PostsDetails() {
    // destructoring per il ritorno dell id
    const { id } = useParams();

    //1 Ora vado a utilizzare lo useState perche mi permette di prendere l ogetto  e catturarne l evento.
    const [list, setlist] = useState({})
    // -- list e l ogetto e setlist vado ad aggiornare quell ogetto


    // funzione di chiamata di tipo get-- va a ricavare id dal useParams
    function fetchPosts() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setlist(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPosts(),
        [id])



    return (<>
        <div className="content-set">
            <h1>{list.title} </h1>
            <img src={list.image} alt={list.title} />
            <div>
                <p><h4>Contenuto</h4>{list.content}</p>
                <p><h4>Tag</h4>{list.tags?.join(", ")}</p>
            </div>
        </div>

    </>

    )
}
