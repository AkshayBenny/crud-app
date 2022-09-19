import { useMutation } from '@apollo/client'
import React from 'react'
import { useState } from 'react'
import { ADD_CLIENT } from '../../mutations/clientMutations'

const AddClientForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [addClient, { loading, error, data }] = useMutation(ADD_CLIENT, {
    variables: {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    },
  })

  if (error) {
    alert(error.message)
  }

  return (
    <form>
      <input
        placeholder='Name'
        type='text'
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        placeholder='Email'
        type='email'
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <input
        placeholder='Phone'
        type='text'
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, phone: e.target.value }))
        }
      />
      {loading ? (
        <p>Loading</p>
      ) : (
        <button disabled={loading} onClick={addClient}>
          Submit
        </button>
      )}
    </form>
  )
}

export default AddClientForm
