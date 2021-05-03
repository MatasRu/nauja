import {useState} from 'react'

function Upload() {

    const [getRecipe, setRecipe] = useState({
        title: '',
        images: [],
        ingredients: [],
        preparation: []
    })
    const [getQuantity, setQuantity] = useState("")
    const [getIngredient, setIngredient] = useState("")
    const [getImage, setImage] = useState("")
    const [getPreperation, setPreperation] = useState("")
    const [getError, setError] = useState("")

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(getRecipe)
    }

    function fill(e) {
        const {id, value} = e.target
        const stateObject = getRecipe
        stateObject[id] = value
        setRecipe({...stateObject})
    }

    function addImage() {
        const stateObject = getRecipe
        stateObject.images.push(getImage)
        setRecipe({...stateObject})
        setImage("")
    }

    function addIngredient() {
        const stateObject = getRecipe
        stateObject.ingredients.push({
            ingredient: getIngredient,
            quantity: getQuantity
        })
        setRecipe({...stateObject})
        setIngredient("")
        setQuantity("")
    }

    function addPreperation() {
        const stateObject = getRecipe
        stateObject.preparation.push(getPreperation)
        setRecipe({...stateObject})
        setPreperation("")
    }

    function uploadDatabase() {
        fetch("http://localhost:3001/createRecipe", options)
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setError(data.message)
                }else{
                    setRecipe({
                        title: '',
                        images: [],
                        ingredients: [],
                        preparation: []
                    })
                }
            })
    }


    return (
        <div className="d-flex flex-center">
            <div className="upload-main-box">
                <div className="upload-input-box flex-center">
                    <input type="text" id="title" value={getRecipe.title} placeholder="Title" onChange={(e) => fill(e)}/>
                    <input type="text" id="image" value={getImage} placeholder="Image"
                           onChange={(e) => setImage(e.target.value)}/>
                    <button onClick={addImage}>Add more</button>
                    <input type="text" id="ingredient" value={getIngredient} placeholder="Ingredient"
                           onChange={(e) => setIngredient(e.target.value)}/>
                    <input type="text" id="quantity" value={getQuantity} placeholder="Quantity"
                           onChange={(e) => setQuantity(e.target.value)}/>
                    < button onClick={addIngredient}>Add more</button>
                    <input type="text" value={getPreperation} placeholder="Preperation method"
                           onChange={(e) => setPreperation(e.target.value)}/>
                    <button onClick={addPreperation}>Add more</button>


                </div>


                <div className="upload-final-box flex-center">
                    <h3>Title: {getRecipe.title}</h3>
                    <div className="d-flex">
                        {getRecipe.images.map((item, index) => <img className="img-preview" key={index} src={item}
                                                                    alt=""/>)}
                    </div>
                    <div className="d-flex flex-column">
                        <h4>Ingredients:</h4>
                        {getRecipe.ingredients.map((item, index) => <div key={index}>
                            <span>{item.ingredient} ({item.quantity})</span></div>)}
                    </div>
                    <div>
                        <h4>Preperation:</h4>
                        {getRecipe.preparation.map((item, index) => <p key={index}>{index + 1}.{item}</p>)}
                    </div>

                    <button onClick={uploadDatabase}>Add RECIPE</button>

                    <span className="error">{getError}</span>

                </div>


            </div>
        </div>

    )
}

export default Upload;