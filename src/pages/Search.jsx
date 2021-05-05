import React, { Component } from 'react';
import {Row,Col,Container} from "react-bootstrap";

export class Search extends Component {
  state = {
    ggg: '',
  };
  handleForm = (e) => {
    this.setState({
      ggg: e.target.value,
    });
  };
  searsh = (event) => {
    this.props.getSearsh(this.state.ggg);
  };
  render() {
    return (
    
        <div class="input-group rounded p-4 pr-2 pl-2 row container">
            <input type="search" class="form-control rounded " placeholder="Search" aria-label="Search"
             aria-describedby="search-addon"  value={this.state.ggg}
             onChange={this.handleForm}  />
            <span class="input-group-text border-0" id="search-addon" onClick={this.searsh}>
            <i class="fas fa-search btn  border-0 ay"></i>
            </span>
            </div>
    
    );
  }
}

export default Search;