import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

function Item({id,category,image,price,title}) {
  return (
      <Col>
        <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="imagen_producto" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {category} - {price}
            </p>
            <Link className="btn btn-primary" to={'/detalleproducto/'+id}>VER</Link>
        </div>
        </div>
      </Col>
  );
}

export default Item;