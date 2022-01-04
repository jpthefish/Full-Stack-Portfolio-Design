import { useState } from 'react';
import emailjs from 'emailjs-com';

const Feedback = () => {
    const [submitButtonText, setSubmitButtonText] = useState("Send");

    function sendEmail (e) {
        e.preventDefault();
    
        emailjs.sendForm('service_lu56q6o', 'template_1e1xche', e.target, 'user_oNtg9oxAxMzGpVvYbWrUY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            setSubmitButtonText("Success!");
    }

    return (
        <main>
            <section className="antique">
                <h1>Share feedback, ideas, questions, or concerns</h1>
                <p>Provide a name, an email, a subject, and a messsage to continue. The developer will then respond to all correspondence swiftly and considerately.</p>
                <form onSubmit={ sendEmail }>
                    <div>
                        <input type="text" placeholder="Name" name="name" required/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" name="email" required/>
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" name="subject" required/>
                    </div>
                    <div>
                       <textarea id="" cols="30" rows="8" placeholder="Message" name="message"></textarea>
                    </div>
                    <div>
                        <input className="button" type="submit" value={submitButtonText}></input>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Feedback
