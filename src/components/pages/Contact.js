import React, {useState} from "react";
import { Form } from "react-router-dom";

const submitForm = (e) => {
    e.preventDefault();
    const [name, setName] = useState ("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

}


const Contact = () => {
    return ( 
<section className="contact">
    <h2>Contact me here</h2>
    <Form method="post">
    <form>
        <label>
            <span>Email</span>
            <input type="email" name="email" required/>
        </label>
        <label>
            <span>Message</span>
            <input type="email" name="email" required/>
        </label>
        <button>Submit</button>
    </form>
    </Form>
</section>
     );
}
 
export default Contact ;