function SearchBar({ onChange }) {
  return (
    <nav className="navbar bg-body-tertiary d-flex justify-content-center">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={onChange}
          ></input>
        </form>
      </div>
      <div className="d-flex align-items-center">
        <input type="checkbox" />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </nav>
  );
}

export default SearchBar;
