import {useState} from 'react';
import JobDesc from './JobDesc'
import JobList from './JobListingComp/JobList'
import {JobInterface, JobInfoInterface, CityInterface} from "../interfaces/jobInterfaces"

interface Props extends JobInfoInterface{
  data:{
    jobs: JobInterface[]
  }
}

const JobListing = (props: Props): JSX.Element => {

  const [selectedJobId, setSelectedJobId] = useState("")
  
  const handleSelectedJobIdChange = (newSelectedJobId: string): void => {
    setSelectedJobId(newSelectedJobId)
  }

  const jobs: JobInterface[] = []
  
  props.data.jobs.map((job: JobInterface) => {
    if(job.title.toUpperCase().indexOf(props.jobsTitle.toUpperCase()) === -1){
      return job
    }
    let count = 0
    job.cities.map((city: CityInterface) => {
      if(city.country.name.toUpperCase().indexOf(props.jobsLoc.toUpperCase()) >= 0){
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

  const jobsInfo: JobInfoInterface = {
    jobsLoc:    props.jobsLoc,
    jobsTitle:  props.jobsTitle
  }

  return(
    <div className="JobListing">
      <JobList jobs={jobs} onSelectedJobIdChange={handleSelectedJobIdChange} jobsInfo={jobsInfo} selectedJob={selectedJob}/>
      <JobDesc selectedJob={selectedJob}/>
    </div>
  )
}

export default JobListing