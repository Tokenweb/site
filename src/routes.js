import React from 'react';

// Root Include
const Root = React.lazy(() => import('./pages/Home/index'));

// Funds
const Funds = React.lazy(() => import('./pages/Home/funds'));

//projects
const Projects = React.lazy(() => import('./pages/Pages/Projects/index'));

//Staking
const Cosmos = React.lazy(() => import('./pages/Pages/Staking/cosmos'));
const StakingPortal = React.lazy(() => import('./pages/Pages/Staking/portal'));

//filecoin
const Filecoin = React.lazy(() => import('./pages/Pages/Filecoin/filecoin'));

const About = React.lazy(() => import('./pages/Pages/About/index.js'));


//Blog
const Blog = React.lazy(() => import('./pages/Pages/Blog/blog'));
const CosmosStakingBlog = React.lazy(() => import('./pages/Pages/Blog/introduction-to-staking-cosmos'));
const KavaBlog = React.lazy(() => import('./pages/Pages/Blog/tokenweb-drops-support-for-kava'));
const TheGraphBlog = React.lazy(() => import('./pages/Pages/Blog/thegraph-enables-microeconomy'));
const EthSecurity = React.lazy(() => import('./pages/Pages/Blog/eth-security'));
const FilecoinBlog = React.lazy(() => import('./pages/Pages/Blog/filecoin-blog'));
const EthSimple = React.lazy(() => import('./pages/Pages/Blog/eth-simple'));

//FAQ
const FAQ = React.lazy(() => import('./pages/Pages/Utility/Faq'));

//Special
const PageComingSoon = React.lazy(() => import('./pages/Pages/Special/PageComingSoon'));
const PageComingSoon2 = React.lazy(() => import('./pages/Pages/Special/page-comingsoon2'));
const PageError = React.lazy(() => import('./pages/Pages/Special/PageError'));
const PageMaintenance = React.lazy(() => import('./pages/Pages/Special/PageMaintenance'));

const routes = [

    //Pages
    { path: '/page-comingsoon', component: PageComingSoon, isWithoutLayout : true },
    { path: '/page-comingsoon2', component: PageComingSoon2, isWithoutLayout : true },
    { path: '/page-error', component: PageError, isWithoutLayout : true },
    { path: '/page-maintenance', component: PageMaintenance, isWithoutLayout : true },

    { path: '/faq', component: FAQ },

    { path: '/about', component: About },


    { path: '/staking-portal', component: StakingPortal },

    { path: '/filecoin', component: Filecoin },

    { path: '/cosmos-staking', component: Cosmos },

    { path: '/blog', component: Blog },

    { path: '/introduction-to-staking-cosmos', component: CosmosStakingBlog },
    { path: '/tokenweb-drops-support-for-kava', component: KavaBlog },
    { path: '/thegraph-enables-microeconomy', component: TheGraphBlog },
    { path: '/defi-yields-ethereum-security', component: EthSecurity },
    { path: '/filecoin-blog', component: FilecoinBlog },
    { path: '/ethereum-explained', component: EthSimple },

    { path: '/Funds', component: Funds },
    { path: '/projects', component: Projects },

    //Root
    { path: '/', component: Root, isWithoutLayout : true }

];

export default routes;
