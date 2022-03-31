
const Search = ({ query, onQueryChange, searchStatus }) => {
  return (
    <div className="">
      <div className="">
        {/* <BiSearch /> */}
        <label htmlFor="query" className="" />
      </div>
      <input type="text" name="query" id="query" value={query}
          onChange={(event) => { onQueryChange(event.target.value) }}
          className="" placeholder="Search" />
      <p className="">{ searchStatus }</p>
    </div>
  )
}

export default Search