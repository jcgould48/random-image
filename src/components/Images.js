import React, {Component} from 'react'

let images = [
    
  'images/image1.jpeg',
  'images/image2.jpeg',
  'images/image3.jpeg',
  'images/image4.jpeg',
  'images/image5.jpeg',
  'images/image6.jpeg',
  'images/image7.jpeg',
  'images/image8.jpeg',
  'images/image9.jpeg',
  'images/image0.jpeg',
  ];


    function randomNumber(){
     return Math.floor(Math.random() * 10)
      };


  class Images extends Component{
    state = {
      image: '/images/image1.jpeg'
  };

  randomImage = () => {
    const newImage = images[randomNumber()]
   this.setState({image: newImage})
}
    render(){
      return(
        <div>
          <div style={{paddingTop:'10px', paddingLeft:'10px'}}>
            <img src={this.state.image} 
        style={{width:400, height:300}} 
        alt="..."/>
          </div>
          
        <button 
        className="ui primary button" 
        style={{margin:'10px 15px'}} 
        onClick={this.randomImage}
       >
           Random Image
       </button>
        </div>
      )
    }
  }




  export default Images;