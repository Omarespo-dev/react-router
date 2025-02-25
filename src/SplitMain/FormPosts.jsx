// Importo usesState
import { useState, useEffect } from "react";

// Importo axios
import axios from "axios";

export default function FormPosts() {


    //2 Faccio lo useState per il Form dove va a prendere l oggetto con delle proprieta che rappresentano il form come titolo autore etcc
    const initialFormData = {
        title: "",
        image: "",
        content: "",
        tags: [],
    }

    //2 formDATA sono i dati raccolti dal form -- 
    // setFormData ti permette di aggiornare formData ogni volta che l'utente scrive o interagisce con il form.
    const [formData, setFormData] = useState(initialFormData)


    //3 Ora andiamo a gestire l onChange che e un evento con una funzione. La sua funzione e quando l utente scrive nel campo di testo rileva ogni cambiamento dell input

    // QUesta funzione serve a salvare i dati che l utente inserisce nel form e aggiornarli nello stato formData
    function handleFormData(e) {
        // Gestione del value 
        const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

        // uso setFormData cosi vado ad aggiornare currentFormData
        setFormData((currentFormData) => ({

            // faccio copia di formData con ...spread
            ...currentFormData,
            //Prende il nome dell input che l utente sta modificando --- invece value prende il valore inserito nell input
            [e.target.name]: value,

        }))

    }

    // TEST console.log
    console.log(formData)



    // 4-7 Ora andiamo a gestire l invio del form con onSubmit
    function addList(e) {
        // all invio non resetta la pagina
        e.preventDefault();

        // Ora andiamo ad aggiornare lo stato di list con setList-- poi facciamo la copia di list con il parametro currentList ---- Poi aggiungiamo un ogetto prende l'ultimo elemento dell'array, legge l'id, e lo incrementa di +1------- ...formData: aggiunge i dati inseriti dall'utente.

        // setlist((currentList) => [...currentList,{ id: currentList.length === 0 ? "1":currentList[currentList.length - 1].id + 1, ...formData }])

        // 7 Ora andiamo a fare una funzione che fa una richiesta API di tipo post (crea un nuovo post)
        axios.post("http://localhost:3000/posts", formData)
            .then(res => {
                console.log(res.data)
                // setlist((currentList) => [...currentList, res.data])
            })
            .catch(err => console.log(err))

        // reset del form all invio
        setFormData(initialFormData);
    }




    return (
        <>
            <main>
                <div>
                    {/* BUTTON CHE CARICA TUTTI I TODOS */}
                    {/* <button onClick={fetchTodos}>CARICA TODOS</button> */}
                    {/* FORM PER UTENTE*/}
               
                    <form onSubmit={addList}>

                        <input
                            type="text"
                            name="title"
                            onChange={handleFormData}
                            value={formData.title}
                            placeholder="Inserisci il Titolo"
                        />

                        <input
                            type="text"
                            name="image"
                            onChange={handleFormData}
                            value={formData.image}
                            placeholder="Inserisci Img"
                        />

                        <textarea className="textarea"
                            type="text"
                            name="content"
                            onChange={handleFormData}
                            value={formData.content}
                            placeholder="Inserisci Contenuto"
                        ></textarea>

                        <input
                            type="text"
                            name="tags"
                            onChange={handleFormData}
                            value={formData.tags}
                            placeholder="Inserisci  Tags"
                        />

                        <button>AGGIUNGI</button>
                    </form>

                        

                </div>
            </main>

        </>
    );
}