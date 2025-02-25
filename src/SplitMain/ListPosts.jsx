// Importo usesState
import { useState, useEffect } from "react";
// importo link e navlink
import { Link, NavLink } from "react-router-dom";

// Importo axios
import axios from "axios";

export default function ListPosts() {

    //1 Ora vado a utilizzare lo useState perche mi permette di prendere l array di oggetti e catturarne l evento.
    const [list, setlist] = useState([])
    // -- list e l array di oggetti e setlist vado ad aggiornare quello array di ogetti



    // 5 Ora andiamo a gestire la cancellazione di una lista attraverso ID
    function deleteList(idList) {
        // creo nuovo array dove all interno faccio filter di list e vado a ricavarmi l elemento iesimo e faccio return di una condizione dicendo che Se l'ID dell'elemento attuale è diverso dall'ID da eliminare, allora lo tengo nella nuova lista.
        const updateLists = list.filter((list) => {
            return list.id !== idList
        })

        // 8 Ora andiamo a fare una funzione che fa una richiesta API di tipo delete (elimina un post)
        axios.delete(`http://localhost:3000/posts/${idList}`)
            .then(res =>
                console.log(res),

                // aggiornami la set list con updateList 
                setlist(updateLists)

            )
            .catch(err => console.log(err))


    }


    // 6 Ora andiamo a fare una funzione che fa una richiesta API di tipo get
    function fetchTodos() {
        axios.get("http://localhost:3000/posts")
            .then((res) => setlist(res.data))

    }

    useEffect(fetchTodos, [])




    return (
        <>
            <main>
                <div>
                
                    {list.length === 0 ?

                        <h3>NON CI SONO ELEMENTI</h3>

                        :

                        //{/* post card  with map*/}
                        list.map((post) =>
                            <section className="post-set" key={post.id} >
                                <h2>{post.title}</h2>

                                <h4>Image</h4>
                                <img src={post.image} alt={post.title} />

                                {/* <h3>Contenuto</h3>
                                <p>{post.content}</p>

                                <h3>Tag</h3>
                                <p>{post.tags.join(", ")}</p> */}
                                
                                <button className="remove" onClick={() => deleteList(post.id)}>RIMUOVI</button>
                                
                                <button className="remove">
                                    <Link to={`/listposts/${post.id}`}>VAI AL DETTAGLIO</Link>
                                </button>
                                
                            </section>
                        )
                    }

                </div>
            </main>

        </>
    );
}