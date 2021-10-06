import 'antd/dist/antd.css';
import { AutoComplete, Button } from 'antd';
import {JobInfoHandlersInterface, JobInfoInterface} from "../interfaces/jobInterfaces"
import { useContext } from 'react';
import jobsInfoContext from '../jobsInfoContext';
import { OptionData, OptionGroupData } from 'rc-select/lib/interface';

interface Props{
  titleOptions: {value: string}[]
  countryOptions: {value: string}[]
}

const NewAutoComplete = (jobContext:any, jobProp:string, onJobPropChange:string, options:(OptionData | OptionGroupData)[]):JSX.Element => {
  return (
    <AutoComplete
      value={jobContext[jobProp]}
      style={{
        width: "100%",
      }}
      options={options}
      placeholder="Title"
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onChange={(e)=>jobContext[onJobPropChange](e)}
    />
  )
}

const SearchBar = (props: Props): JSX.Element => {
  const jobsInfo:JobInfoHandlersInterface = useContext(jobsInfoContext).jobsInfo
  const AutocompleteTitles = () => NewAutoComplete(jobsInfo, "jobsTitle", "onJobTitleChange", props.titleOptions)
  const AutocompleteCountries = () => NewAutoComplete(jobsInfo, "jobsLoc", "onJobLocChange", props.countryOptions)

  return(
    <div className="SearchBar">
      {AutocompleteTitles()}
      {AutocompleteCountries()}
      <Button onClick={()=>{jobsInfo.onJobLocChange("");jobsInfo.onJobTitleChange("")}}>Clear search</Button>
    </div>
  )
}

export default SearchBar