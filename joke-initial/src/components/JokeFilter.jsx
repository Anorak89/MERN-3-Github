import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const JokeFilter = () => {
  const { dispatch } = useContext(FilterContext);

  const onFilterChange = (event) => {
    const selectedValue = event.target.value;
    dispatch({ type: "SET_FILTER", payload: selectedValue });
  };

  return (
    <div>
      <span>
        <strong>Filter Jokes </strong>
        <select onChange={onFilterChange}>
          <option value="all">All Jokes</option>
          <option value="favorites">My Favorites</option>
        </select>
      </span>
    </div>
  );
};

export default JokeFilter;
