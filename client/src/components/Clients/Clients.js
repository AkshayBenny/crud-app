import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_CLIENTS } from '../../queries/clientQueries'
import Header from './Header'
import Client from './Client'
import AddClientModal from './AddClientModal'

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS)
 
  // const [showModal, setShowModal] = useState(false)
  // console.log(showModal)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong...</p>
  return (
    <div className='bg-white rounded-lg h-screen'>
      <Header />
      {/* {showModal && <AddClientModal />} */}
      <div className='px-12'>
        <table className=' text-left w-full  rounded-lg'>
          <thead className='text-lg  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='py-3 px-4'>
                Name
              </th>
              <th scope='col' className='py-3 px-4'>
                Phone
              </th>
              <th scope='col' className='py-3 px-4'>
                Email
              </th>

              <th scope='col' className='py-3 px-4'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              !error &&
              data.clients.map((client, index) => {
                return <Client key={index} myIndex={index} data={client} />
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Clients
