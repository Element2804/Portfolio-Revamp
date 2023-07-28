import React from "react";
import { Form } from "react-router-dom";

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
    </form>
    </Form>
</section>
     );
}
 
export default Contact ;