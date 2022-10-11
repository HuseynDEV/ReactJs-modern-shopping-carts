import React from 'react'
import {Link} from 'react-router-dom'

const Search = () => {

  window.addEventListener('scroll', ()=>{
    const search=document.querySelector('.search')
     search.classList.toggle('active', window.scrollY>100)
  
  })

  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <img src='https://raw.githubusercontent.com/sunil9813/Bonik-Ecommerice-Website-in-React/151196d5147480a78b74f53f74da45527015358a/src/components/assets/images/logo.svg' alt="" />
        </div>
        <div className="search-box c_flex">
          <i className="fa fa-search"></i>
          <input type="text" placeholder='Search and hit enter...' />
          <span>All Category</span>
        </div>
        <div className="icon f_flex width">
          <i className="fa fa-user icon-circle"></i>
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>0</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search