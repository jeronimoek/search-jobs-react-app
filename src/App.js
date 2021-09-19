import React, {useState} from 'react';
import './App.css';
import SearchBar from './App/SearchBar'
import JobListing from './App/JobListing'
import ApolloClient, { gql }from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { SyncOutlined } from '@ant-design/icons';

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/"
})

const JobsQuery = (props) => {
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
    ({loading,error,data}) => {
      if(loading) return(
        <div className="loading">
          <SyncOutlined spin /> 
        </div> 
      )
      if(error) return <p>Error!</p>

      const jobsTitles = data.jobs.map(job => {return {value: job.title}})
      const jobsCountries = data.countries.map(country => {return {value: country.name}})
      return(
        <div>
          <SearchBar
            titleOptions={jobsTitles}
            countryOptions={jobsCountries}
            jobTitle={props.jobTitle}
            jobLoc={props.jobLoc}
            onJobTitleChange={props.handleJobTitleChange}
            onJobLocChange={props.handleJobLocChange}
          />
          <hr/>
          <JobListing
            jobTitle={props.jobTitle}
            jobLoc={props.jobLoc}
            data={data}
          />
        </div>
      )
    }
  }
  </Query>
}

const defaultPropData = {
  "data": {
    "jobs": [
      {
        "id": "cjz1ipl9x009a0758hg68h7vy",
        "title": "Senior Fullstack Engineer - Platform",
        "description": "# **Overview **\n\nAt Segment, we believe companies should be able to send their customer data wherever they want, whenever they want, with no fuss. We make this easy with a single pipeline that collects, stores, filters, transforms, and sends data to hundreds of business tools with the flip of a switch. Historically, we’ve built integrations with more than 250 different customer data tools ourselves(think Mixpanel, Google Analytics, Stripe).This March, we opened up our [++**Developer Center**++](https://segment.com/partners/developer-center/). For the first time, new companies could build integrations upon Segment data, using our self-service workflow. In that time, we’ve onboarded **60 separate companies**, each of whom built endpoints to work with our spec. We're now looking for a Senior Fullstack Engineer to help us expand our platform…we want to offer every kind of developer (partners, customers, and indie devs) the means to use Segment data. \n\n## **Project we are working on:**\n\nWe want to give our users and partners:\n\n- the ability to submit custom logic which we run as part of a high-throughput pipeline (think high throughput Lambda at 1/1000th the cost)\n- the ability to query Segment data on the fly, from a big multi-tenant database (online data of our user’s users)\n- new superpowers to combine, modify, and transform data coming through the pipeline (createa visual chain of transformations and steps)\n\nWe want to do all of this across a pipeline which processes hundreds of thousands of events per second for some of the worlds largest brands, like Github, Nike, and Intuit.\n\n## **What We Do:**\n\n- We implement [++high-performance data pipelines with Go, Kafka, and Docker++](https://segment.com/blog/allocation-efficiency-in-high-performance-go-services/)\n- We’re focused on building incredible developer experiences, with tools like our debugger, [++event delivery view++](https://segment.com/blog/new-data-visibility-features/), and asynchronous client libraries.\n- We want to give our users ‘data superpowers’\n- We handle [++billions of messages per day++](https://segment.com/blog/introducing-centrifuge/), putting a [++premium on correctness++](https://segment.com/blog/exactly-once-delivery/)\n\n## **Who** **We're** **Looking** **For:**\n\n- You come from a background of delivering projects from start to finish\n- You love the challenge of building a platform, where users will surprise and delight you with what they build\n- You feel relatively comfortable up and down the stack (both frontend and backend)\n\n## **Tools we use:**\n\n- AWS (EC2, ECS, RDS, S3, and more!)\n- Docker\n- GraphQL\n- Typescript\n- React\n\n## **Requirements:**\n\n- Strong track record of delivering product and internal systems\n- Great computing fundamentals\n- Experience at many levels of the stack (building out some frontend and some backend code)\n\nSegment is an equal opportunity employer. We believe that everyone should receive equal consideration and treatment in all terms and conditions of employment regardless of sex, gender (including pregnancy, childbirth, breastfeeding or related medical conditions), sexual orientation, gender identity, gender expression, race, color, religion, creed, national origin, ancestry, age (over 40), physical disability, mental disability, medical condition, genetic information, marital status, domestic partner status, military or veteran status, height, weight, AIDS/HIV status, and any other protected category under federal, state or local law. Pursuant to the San Francisco Fair Chance Ordinance, we will consider for employment qualified applicants with arrest and conviction records.\n",
        "commitment": {
          "title": "Full-time"
        },
        "cities": [
          {
            "name": "San Francisco",
            "country": {
              "name": "United States"
            }
          }
        ],
        "company": {
          "name": "Segment",
          "websiteUrl": "http://segment.com"
        },
        "applyUrl": "https://grnh.se/2d8f45d71",
        "createdAt": "2019-08-07T17:19:52.764Z"
      },
      {
        "id": "cjwt2a8j700by0793lnvon5c9",
        "title": "Full Stack JavaScript Developer",
        "description": "We are looking for a strong (Midlevel to Senior) Javascript Developer with to join our team. You will be working on extending and maintaining frontend code and serverless backend.\n\nFull-time or part-time. In Berlin or remote.\n\n​\n\n**Job Description**\n\n- Proven knowledge in JavaScript related to design, analysis, development and maintenance\n- Understanding the nature of asynchronous programming and its quirks and workarounds\n- Fundamental knowledge about design principles behind a scalable application\n- Good understanding of security and data protection concepts\n- Well rounded knowledge of application architecture\n- Ability to form and communicate architecture decisions\n- Focus on code quality and deliver projects with high business impact\n\n**Qualifications**\n\n- Good verbal and written English communication skills (German is a plus but no must)\n- Experience in serverless architecture (firebase, serverless, aws lambda, ...)\n- Experience in Redux or similar state management framework\n- Degree in Computer Science or related field with 3+ years of experience on frontend development in a startup or similar work environment\n- Experience with modern JavaScript frameworks like React, AngularJS, Vue etc\n- The ability to rapidly learn and explain technical concepts\n- A passion for making beautiful, smooth, delightful web experiences\n- Ability to use Git and experience with Jira project management software or similar\n- An eagerness to learn and teach new disciplines, methodologies, stay up to date with the community and develop best practices\n\n**Good to have**\n\n- Experience with web security/pen testing\n- Working knowledge of cloud platforms like AWS, Azure, Digital Ocean\n- Working experience with Agile Methodology and well versed with tools like Jira\n- Experience with API integrations like (JWT, Social Media Services)\n",
        "commitment": {
          "title": "Full-time"
        },
        "cities": [
          {
            "name": "Berlin",
            "country": {
              "name": "Germany"
            }
          }
        ],
        "company": {
          "name": "Unrealists",
          "websiteUrl": "https://unrealists.com"
        },
        "applyUrl": "https://docs.google.com/forms/d/1zlEfXsBMwxmQSHzAsYV-ZNM896yMoV4NHRwPg-GhsEE/",
        "createdAt": "2019-06-12T09:58:28.530Z"
      } 
    ],
    "countries": [
      {
        "name": "United States"
      },
      {
        "name": "Germany"
      }
    ]
  }
}



function App() {
  const [jobTitle, setJobTitle] = useState("")
  const [jobLoc, setJobLoc] = useState("")

  const handleJobTitleChange = (newJobTitle) => {
    setJobTitle(newJobTitle)
  }

  const handleJobLocChange = (newJobLoc) => {
    setJobLoc(newJobLoc)
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <JobsQuery 
          handleJobLocChange={handleJobLocChange} 
          handleJobTitleChange={handleJobTitleChange}
          jobTitle={jobTitle}
          jobLoc={jobLoc}
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
