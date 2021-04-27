import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';
import LoadComments from './loadComment.jsx';

const DishDetails=(props)=>{
    return(
        <div>
            <Card  className="my-3">
                <CardImg top src={props.dish.image} alt={props.dish.name} width="100%"/>
                <CardBody className="text-left">
                  <CardTitle>{props.dish.name}</CardTitle>
                  <CardText>{props.dish.description}</CardText>
                  <CardText> Category : {props.dish.category} </CardText> 
                    <CardText>Lable : {props.dish.label}</CardText> 
                    <CardText>Price : {props.dish.price} Taka</CardText>
                <hr/>
                <LoadComments comment={props.dish.comments}/>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetails;
