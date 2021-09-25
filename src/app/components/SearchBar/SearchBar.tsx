import 'antd/dist/antd.css';
import { AutoComplete, Button } from 'antd';
import {JobInfoInterface} from "../../interfaces/jobInterfaces"

interface Props extends JobInfoInterface{
  titleOptions: {value: string}[]
  countryOptions: {value: string}[]
  onJobTitleChange:(val: string)=>void
  onJobLocChange:(val: string)=>void
}

const SearchBar = (props: Props): JSX.Element => {

  const AutocompleteTitles = (props: Props) => (
    <AutoComplete
      value={props.jobsTitle}
      style={{
        width: "100%",
      }}
      options={props.titleOptions}
      placeholder="Title"
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={(e)=>props.onJobTitleChange(e)}
    />
  );
  const AutocompleteCountries = (props: Props) => (
    <AutoComplete
      value={props.jobsLoc}
      style={{
        width: "100%",
      }}
      options={props.countryOptions}
      placeholder="Country"
      filterOption={(inputValue, option) =>
        option!.value!.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
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