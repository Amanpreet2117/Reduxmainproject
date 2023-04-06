export const placeoderreducer=(state={},action)=>{
switch(action.type){
    case 'PLACE_ORDER_REQ':
    return{
        ...state,loading:true
    }
    case 'PLACE_ORDER_SUCC':
    return{
            ...state,loading:false,
            success:true
        }
        
        
    case 'PLACE_ORDER_F':
     return{
                ...state,loading:false,
                success:true
            }
            default:return state
}
}
