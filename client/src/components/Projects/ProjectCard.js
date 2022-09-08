import {
  DotsHorizontalIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/outline'
import { ClockIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false)
  const clickHandler = () => {
    setShowMore(!showMore)
  }

  const tags = ['react', 'node', 'express', 'mongodb']

  return (
    <div className='bg-white p-4 w-full rounded-xl transition-all'>
      <div className='flex items-center justify-between'>
        <h1 className='truncate text-xl font-medium'>{project.name}</h1>
        <DotsHorizontalIcon className='h-5 ' />
      </div>
      <div className='pt-4'>
        <p
          className={`${
            !showMore && 'truncate transition'
          } text-base font-normal`}
        >
          {project.description}
        </p>
        <button
          onClick={clickHandler}
          className='flex group items-center gap-2 cursor-pointer'
        >
          {showMore ? (
            <>
              <p className='font-medium group-hover:underline cursor-pointer'>
                Read less
              </p>
              <ChevronUpIcon className='h-4' />
            </>
          ) : (
            <>
              <p className='font-medium group-hover:underline cursor-pointer'>
                Read more
              </p>
              <ChevronDownIcon className='h-4' />
            </>
          )}
        </button>
        <div className='flex justify-between mt-4'>
          <div className='flex flex-wrap gap-2 w-full'>
            {tags.map((tag, index) => {
              return (
                <p
                  className='font-light px-2 py-1 h-fit w-fit text-sm rounded-md bg-gray-100 '
                  key={index}
                >
                  {tag}
                </p>
              )
            })}
          </div>
          <div className='flex items-center w-[120px]'>
            <ClockIcon className='h-5 text-green-400' />
            <p className='font-light text-sm'>12 days left</p>
          </div>
        </div>
        <div className='flex items-center gap-[1px] pt-8'>
          <img
            className='h-6 w-6 rounded-full object-cover'
            src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            alt='dp'
          />
          <img
            className='h-6 w-6 rounded-full object-cover'
            src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='dp'
          />
          <img
            className='h-6 w-6 rounded-full object-cover'
            src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
            alt='dp'
          />
          <img
            className='h-6 w-6 rounded-full object-cover'
            src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='dp'
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
