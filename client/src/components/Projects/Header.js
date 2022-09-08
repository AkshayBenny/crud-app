import { PlusIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between p-12'>
        <h1 className='font-medium text-3xl '>Tasks</h1>
        <button className='bg-[#466BAF] text-white h-fit w-fit flex items-center justify-center gap-2 rounded-lg border border-[#466BAF] hover:bg-white hover:text-[#466BAF] transition px-3 py-2 font-medium'>
          <PlusIcon className='h-5' />
          <p>Create task</p>
        </button>
      </div>
    </div>
  )
}

export default Header
