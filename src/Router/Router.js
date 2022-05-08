import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Loader from '../Components/Partials/Loader'
import Navbar from '../Components/Partials/Navbar'
import SideDrawer from '../Components/Partials/SideDrawer/SideDrawer'
import Backdrop from '../Components/Partials/Backdrop/Backdrop'

const Index = lazy(() => import('../Components/Index'))
const Projects = lazy(() => import('../Components/Projects'))
const Contact = lazy(() => import('../Components/Contact'))
const About = lazy(() => import('../Components/About'))
// Subpages
const ProjectPage = lazy(() => import('../Components/SubPages/ProjectPage'))



const ErrorComp = (args) => {
    return (
        <React.Fragment>
            <Navbar triggerDrawer={args}/>
            <div className="container">404 PAGE NOT FOUND</div>
        </React.Fragment>
    )
};

const Footer = () => {
    return (
        <div className="footer">
            <a target="_blank" href="http://facebook.com/nnocsupnn" className="fa fa-facebook" title="Facebook"><React.Fragment/></a> 
            <a target="_blank" href="https://instagram.com/nnocsupnn" className="fa fa-instagram" title="Instagram"><React.Fragment/></a>
            <a target="_blank" href="https://www.linkedin.com/in/nnocsupnn/" className="fa fa-linkedin" title="Linkedin"><React.Fragment/></a>
            <a target="_blank" href="mailto:nincas21@gmail.com" className="fa fa-google" title="Gmail"><React.Fragment/></a>
            <a target="_blank" href="https://github.com/nnocsupnn" className="fa fa-github" title="Github"><React.Fragment/></a>

        </div>
    )
};

export default class Router extends Component {
    constructor() {
        super()
        this.state = {
            drawerOpen: false
        }
    }

    drawerClickHandler = () => {
        this.setState(prevState => { 
            return { drawerOpen: !prevState.drawerOpen }
        })
    }

    backdropClickHandler = () => {
        this.setState({ drawerOpen: false })
    }

    lazyLoader = (Component, name = '') => {
        var backdrop;
        if (this.state.drawerOpen) {
            backdrop = <Backdrop clicked={this.backdropClickHandler}/>
        }

        return props => (
            <Suspense fallback={<Loader name={name}/>}>
               <React.Fragment>
                   <Navbar triggerDrawer={this.drawerClickHandler}/>
                   <SideDrawer show={this.state.drawerOpen}/>
                   {backdrop}
                   <Component {...props}/>
                   <Footer/>
                </React.Fragment>
            </Suspense>
        )
    }


    render() {
        return (
        <BrowserRouter>
            <div>
            <Switch>
                <Route exact={true} path="/" component={this.lazyLoader(Index, 'home')}/>
                <Route exact={true} path="/projects" component={this.lazyLoader(Projects, 'projects')}/>
                <Route exact={true} path="/contact" component={this.lazyLoader(Contact, 'contact')}/>
                <Route exact={true} path="/about" component={this.lazyLoader(About, 'about')}/>

                {/* Subpages */}
                <Route path="/project/:id" component={this.lazyLoader(ProjectPage)}/>

                <Route component={ErrorComp.bind(this, this.drawerClickHandler)}/>
            </Switch>
            </div>
        </BrowserRouter>
        )
    }
}
