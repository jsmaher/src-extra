import React from 'react'
import ControlledCarousel from './../../Components/Slider/slider'
import Chips from './../../Components/Chips/chips'
import FooterPage from './../../Components/footer/footer'
import RecipeReviewCard from './../../Components/cards/cards'
import image from './../../images/images (1).jpg'

 

export default class Home extends React.Component{
    render(){
        return(
            <div>
      <ControlledCarousel/>
            <Chips/>
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>
 <FooterPage/>
            </div>
        )
    }
}