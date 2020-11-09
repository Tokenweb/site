import React, { Component } from 'react';

//Import Components
import Section from "./Section";
import Faq from "./Faq";


//Import Images
import logolight from "../../../images/1.jpg";
import logodark from "../../../images/1.jpg";

class Filecoin extends Component {
  componentDidMount() {
      window.addEventListener("scroll", this.scrollNavigation, true);
  }
   // Make sure to remove the DOM listener when the component is unmounted.
   componentWillUnmount() {
      window.removeEventListener("scroll",this.scrollNavigation, true);
   }

  scrollNavigation = () => {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top > 80) {
          document.getElementById('topnav').classList.add('nav-sticky');
      }
      else {
          document.getElementById('topnav').classList.remove('nav-sticky');
      }
  }
    render() {
        return (
            <React.Fragment>
                <Section/>

        <section className="section">



            <Faq />


        </section>
            </React.Fragment>
        );
    }
}

export default Filecoin;
