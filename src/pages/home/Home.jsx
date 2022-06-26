import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import './home.css'
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">
          Browser by property
        </h1>
        <PropertyList/>
        <h1 className='homeTitle'>Homes guest love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </>
  )
}

export default Home