import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import { baseURL } from "../../redux/baseUrl";
const MenuItem = (props) => {
  return (
    <div>
      <Card
        className="my-3"
        style={{ cursor: "pointer" }}
        onClick={props.DishSelect}
      >
        <CardBody>
          <CardImg
            widt="100%"
            alt={props.dish.name}
            src={baseURL + props.dish.image}
            style={{ opacity: "0.5" }}
          />
          <CardImgOverlay>
            <CardTitle className="text-center">{props.dish.name}</CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};
export default MenuItem;
