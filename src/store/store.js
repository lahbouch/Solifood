import {createStore} from "redux";
import cartReduer from "./reducers";

const initialState = {
    cart: [
        {
            product: {
                "id": 1,
                "name": "portugalian sup",
                "price": 100,
                "image": "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
        }
    ]
};

const store = createStore(cartReduer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;