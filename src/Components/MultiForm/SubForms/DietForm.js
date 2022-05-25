import { useState } from "react";
import "./SubForm.css";



const DietForm = (props) => {
    const [ formData, setFormData ] = useState({
        dietForm: "nodiet"
    });

    const preventFunc = e => e.preventDefault();
    
    const handleRadio = e => {
        setFormData({
            dietForm:  e.target.value
        });
    }

    // console.log(formData)

    return (
        <form
            className="diet-form"
            onSubmit={preventFunc}
        >
            <p>Quel est ton régime alimentaire ?</p>
            <label htmlFor="nodiet">Pas de régime en particulier</label>
            <input
                id="nodiet"
                type="radio"
                name="diet"
                value="nodiet"
                onChange={handleRadio}
            />
            <label htmlFor="homnivorous">Homnivore</label>
            <input
                id="homnivorous"
                type="radio"
                name="diet"
                value="homnivorous"
                onChange={handleRadio}
            />
            <label htmlFor="vegetarian">Végétarien</label>
            <input
                id="vegetarian"
                type="radio"
                name="diet"
                value="vegetarian"
                onChange={handleRadio}
            />
            <label htmlFor="vegan">Vegan</label>
            <input
                id="vegan"
                type="radio"
                name="diet"
                value="vegan"
                onChange={handleRadio}
            />
            <button onClick={() => props.modifyIndex(3, formData)}>Valider</button>
        </form>
    );
};

export default DietForm;