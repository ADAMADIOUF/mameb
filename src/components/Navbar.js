import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './../dataNav'
import logo from "../assets/logo.png"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Animates from './Animates'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar']
  if (scrolled) {
    navbarClasses.push('scrolled')
  }
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])
  return (
    <Div>
      <header className={navbarClasses.join(' ')}>
        <nav>
          <div className='nav-center'>
            <div className='nav-header'>
              <a href={`/`}>
                <img src={logo} alt='' className='logo' />
              </a>
              <button className='nav-toggle' onClick={toggleLinks}>
                <FaBars />
              </button>
            </div>
            <div className='links-container' ref={linksContainerRef}>
              <ul className='links' ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <ul className='social-icons'>
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
        <Animates />
      </header>
    </Div>
  )
}
const Div = styled.section`
  .scrolled {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background: var(--clr-black);
    z-index: 1000;
    box-shadow: var(--light-shadow);
    border-bottom: 1px solid var(--clr-secondary);
  }
  nav {
    background: var(--clr-white);
    box-shadow: var(--light-shadow);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-3);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-black);
    transform: rotate(90deg);
  }
  .logo {
    width:10rem;

  }
  .logo-title {
    color: var(--clr-primary-3);
  }
  .links a {
    color: var(--clr-black);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }
  .links a:hover {
    background: var(--clr-primary-3);
    color: var(--clr-white);
    padding-left: 1.5rem;
  }
  .social-icons {
    display: none;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .show-container {
    height: 10rem;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
      color: var(--clr-primary-3);
    }
    .social-icons {
      display: flex;
    }
    .social-icons a {
      margin: 0 0.5rem;
      color: var(--clr-black);
      transition: var(--transition);
    }
    .social-icons a:hover {
      color: var(--clr-primary-3);
    }
  }
`
export default Navbar
