import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Button from 'react-bootstrap/Button'
import "./Style.css";
import { useDispatch} from 'react-redux';
import { placeOdrer } from '../redux/actions/reducers/Oderaction';




const Cheakout = ({Total}) => {
  const dispatch=useDispatch()
    const tokenHandler=(Token)=>{
    //  console.log(Token);
     dispatch(placeOdrer(Token,Total))
    }
  return (
   <StripeCheckout
   amount={Total*100}
   shippingAddress
   token={tokenHandler}
   //  ......................please your key in stripekey//////
   stripeKey="pk_test_51Ms3O2SEq7VeHtsHhBnu6I2x2ChmC2ZMVLmpRVUJfhC8KmmahHiANa9xrH3kFNHVGP6YwF71dfDVzgWm1BJusLIT009HFFxyfy"
   currency='INR'
   >
    <Button className='ammu'>Pay Now</Button>
   </StripeCheckout>
  )
}

export default Cheakout