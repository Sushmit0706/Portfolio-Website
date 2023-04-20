import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s1.png'
import './index.scss';
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters'





const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['u', 's', 'h', 'm', 'i', 't', ' ', 'S', 'r', 'i', 'v', 'a', 's', 't', 'a', 'v', 'a']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']


    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoS} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        {/* Sushmit Srivastava */}
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                        {/* Web Developer. */}
                    </h1>
                    <h2>Front-end Developer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />

            </div>
            <Loader type="pacman" />
        </>
    )
}


export default Home