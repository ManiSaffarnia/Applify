import React from "react";
import { connect } from "react-redux";
import { setText } from "../actions/filterActions";
import {
  setSearchText,
  setSearchResult,
  resetSearchResult
} from "../actions/searchalbumActions";
class SearchAlbum extends React.Component {
  constructor(props) {
    super(props);
  }

  onFilterInputChange = e => {
    const filterText = e.target.value;
    this.props.dispatch(setText(filterText));
  };

  onSearchInputChange = e => {
    const searchText = e.target.value;
    this.props.dispatch(setSearchText(searchText));
    //this.props.dispatch(resetSearchResult);
    const mani = this;
    fetch(
      `https://itunes.apple.com/search?term=${searchText}&limit=15&entity=album`
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        const searchResult = data.results;
        mani.props.dispatch(setSearchResult(searchResult));
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search..."
        value={
          this.props.isFilter
            ? this.props.filters.text
            : this.props.search.searchText
        }
        onChange={
          this.props.isFilter
            ? this.onFilterInputChange
            : this.onSearchInputChange
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  search: state.search
});

export default connect(mapStateToProps)(SearchAlbum);
