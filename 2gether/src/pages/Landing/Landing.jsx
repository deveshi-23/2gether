import { Link } from "react-router-dom";
import "./Landing.css"
import HeroIllustration from "../../assets/hero-illustration.svg";

function Landing() {
  return (
    <div className="landing">

        <nav className="navbar">
            <div className="logo">
                <Link to="/">2gether</Link>
            </div>

            <div className="nav_links">
                <a href="#features">Features</a>
                <a href="#communities">Communities</a>
                <a href="#about">About</a>
            </div>

            <div className="nav_buttons">
                <Link to="/login" className="login_btn">
                    Login
                </Link>

                <Link to="/signup" className="signup_btn">
                    Sign Up
                </Link>
            </div>
    
        </nav>


        {/* hero sectionnnnnn */}


        <section className="hero">

            <div className="hero_left">

                <p className="hero_tag">
                     Welcome to 2gether
                </p>

                <h1>
                    Find Your People.
                </h1>

                <h1>
                    Build Something Amazing.
                </h1>

                <p className="hero_description">
                    Whether it's a hackathon, startup, study group, sports team,
                or creative project, 2gether helps you connect with people
                    who share your interests and ambitions.
                </p>

                <div className="hero_buttons">

                    <Link to="/signup" className="get_started">
                        Get Started
                    </Link>

                    <a href="#communities" className="explore">
                        Explore Communities
                    </a>

                </div>

            </div>

            <div className="hero_right">

                <img
                    src={HeroIllustration}
                    alt="Team Collaboration"/>

            </div>

        </section>



        <section id="features">
            <h2>Features</h2>
        </section>


        <section id="communities">
            Popular Communities
        </section>

        <section id="about">
            ABOUT
        </section>
        <section>
            Testimonials
        </section>

        <section>
            Call To Action
        </section>

        <footer>
            Footer
        </footer>
   </div>
  );
}

export default Landing;