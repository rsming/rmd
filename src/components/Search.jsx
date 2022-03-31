
const Search = ({ query, onQueryChange, searchStatus }) => {
  return (
    <div className="field">
      <label htmlFor="query" className="label">Query</label>
      <div className="control has-icons-left has-icons-right">
        <input type="text" className="input is-primary"
            name="query" id="query" value={query}
            onChange={(event) => { onQueryChange(event.target.value) }}
            placeholder="query (should be more than 3 characters)" />
        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true"></i>
        </span>
        <p className="help is-success">{ searchStatus }</p>
      </div>
    </div>
  )
}

export default Search