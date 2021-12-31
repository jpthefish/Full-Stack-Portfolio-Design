const Feedback = () => {
    return (
        <main>
            <section className="antique">
                <h1>Share feedback, ideas, questions, or concerns</h1>
                <p>Provide a name, an email, a subject, and a messsage to continue. The developer will then respond to all correspondence swiftly and considerately.</p>
                <form>
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
                        <input type="submit" value="Send"></input>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Feedback
