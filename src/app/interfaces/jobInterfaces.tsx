export interface CityInterface{
  name: string
  country: {
    name: string
  }
}

export interface JobInterface{
  id: string
  title: string
  description: string
  commitment: {
    title: string
  }
  cities: CityInterface[]
  company: {
    name: string
    websiteUrl: string
  }
  applyUrl: string
  createdAt: string
}

export interface JobInfoInterface{
  jobsLoc: string
  jobsTitle: string
}