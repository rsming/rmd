
const Search = ({ query, onQueryChange }) => {
  return (
    <div className="">
      <div className="">
        {/* <BiSearch /> */}
        <label htmlFor="query" className="" />
      </div>
      <input type="text" name="query" id="query" value={query}
          onChange={(event) => { onQueryChange(event.target.value) }}
          className="" placeholder="Search" />
    </div>
  )
}

export default Search