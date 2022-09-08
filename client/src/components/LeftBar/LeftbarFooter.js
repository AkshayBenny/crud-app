import { LogoutIcon } from '@heroicons/react/outline'
const LeftbarFooter = () => {
  return (
    <div className='mb-8'>
      <div className='flex items-center gap-4 py-2  pl-4 mt-auto transition rounded-full  hover:bg-[#e6efff] group'>
        <LogoutIcon className='h-5 ' />
        <p className='font-medium '>Logout</p>
      </div>
    </div>
  )
}

export default LeftbarFooter
