// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Import Generic Components
import Section from "./section2";
import HowItWorks from './HowItWorks';
import Testi from './Testi';
import Pricing from './Pricing';
import PricingAndPayment from "./pricing-and-payment";
import Faq from './Faq';

class IndexMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.scrollNavigation = this.scrollNavigation.bind(this);

    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
      }

    // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }

      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 40)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }

    render() {
        return (
            <React.Fragment>
              {/* Home Section */}
                <Section/>

                {/* Partner */}


                {/* HowItWorks */}
                <HowItWorks />

                {/* Testi */}


                {/* Pricing */}
                <PricingAndPayment />

                {/* Faq */}
                <Faq />



            </React.Fragment>
        );
    }
}

export default IndexMain;
