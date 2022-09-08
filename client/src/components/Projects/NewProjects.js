import ProjectCard from './ProjectCard'

const NewProjects = ({ projects }) => {
  return (
    <div className='bg-gray-50 p-4 rounded-lg h-fit'>
      <h1 className='font-semibold text-2xl'>
        Newly added ({projects.length})
      </h1>
      <div className='space-y-4'>
        {projects.length > 0 ? (
          projects.map((project, index) => {
            return <ProjectCard project={project} key={index} />
          })
        ) : (
          <p>No projects yet</p>
        )}
      </div>
    </div>
  )
}

export default NewProjects
