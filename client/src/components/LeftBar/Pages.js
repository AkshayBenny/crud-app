import {
  ClipboardIcon,
  UserGroupIcon,
  ChatIcon,
  CalendarIcon,
} from '@heroicons/react/outline'

const Pages = () => {
  return (
    <div className='border-b pb-6'>
      <h1 className='text-xl pl-4 pt-12 font-semibold'>Pages</h1>
      <div className='flex items-center gap-4 py-2 mt-6 pl-4  transition rounded-full  hover:bg-[#466BAF] group'>
        <ClipboardIcon className='h-5 group-hover:text-white' />
        <p className='font-medium group-hover:text-white'>Tasks</p>
      </div>
      <div className='flex items-center gap-4 py-2 mt-6 pl-4  transition rounded-full  hover:bg-[#466BAF] group'>
        <UserGroupIcon className='h-5 group-hover:text-white' />
        <p className='font-medium group-hover:text-white'>Groups</p>
      </div>
      <div className='flex items-center gap-4 py-2 mt-6 pl-4  transition rounded-full  hover:bg-[#466BAF] group'>
        <ChatIcon className='h-5 group-hover:text-white' />
        <p className='font-medium group-hover:text-white'>Messages</p>
      </div>
      <div className='flex items-center gap-4 py-2 mt-6 pl-4  transition rounded-full  hover:bg-[#466BAF] group'>
        <CalendarIcon className='h-5 group-hover:text-white' />
        <p className='font-medium group-hover:text-white'>Calendar</p>
      </div>
    </div>
  )
}

export default Pages
