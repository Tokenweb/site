import React, {Component, useEffect} from 'react'
import { Container } from "reactstrap";


import SectionBlock from "../../../components/Shared/blocks/SectionBlock";

import teamImg from '../../../images/about/about-img-1.png';
import contributionImg from '../../../images/about/about-img-2.png';
import innovationImg from '../../../images/about/about-img-3.png';


class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  componentWillUnmount() {
  window.removeEventListener("scroll",this.scrollNavigation, true);
  }
  scrollNavigation = () => {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top > 40) {
          document.getElementById('topnav').classList.add('nav-sticky');
      }
      else {
          document.getElementById('topnav').classList.remove('nav-sticky');
      }
  }
  render() {
    return (
      <section className="section-default">
        <Container>
          <SectionBlock
            title="Meet The Team"
            description={`Based in The European Union, TokenWeb strives to promote the advancement of proof of stake and related web3 technologies. We believe that a blockchain-powered, decentralised internet and financial ecosystem will fundamentally change the world for the better by creating an inclusive society.`}
            imgUrl={teamImg}
            imgAlt="Team img"
            
          />
          <SectionBlock
            title="Our Contribution"
            description="To support this vision, TokenWeb actively participates in the 
            governance and security of leading decentralised networks by running validator servers. These are non-custodial and anyone can delegate their tokens to passively contribute to proof of stake networks while still receiving staking rewards. To learn more check out the TokenWeb Staking Portal"
            imgUrl={contributionImg}
            imgAlt="support img"
            isImgLeft
          />
          <SectionBlock
            title="Fueling the Innovation"
            description="In addition to providing staking services, TokenWeb actively builds and funds innovative projects across the web3 ecosystem. Our focus is on early stage companies which have formed their core team and developed a simple MVP and are looking to scale their concept into a viable business and/or open-source project with many contributors."
            imgUrl={innovationImg}
            imgAlt="support img"
          />
        </Container>
      </section>
    )
  }
}

export default AboutPage;