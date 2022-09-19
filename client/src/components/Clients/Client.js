import { useMutation } from '@apollo/client'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import { DELETE_CLIENT } from '../../mutations/clientMutations'
import { GET_CLIENTS } from '../../queries/clientQueries'

const Client = ({ data: client, myIndex }) => {
  const [removeClient, { loading }] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    onError: (error) => alert(error.message),
    update(cache, { data: { removeClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      })
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== removeClient.id),
        },
      })
    },
  })

  return (
    <tr
      className={`border-b ${myIndex % 2 !== 0 ? 'bg-gray-50' : 'bg-white'} `}
    >
      <th className='text-lg px-4 py-6'>{client.name}</th>
      <td className='text-lg px-4 py-6'>{client.phone}</td>
      <td className='text-lg px-4 py-6'>{client.email}</td>
      <td className=' pl-3'>
        <button className='group hover:bg-slate-100 transition p-2'>
          <PencilAltIcon className='h-5 group-hover:text-[#466BAF] transition' />
        </button>
        <button
          onClick={removeClient}
          className='group hover:bg-slate-100 transition p-2'
        >
          <TrashIcon className='h-5 group-hover:text-red-600 text-red-400 transition' />
        </button>
      </td>
    </tr>
  )
}

export default Client
