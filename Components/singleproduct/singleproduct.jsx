import React, { useState }from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Paper from '@material-ui/core/Paper';
// import SimpleRating from './Rating';
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';

const CardExample = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div style={{ margin: "20px" }}>
            <Paper style={{ padding: 20, display: "flex" }}>
                <div style={{ marginRight: "10px" }}>
                    <img src={props.location.state.image} width="500" />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <h2>{props.location.state.title}</h2>
                    {/* <SimpleRating /> */}
                    <p>{props.location.state.description}</p>
                    <h3 style={{ color: "#59b8af" }}>Rs: {props.location.state.price}</h3>
                    <h3>Quantity:</h3>
                    <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between", width: "30%" }}>
                        <button onClick={() => setCount(count>0?count - 1:0)} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>-</button>
                        <h5 style={{ color: "#59b8af", marginTop: "2px" ,width:"10% ",textAlign:"center"}}>{count}</h5>
                        <button onClick={() => setCount(count + 1)} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>+</button>
                    </div>
                    <Button size="large" style={{ color: "#fff", backgroundColor: "#59b8af", marginTop: "30px" }}>
                        <MdShoppingCart />Add to Cart
                    </Button>
                </div>
            </Paper>
        </div>
    )
}

export default CardExample;