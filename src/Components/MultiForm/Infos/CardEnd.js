import "./Card.css";



const CardEnd = (props) => {
    return (
        <div className="card">
            <h1>Bravo !</h1>
            <p>On peut maintenant te proposer des plats en fonction de tes goûts.</p>
            <h2 style={{paddingTop: "18px"}}>Informations récoltées : </h2>
            <p>dietForm : {props.allFormData.dietForm}</p>
            <p>foodStyle : {props.allFormData.foodStyle}</p>
            <p>allergies : {props.allFormData.allergies}</p>
            <p>love : {props.allFormData.prefs.love}</p>
            <p>hate : {props.allFormData.prefs.hate}</p>
        </div>
    );
};

export default CardEnd;