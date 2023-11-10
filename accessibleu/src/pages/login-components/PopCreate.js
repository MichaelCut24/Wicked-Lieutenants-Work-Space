import Popup from './Popup.js';
import { useState } from 'react';

function PopCreate()  {
    const [buttonPopup, setButtonPopup] = useState(false);

    return(
    
    <div className="Popup-Button">
        <center></center><button className="Pop-B" onClick={() => setButtonPopup(true)}>Create Account </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

        </Popup>
        </div>
    );
    
}


export default PopCreate;