import React, {Component} from 'react'

let images = [
    {
      image: 'images/image1.jpeg',
      objectId: '1',
    },
    {
      image: 'images/image2.jpeg',
      objectId: '2',
    },
    {
      image: 'images/image3.jpeg',
      objectId: '3',
    },
    {
      image: 'images/image4.jpeg',
      objectId: '4',
    },
    {
      image: 'images/image5.jpeg',
      objectId: '5',
    },
    {
      image: 'images/image6.jpeg',
      objectId: '6',
    },
    {
      image: 'images/image7.jpeg',
      objectId: '7',
    },
    {
      image: 'images/image8.jpeg',
      objectId: '8',
    },
    {
      image: 'images/image9.jpeg',
      objectId: '9',
    },
    {
      image: 'images/image0.jpeg',
      objectId: '0',
    },
    
  ];


    function randomNumber(){
     return Math.floor(Math.random() * 10)
      };


  class Images extends Component{
    constructor(){
      super()
      this.state = {
          images,
      };
      // this.onDelete = this.onDelete.bind(this)
  }

//   handleSomething = (text) => {
//     this.setState({
//         images:'images/image2.jpeg'
//     })
// }

  randomImage = () => {
    
    // const newImage = this.state.images.filter((item)=> item.objectId = randomNumber());
    const newImage = this.state.images[randomNumber()].image
    console.log('Find item with id: ', newImage, randomNumber());

    return newImage
}

    render(){
      return(
        <div>
          <div>
            <img src={randomImage}
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
       {
         this.state.images.map((image,idx) =>{
             return(
                 <div key={image.objectId} className= 'ui card'
            style={{width: '75%', padding:'20px'}}
            >
              <img src={image.image}
        style={{width:400, height:300}} 
        alt="..."/>
              </div>
              )})
       }
       
        </div>
      )
    }
  }




  export default Images;