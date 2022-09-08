import { UserIcon } from '@heroicons/react/outline'

const User = () => {
  return (
    <div className='border-b pb-6'>
      <div className='flex items-center pt-9 pb-12'>
        <img
          src='https://lh3.googleusercontent.com/j3WTdxbQ7Jqfpqw9bmh3NcWJvXM7wTOw7ARRaTnqlGsyXdrVwFq6N0piiuC5HNknhnq8TPVfliIjU2zCdxr8PVTt6rC-yMeYer62sQ'
          alt='logo'
          className='w-14 h-14 object-cover rounded-full'
        />
        <h1 className='text-xl font-bold'>Project Manager</h1>
      </div>
      <div className='flex items-center gap-4 cursor-pointer hover:opacity-95 transition'>
        <img
          src='https://images.unsplash.com/photo-1508723968679-b88584ef742c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFkdmVudHVyZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt='dp'
          className='h-10 w-10 rounded-full object-cover'
        />
        <div>
          <p className='font-semibold text-lg'>Remi Malek</p>
          <p className='font-light text-sm'>Web developer</p>
        </div>
      </div>
      <div className='flex items-center gap-4 py-2 mt-6 pl-4  transition rounded-full  hover:bg-[#466BAF] group'>
        <UserIcon className='h-5 group-hover:text-white' />
        <p className='font-medium group-hover:text-white'>Profile</p>
      </div>
    </div>
  )
}

export default User
