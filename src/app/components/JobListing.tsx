import {useContext, useState} from 'react';
import JobDesc from './JobDesc'
import JobList from './JobListingComp/JobList'
import {JobInterface, JobInfoInterface, CityInterface, JobInfoHandlersInterface} from "../interfaces/jobInterfaces"
import jobsInfoContext from '../jobsInfoContext';

interface Props{
  data:{
    jobs: JobInterface[]
  }
}
const JobListing = (props: Props): JSX.Element => {

  const [selectedJobId, setSelectedJobId] = useState("")
  const jobsInfo:JobInfoHandlersInterface = useContext(jobsInfoContext).jobsInfo
  
  const handleSelectedJobIdChange = (newSelectedJobId: string): void => {
    setSelectedJobId(newSelectedJobId)
  }

  const jobs: JobInterface[] = []
  
  props.data.jobs.map((job: JobInterface) => {
    if(job.title.toUpperCase().indexOf(jobsInfo.jobsTitle.toUpperCase()) === -1){
      return job
    }
    let count = 0
    job.cities.map((city: CityInterface) => {
      if(city.country.name.toUpperCase().indexOf(jobsInfo.jobsLoc.toUpperCase()) >= 0){
        count++
      }
      return city
    })
    if(count === 0){
      return job
    }
    jobs.push(job)
    return job
  })

  const selectedJob: JobInterface = jobs.find(job => job.id === selectedJobId)!

  return(
    <div className="JobListing">
      <JobList jobs={jobs} onSelectedJobIdChange={handleSelectedJobIdChange} selectedJob={selectedJob}/>
      <JobDesc selectedJob={selectedJob}/>
    </div>
  )
}

export default JobListing