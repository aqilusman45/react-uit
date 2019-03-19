import React from 'react';
import Slider from 'react-slick';
import { WithLoader } from '../WithLoader';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './styles.css'

// const INITIAL_STATE ={
//     value: {},
// }

// class NewsListComponent extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {...INITIAL_STATE};
//     }

//     onChange = (event) =>{
//         this.props.onChange(event)
//     }
//     render(){
//         console.log(this.props);

//         return(
//             <div>
//             <h1>News List</h1>
//             <form>
//                 <label>
//                    <div>
//                        Drop Down
//                    </div>
//                     <select value={this.state.value} onChange={this.onChange} >
//                         { this.props.headLines.map((item, i)=>{
//                             return <option key={i} value={i}>{item.title}</option>
//                         })}
//                     </select>
//                 </label>
//             </form>
//         </div>
//         )
//     }
// }

const NewsListComponent = ({ headLines, onClick }) => {
  console.log(headLines);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="newslist-container">
    <h1>
      HeadLines
    </h1>
      <div className="newsList-wrapper">
        <Slider {...settings}>
          {headLines.map((item, i) => {
            return (
              <div key={i} value={i} className="list-item" onClick={()=>{onClick(i)}} style={{backgroundColor: "aquamarine !important"}} >
                <h3>{item.title}</h3>
                <p>Author: <b>{item.author}</b></p>
                <p>Source: <b>{item.source.name}</b></p>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}


const NewsList = WithLoader(NewsListComponent);

// const NewsList = NewsListComponent;


export { NewsList };




