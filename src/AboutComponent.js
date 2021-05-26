import React from "react";
import Footer from "./FooterComponent";
import "./Footer.css";
import Logo from "./images/s.png";
import NavBar from "./components/Navbar/NavBarComponent";

const About = () => {
  return (
    <div className="pages">
      <NavBar />
      <section>
        <div className="about-h1">
          <h1>About PJ'S</h1>
          <img src={Logo} alt="" />
          <p>
            For 4 years, we have been in shcool learing Web Development and
            Application Development. The three of us decided that we wanted to
            create something fun that the public could interact with. Ah yes, we
            came up with the idea to build a social media blog that would be fun
            for everyone. On this site you are able to sign up and give us your
            favorite team. When you sign up you can view, post, and reply to the
            material that is provided. Also you are able to connect with those
            who share your same favorite team. You will be able to post to the
            main page and you may reply to others post. You will be able to see
            the weekly matchups, statistics, injuries, and more. WE finally
            decided to own that role and be intentional about it. I started
            writing about my passions. We founded PJ'S with a mission to give
            others a taste of what goes on in American Footbal and we have been
            at it ever since. With football fans stuck at home, we wanted to build 
            a fun messaging and blogging website on the current NFL Football season 
            that would allow fans to celebrate the games with others. Individual's 
            will have the ability to build their own custom profile page based on 
            their favorite team with our provided templates. On their page they will 
            have the ability to post comments/news links on the current games. They 
            will also receive notifications on post made by others based game matchups. 
            The page will also have game statistics.Take some time to sign up to the blog, 
            read something interesting, post, reply, and feel free to reach out to
            others. Other features also make this evident. One of those is the
            professional-yet-chic atmosphere of the blog, crafted with a calming
            website color scheme of gray white and blue. It’s a classic choice
            that compliments the array of colorful featured images in the blog
            posts. Another way that engagement is encouraged is through our
            Feed, as well as the use of the Member’s Area for allowing visitors
            to comment and “heart” favored posts. Our company includes many
            different brands. When you visit, create an account with us, or use
            sites and applications, your information is controlled by a member
            of PJ'S.
          </p>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default About;
