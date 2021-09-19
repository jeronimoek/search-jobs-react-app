import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { AutoComplete, Button } from 'antd';

function SearchBar(props){

  const AutocompleteTitles = (props) => (
    <AutoComplete
      value={props.jobTitle}
      style={{
        width: "100%",
      }}
      options={props.titleOptions}
      placeholder="Title"
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={(e)=>props.onJobTitleChange(e)}
    />
  );
  const AutocompleteCountries = (props) => (
    <AutoComplete
      value={props.jobLoc}
      style={{
        width: "100%",
      }}
      options={props.countryOptions}
      placeholder="Country"
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={(e)=>props.onJobLocChange(e)}
    />
  );

  return(
    <div className="SearchBar">
      {AutocompleteTitles(props)}
      {AutocompleteCountries(props)}
      <Button onClick={()=>{props.onJobLocChange("");props.onJobTitleChange("")}}>Clear search</Button>
    </div>
  )
}

export default SearchBar