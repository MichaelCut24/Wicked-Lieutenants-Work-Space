import PopupEdit from './PopupEdit.js';
import { useState } from 'react';

function PopEdit()  {
    const [buttonPopup, setButtonPopup] = useState(false);

    return(
    
    <div className="PopupEdit-Button">
        <center></center><button className="PopEdit-B" onClick={() => setButtonPopup(true)}>Edit </button>
        <PopupEdit trigger={buttonPopup} setTrigger={setButtonPopup}>

        </PopupEdit>
        </div>
    );
    
}


export default PopEdit;