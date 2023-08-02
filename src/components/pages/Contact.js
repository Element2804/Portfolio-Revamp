import React, {useState} from "react";
import { validateEmail } from "../../utils/helpers";




const Contact = () => {
//states for all inputs
    const [email, setEmail] = useState ('');
    const [name, setName] = useState ('');
    const [message, setMessage] = useState ('');
    const [errorMessage, setErrorMessage] = useState('');


    const formChange = (e) => {
        const {target} = e;
        const inputVal = target.value;
        const inputType = target.name;

        if(inputType === "email"){
            setEmail(inputVal);
        } else if (inputType === "name"){
            setName(inputVal);
        } else {
            setMessage(inputVal)
        }
    };
    

    const submitForm = (e) => {
        //stops pages refresh on submit
        e.preventDefault();

        if(!validateEmail(email) || !name){
            setErrorMessage('Please enter a valid email address.');
            return;
        }
       if (!setMessage(message = "")){
        setErrorMessage("Message form can't be blank");
        return;
    }

    setName('');
    setEmail('');
    setMessage('');
    console.log("function called")
};
    


// const log = console.log('test')


    return ( 
<section className="contact">
    <h2>Contact me here</h2>

    <form className="forms">
        <label>
            <span>Name</span>
            <input value={name} onChange={formChange} type="text" name="name" />
        </label>
        <label>
            <span>Email</span>
            <input value={email} onChange={formChange} type="email" name="email" placeholder="Email"/>
        </label>
        <label>
            <span>Message</span>
            <input value={message} onChange={formChange} type="text" name="message"/>
        </label>
       
        <button type="button" onClick={submitForm}>Submit</button>
        
    </form>
    <div>
        <p className="error">{errorMessage}</p>
    </div>

</section>
     );


} // end Contact bracket
 
export default Contact ;