// React Basic and Bootstrap
import React, { Component } from 'react';

// Import images
import user from '../../images/icon/user.svg';
import calendar from '../../images/icon/calendar.svg';
import sandClock from '../../images/icon/sand-clock.svg';
import supportImg from '../../images/home/home-img-1.png';
import projectImg from '../../images/home/home-img-2.png';
import stakingImg from '../../images/home/home-img-3.png';

// Import Generic Components
import SupportBlock from "../../components/Shared/blocks/SupportBlock";
import SectionBlock from "../../components/Shared/blocks/SectionBlock";
import PartnersBlock from "../../components/Shared/blocks/PartnersBlock";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
        var featureBox = document.getElementsByClassName("features");
        for(var i=0; i<featureBox.length; i++){
            featureBox[i].classList.remove("mt-5");
        }
    }
    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
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

        const featureArray = [
            { id: 1, title: "Easy To Use", description: "TokenWeb makes staking simple and available to everyone.", imgUrl: user },
            { id: 2, title: "Secure", description: "We never have access to your tokens, and you can withdraw at any time.", imgUrl: calendar },
            { id: 3, title: "Real Time", description: "Receive your staking rewards in real time, every few seconds.", imgUrl: sandClock },
        ];

        return (
            <React.Fragment>
                {/* section */}
                <SupportBlock />
                <SectionBlock
                    title="Our Mission"
                    description="TokenWeb supports transformative technologies which empower individuals and strive to create an inclusive future."
                    imgUrl={supportImg}
                    imgAlt="support img"
                />

                <SectionBlock
                    title="Projects"
                    description="TokenWeb builds, funds, and supports early stage start ups."
                    btnText="Explore Projects"
                    btnUrl="https://1m7jrkuztqm.typeform.com/to/VrLHpmwO"
                    imgUrl={projectImg}
                    imgAlt="support img"
                    isImgLeft
                />

                <SectionBlock
                    title="Staking-as-a-Service"
                    description="TokenWeb actively runs validators on major staking networks to secure 
                    and govern the blockchains. Anyone can delegate their tokens to our 
                    validators and share in the rewards."
                    btnText="Stake Now"
                    btnUrl="https://1m7jrkuztqm.typeform.com/to/VrLHpmwO"
                    imgUrl={stakingImg}
                    imgAlt="support img"
                />

                {/* <SectionBlock
                    title="Our Mission"
                    description="TokenWeb supports transformative technologies which empower individuals and strive to create an inclusive future."
                    imgUrl={supportImg}
                    imgAlt="support img"
                    isImgLeft
                /> */}

                {/* Partner */}
                <PartnersBlock  title="Staking Networks" description="We participate in many staking ecosystems where we see a promising future."/>

                <div className="position-relative">
                        <div className="shape overflow-hidden text-footer">
                            <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                            </svg>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Index;
