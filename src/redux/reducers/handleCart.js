const cart = [];


const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADDITEM':
            //Check if the product Exist
            // Al no tener el ID paso como parametro el Nombre
            const exist = state.find((x) => x.nombre === product.nombre )
            if (exist) {
                return state.map((x) =>
                x.nombre === product.nombre ? {...x, qty: x.qty + 1} : x
                );
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
        
        case 'DELITEM':
            const exist1 = state.find((x) => x.nombre === product.nombre);
            if (exist1.qty === 1) {
                return state.filter((x) => x.nombre !== exist1.nombre)
            }else{
                return state.map((x) => 
                    x.nombre === product.nombre ? {...x, qty: x.qty-1} : x 
                )
            }
        
        default:
            return state;
    }
}

export default handleCart;