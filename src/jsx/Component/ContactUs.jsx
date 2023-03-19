import { useState } from "react";

const ContactUs = () => {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Message, setMessage] = useState();

/*     const handleSendEmail = (e) => {
        var now = new Date();
        var dateNow = getFormatedDate(now, "YYYY-MM-DD HH:mm:ss");
        var body = `<p>Email envoyé le ${dateNow} par M(Mme) ${Name}. <br /><br /> Sont adresse email est : ${Email}. <br /><br /> Voici son message : <br /><br /> ${Message.replace('\n','<br />')}</p>`
        google.script.run.withSuccessHandler((result) => {
            if(result){
                resetFields();
                //Mail d'envoie de l'accuse de reception
                google.script.run.withSuccessHandler().SendingEmail(Email, SUBJECT_NOREPLAY, MESSAGE_NOREPLAY);
                alert("Votre message à bien été envoyé");
                return;
            }
            resetFields();
            alert(`Un problème est survenu, veuillez utiliser l'adresse mail de l'entreprise pour nous contacter,
                   ou nous appeler directement par téléphone. On s'excuse pour la gêne occasionnée`);
        }).SendingEmail(EMAIL_COMPANY, SUBJECT_FROM_WEBSITE, body);
    } */
/*     const resetFields = () => {
        setName("");
        setEmail("");
        setMessage("");
    } */

    return (
        <div className="container">
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Adresse</div>
                        <div className="text-one">8 avenue de provence</div>
                        <div className="text-two">91940 Les Ulis</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Téléphone</div>
                        <div className="text-one">+0033 9893 5647</div>
                        <div className="text-two">+0033 3434 5678</div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-one">codinglab@gmail.com</div>
                        <div className="text-two">info.codinglab@gmail.com</div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Formulaire de contact</div>
                    <p>Nous sommes ravis de vous aider. Nous nous efforçons de répondre à toutes les demandes dans les plus brefs délais.</p>
                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder="Entrez votre nom" value={Name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Entez votre adresse email"  value={Email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-box message-box">
                            <textarea placeholder="Message..." value={Message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className="button">
                            <input type="button" value="Envoyer"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;