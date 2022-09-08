import { gql, useQuery } from '@apollo/client'
import CompletedProjects from './CompletedProjects'
import Header from './Header'
import NewProjects from './NewProjects'
import ProgressProjects from './ProgressProjects'

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      description
      status
    }
  }
`

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Something went wrong</p>

  const newProjects = data?.projects?.filter(
    (project) => project.status === 'Not Started'
  )
  const inProgressProjects = data?.projects?.filter(
    (project) => project.status === 'In Progress'
  )
  const completedProjects = data?.projects?.filter(
    (project) => project.status === 'Completed'
  )

  return (
    <div className='bg-white rounded-lg'>
    <Header/>
      {!loading && !error && (
        <div className='xl:grid grid-cols-3 gap-6 px-12'>
          <NewProjects projects={newProjects} />
          <ProgressProjects projects={inProgressProjects} />
          <CompletedProjects projects={completedProjects} />
        </div>
      )}
    </div>
  )
}

export default Projects
