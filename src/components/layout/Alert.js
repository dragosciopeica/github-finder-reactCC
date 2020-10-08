import React, {useContext} from "react";
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {

    const alertContext = useContext(AlertContext)
    
    // Destructure:
    const { alert } = alertContext;

    return (
        // Asta s-ar traduce: "Daca alert DIFERIT de NULL atunci fa ce-i in paranteze. && verifica daca e TRUE expresia"
        alert !== null && (
            <div className = {`alert-${alert.type}`}>
                <i className='fas fa-info-circle'>{alert.msg}</i>
            </div>
        )
    )

}

export default Alert