import 'antd/dist/antd.css';
import { AutoComplete, Button } from 'antd';
import {JobInfoInterface} from "../interfaces/jobInterfaces"
import { useContext } from 'react';
import jobsInfoContext from '../jobsInfoContext';

interface Props{
  titleOptions: {value: string}[]
  countryOptions: {value: string}[]
}

interface Info extends JobInfoInterface{
  onJobTitleChange:(val: string)=>void
  onJobLocChange:(val: string)=>void
}

const SearchBar = (props: Props): JSX.Element => {
  const jobsInfo:Info = useContext(jobsInfoContext).jobsInfo

  const AutocompleteTitles = () => (
    <AutoComplete
      value={jobsInfo.jobsTitle}
      style={{
        width: "100%",
      }}
      options={props.titleOptions}
      placeholder="Title"
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={(e)=>jobsInfo.onJobTitleChange(e)}
    />
  );
  const AutocompleteCountries = () => (
    <AutoComplete
      value={jobsInfo.jobsTitle}
      style={{
        width: "100%",
      }}
      options={props.countryOptions}
      placeholder="Country"
      filterOption={(inputValue, option) =>
        option!.value!.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={(e)=>jobsInfo.onJobLocChange(e)}
    />
  );

  return(
    <div className="SearchBar">
      {AutocompleteTitles()}
      {AutocompleteCountries()}
      <Button onClick={()=>{jobsInfo.onJobLocChange("");jobsInfo.onJobTitleChange("")}}>Clear search</Button>
    </div>
  )
}

export default SearchBar