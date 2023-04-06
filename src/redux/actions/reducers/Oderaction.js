import axios from 'axios'

export const placeOdrer=(token,Total)=>async(dispatch,getState)=>{
dispatch({type:'PLACE_ORDER_REQ'})
// const getdata=getState().cartreducer.carts
try{
    const res=await axios.post("/api/order/placeorder",{token,Total})
    dispatch({type:'PLACE_ORDER_SUCC'})
    console.log(res);
} catch(error){
    dispatch({type:'PLACE_ORDER_F'})
    console.log(error);
}
}