import {createContext, useReducer} from "react";

const FilterContext = createContext();

const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return action.payload;
    
        default:
            return state;
    }
}

export const FilterProvider = ({children}) => {
    const [filter, dispatch] = useReducer(filterReducer, "all");
    return <FilterContext.Provider value = {{filter, dispatch}}>
        {children}
    </FilterContext.Provider>
}

export default FilterContext;

