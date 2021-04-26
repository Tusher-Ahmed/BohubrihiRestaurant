import React, { Component } from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem.jsx';
import DishDetails from './dishDetails.jsx';
class Menu extends Component{
 state={
     dishes:DISHES,
     selectDish:null
 }
 onDish=(dish)=>{
     this.setState({selectDish:dish})
 }
 render(){
     const menu=this.state.dishes.map(item=>{
         return(
             <MenuItem dish={item} key={item.id} DishSelect={()=>this.onDish(item)}/>
         )
     })
     let dishDetail=null;
     if(this.state.selectDish!=null){
         dishDetail=<DishDetails dish={this.state.selectDish}/>
     }
     return(
         <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {menu}
                </div>
                <div className="col-md-6">
                    {dishDetail}
                </div>
            </div>  
         </div>
     );
 }
}
export default Menu;
