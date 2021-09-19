import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'

function JobDesc(props){
  return(
    <div className={`JobDesc ${props.selectedJob ? "" : "empty"}`}>
      <h1>{props.selectedJob ? props.selectedJob.title : "Seleccione un trabajo"}</h1>
      <p><ReactMarkdown>{props.selectedJob ? props.selectedJob.description : null}</ReactMarkdown></p>
    </div>
  )
}

export default JobDesc