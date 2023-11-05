import '../styling/Popup.css'

function Popup(props) {
    return (props.trigger) ? ( 
      <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            { props.children }
            <br></br>
            <input type="text" placeholder="Enter your first name" name="firstname" required/>
            <input type="text" placeholder="Enter your last name" name="lastname" required/>
            <input type="text" placeholder="Enter your Username" name="Username" required/>
            <input type="text" placeholder="Enter your school email" name="username" required/>
            <input type="password" placeholder="Password" name="password" required/>
            <center><button className="popup-create">Create</button></center>
          </div>    
      </div>
    ) : "";
}

export default Popup;