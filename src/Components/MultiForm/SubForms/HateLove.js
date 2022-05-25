import { useState } from "react";
import "./SubForm.css";



const HateLove = (props) => {
    const [ formData, setFormData ] = useState({
        prefs: {
            love: "",
            hate: ""
        }
    });

    const handleTxtArea = (e, pref) => {
        const newFormData = {...formData};
        newFormData.prefs[pref] = e.target.value;
        setFormData(newFormData);
    }

    const preventFunc = e => {
        e.preventDefault();

        props.modifyIndex(6, formData);
    }

    const handleReturn = () => {
        props.modifyIndex(4);
    }

    return (
        <form 
            className="preferences-form"
            onSubmit={preventFunc}
        >
            <p>Parle-nous des aliments que tu préfères et que tu détestes !</p>
            <label htmlFor="prefered">Tes aliments préférés, séparés par une virgule :</label>
            <textarea 
            onChange={e => handleTxtArea(e, "love")}
            id="prefered"
            placeholder="Un ou plusieurs, si tu en as"
            value={formData.prefs.love}
            ></textarea>

            <label htmlFor="hated">Les aliments que tu ne supportes pas, séparés par une virgule :</label>
            <textarea 
                onChange={e => handleTxtArea(e, "hate")}
                id="hated"
                placeholder="Un ou plusieurs, si tu en as"
                value={formData.prefs.hate}
            ></textarea>

            <div className="container-nav-btns">
                <button
                    type="button"
                    onClick={handleReturn}
                    className="prev"
                >
                    Précédent
                </button>
                <button>
                    Valider
                </button>
            </div>
        </form>
    );
};

export default HateLove;