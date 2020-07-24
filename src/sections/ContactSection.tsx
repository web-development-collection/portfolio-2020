import React, {FunctionComponent} from "react";


const ContactSection: FunctionComponent<any> = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");


  return <section className="contact fill-screen v-centered">
    <div className="wrapper">
      <h1>Contact me</h1>

      <form>
        <div className="same-line">
          <label>Voornaam
            <input type="text" name="firstName" placeholder="Jhon"/>
          </label>

          <label>Achternaam
            <input type="text" name="lastName" placeholder="Doe"/>
          </label>
        </div>

        <label>Email
          <input type="email" name="email" placeholder="Jhon.doe@example.com"/>
        </label>

        <label>Bericht
          <textarea rows={7} name="message" placeholder="Hallo, dit is een voorbeeld bericht!"/>
        </label>

        <input type="submit" value="Verzenden"/>
      </form>
    </div>
  </section>;
}

export default ContactSection;