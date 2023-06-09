import { useRef, useState } from "react";

const Contactme = () =>{
    
    let username = useRef()
    let query = useRef()
    let email = useRef()
    let queryDescription = useRef()

    const errorAudio = new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_c6ccf3232f.mp3")

    const [isActive, setIsActive] = useState(false)

    const whatsappMessegeHandler = () => {

        if(username.current.value.length>0 && query.current.value.length>0 && queryDescription.current.value.length>0 && email.current.value.length>0){
            
            const messege = `Hello Noor, my name is ${username.current.value} (${email.current.value}), I have a query (${query.current.value})
            'Query Description : ${queryDescription.current.value}'`
            window.open(`https://api.whatsapp.com/send?phone=+918707223120&text=${messege}`, "_blank");
        }
        else{
            setIsActive(true)
            errorAudio.play()
            setTimeout(() => {
                setIsActive(false)
            }, 2000);
        }
    }


    return(
        <div>
            <h1 className="page-h1">Contact me</h1>
            <input type="text" ref={username} placeholder="Your Name" className="contact-input"/>
            <input type="text" ref={query} placeholder="Query" className="contact-input"/>
            <input type="email" ref={email} placeholder="Email" className="contact-input"/>
            <textarea className="contact-textarea" ref={queryDescription} placeholder="Query Description" rows="10"></textarea>
            <button className="contact-btn" onClick={whatsappMessegeHandler} >Submit</button>
            <p className={isActive?"fill-details-messege":"d-none"}>
                Kindly Fill All Details!
            </p>
        </div>
    )
}

export default Contactme;
