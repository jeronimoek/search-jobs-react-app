import ReactMarkdown from 'react-markdown'
import {JobInterface} from "../../interfaces/jobInterfaces"

interface Props {
  selectedJob: JobInterface
}

const JobDesc = (props: Props): JSX.Element => {
  return(
    <div className={`JobDesc ${props.selectedJob ? "" : "empty"}`}>
      <h1>{props.selectedJob ? props.selectedJob.title : "Seleccione un trabajo"}</h1>
      <p><ReactMarkdown>{props.selectedJob ? props.selectedJob.description : ""}</ReactMarkdown></p>
    </div>
  )
}

export default JobDesc