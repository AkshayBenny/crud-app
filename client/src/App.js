import LeftBar from './components/LeftBar/LeftBar'
import { Routes, Route } from 'react-router-dom'
import Tasks from './pages/Tasks'
import CalendarPage from './pages/CalendarPage'
import ClientsPage from './pages/ClientsPage'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import AddClientPage from './pages/AddClientPage'
function App() {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clients: {
            merge(existing, incoming) {
              return incoming
            },
          },
          projects: {
            merge(existing, incoming) {
              return incoming
            },
          },
        },
      },
    },
  })
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache,
  })

  return (
    <ApolloProvider client={client}>
      <div className='flex   text-gray-700 bg-gray-50 min-h-screen w-full'>
        <LeftBar />
        <div className='w-full'>
          <Routes>
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/clients' element={<ClientsPage />} />
            <Route
              path='/clients/client/add-client'
              element={<AddClientPage />}
            />
          </Routes>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
