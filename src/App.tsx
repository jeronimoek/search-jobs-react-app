import {useState} from 'react';
import './App.css';
import SearchBar from './app/components/SearchBar/SearchBar'
import JobListing from './app/components/JobListing/JobListing'
import ApolloClient, { gql, OperationVariables }from 'apollo-boost';
import { ApolloProvider, Query, QueryResult } from 'react-apollo';
import { SyncOutlined } from '@ant-design/icons';
import {JobInterface ,JobInfoInterface} from "./app/interfaces/jobInterfaces"

interface Props extends JobInfoInterface{
  handleJobTitleChange:(val: string)=>void
  handleJobLocChange:(val: string)=>void
}

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/"
})

const JobsQuery = (props: Props): JSX.Element => {
  return <Query query={
    gql`{
      countries{
        name
      }
      jobs{
        id
        title
        description
        commitment{
          title
        }
        cities{
          name
          country{
            name
          }
        }
        company{
          name
          websiteUrl
        }
        applyUrl
        createdAt
      }
    }`
  }>
  {
    ((result: QueryResult<any, OperationVariables>) => {
      const {loading,error,data} = result
      if(loading) return(
        <div className="loading">
          <SyncOutlined spin /> 
        </div> 
      )
      if(error) return <p>Error!</p>

      const allTitles: {value: string}[] = data.jobs.map((job: JobInterface) => {return {value: job.title}})
      const jobsTitles = allTitles.filter((title, index) => (allTitles.findIndex(t => t.value.toUpperCase() === title.value.toUpperCase()) === index))

      const allCountries: {value: string}[] = data.countries.map((country: {name: string}) => {return {value: country.name}})
      const jobsCountries = allCountries.filter((country, index) => (allCountries.findIndex(t => t.value.toUpperCase() === country.value.toUpperCase()) === index))

      return(
        <div>
          <SearchBar
            titleOptions={jobsTitles}
            countryOptions={jobsCountries}
            jobsTitle={props.jobsTitle}
            jobsLoc={props.jobsLoc}
            onJobTitleChange={props.handleJobTitleChange}
            onJobLocChange={props.handleJobLocChange}
          />
          <hr/>
          <JobListing
            jobsTitle={props.jobsTitle}
            jobsLoc={props.jobsLoc}
            data={data}
          />
        </div>
      )
    })
  }
  </Query>
}

const App = (): JSX.Element => {
  const [jobsTitle, setJobsTitle] = useState("")
  const [jobsLoc, setJobsLoc] = useState("")

  const handleJobTitleChange = (newJobTitle: string):void => {
    setJobsTitle(newJobTitle)
  }

  const handleJobLocChange = (newJobLoc: string):void => {
    setJobsLoc(newJobLoc)
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <JobsQuery 
          handleJobLocChange={handleJobLocChange} 
          handleJobTitleChange={handleJobTitleChange}
          jobsTitle={jobsTitle}
          jobsLoc={jobsLoc}
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
