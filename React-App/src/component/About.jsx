import { Link } from "react-router-dom";

function About() {
    return (
        <>
        <h1>Welcome to About</h1>
        <Link to="/contact">Go to Contact</Link>
        </>
    );
}

export default About;