const JokeFilter = () => {
  const onFilterChange = (event) => {
    const selectedValue = event.target.value;
    console.log("filter: ", selectedValue);
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
