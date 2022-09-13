import React, { Component } from 'react'
import Banner from '../Body/Banner/Banner'
import Item from '../Body/Item/Item'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

 class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>  
        <Header/>
        <Banner/>
        <Item/>
        <Footer/>
      </div>
    )
  }
}

export default BaiTapThucHanhLayout