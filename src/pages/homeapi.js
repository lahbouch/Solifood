
import React, { Component } from 'react';
import axios from 'axios';
import {Row,Col,Container} from "react-bootstrap";

import Search from './Search'







  export class  Searh extends Component {
    state = {
      obj: [],
    };
    GitDATAsearch = (data) => {
      if (data !== '') {
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
          .then((Response) => {
            this.setState({
              obj: Response.data.meals,
            });
          });
      }
    };
  
    render() {
      return (
    <>
<Row>
<div className="col-lg-12 ">

<Search getSearsh={this.GitDATAsearch}/>

</div>
            </Row>
            <div>
            <div className="row d-flex justify-content-center" >
             {this.state.obj.map((item) => {
               return  <div className="col-md-3">
               
                 
                  
                     <div className="card text-dark bg-light mb-3 shadow" key={item.idMeal}>
                       <img className="card-img-top" src={item.strMealThumb} alt="" />
                       <div className="card-body">
                         <h4 className="card-title">{item.strMeal}</h4>
                         <p className="card-text">
                           <a href={'products/' + item.idMeal} className="btn btn-success">
                             show more
                           </a>
                           
                         </p>
                       </div>
                     </div>
                   
                 
               
             </div>
             })}
             </div> 
             </div>
              
            


            
      
      </>
            
            
  );
};}
export default Searh;


