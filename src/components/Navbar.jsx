import { Link } from "react-router-dom";

const Navbar =  () => {
    const clickSound = new Audio("https://cdn.pixabay.com/audio/2022/08/12/audio_21d1ba0130.mp3");
    return(
        <nav className="side-nav">
            <Link onClick={()=> {clickSound.currentTime=0.1; clickSound.play()}} to="/" className="logo">N</Link>
            <Link onClick={()=> {clickSound.currentTime=0.1; clickSound.play()}} to="/" className="nav-links">Home</Link>
            <Link onClick={()=> {clickSound.currentTime=0.1; clickSound.play()}} to="about" className="nav-links">About</Link>
            <Link onClick={()=> {clickSound.currentTime=0.1; clickSound.play()}} to="contact_me" className="nav-links">Contact me</Link>
            <Link onClick={()=> {clickSound.currentTime=0.1; clickSound.play()}} to="my_work" className="nav-links">My Work</Link>
        </nav>
    )
}

export default Navbar;