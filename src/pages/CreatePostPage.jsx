// importo il form
import FormPosts from "../SplitMain/FormPosts"

// Esporto La funzione ChiSiamoPages e la importo su app
export default function CreatePostPage() {
    return (<>
        <div>
            <h1>PARTE DELLA ROTTA CREA UN POST</h1>
            <FormPosts />
        </div>
    </>
    )
}