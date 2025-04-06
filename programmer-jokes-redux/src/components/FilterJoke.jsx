import { useDispatch } from "react-redux";
import { setFilter } from "../actions/filterActions";

const FilterJoke = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected Filter: ", selectedValue);
    dispatch(setFilter(selectedValue));
  };
  return (
    <div>
      <span>
        <strong>Filter Jokes</strong>
        <select onChange={handleFilterChange}>
          <option value="all">All Jokes</option>
          <option value="favorites">My Favorites</option>
        </select>
      </span>
    </div>
  );
};

export default FilterJoke;
