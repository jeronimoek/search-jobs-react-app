import React, {useState} from 'react';
import Job from './JobList/Job'
import JobListHeader from './JobList/JobListHeader'

function JobList(props){
  const [orderBy, setOrderBy] = useState("title")

  const handleSetOrderByChange = (newOrderBy) => {
    setOrderBy(newOrderBy)
  }

  const jobComps = []

  var orderFunc = (a,b) => {
    return a.title > b.title ? 1 : -1
  }

  switch(orderBy){
    case "title":
      orderFunc = (a,b) => {
        return a.title > b.title ? 1 : -1
      }
      break
    case "date":
      orderFunc = (a,b) => {
        return a.createdAt < b.createdAt ? 1 : -1
      }
  }

  props.jobs.sort((a,b) => orderFunc(a,b))

  var selectedBool = false

  props.jobs.map(job => {
    if(props.selectedJob){
      selectedBool = (job.id == props.selectedJob.id)
    }
    jobComps.push(
      <Job onSelectedJobIdChange={props.onSelectedJobIdChange} job={job} selected={selectedBool}/>
    )
  })

  return(
    <div className="jobList">
      <JobListHeader onSetOrderByChange={handleSetOrderByChange} orderBy={orderBy} quantity={props.jobs.length} jobsInfo={props.jobsInfo}/>
      {jobComps}
    </div>
  )
}

export default JobList