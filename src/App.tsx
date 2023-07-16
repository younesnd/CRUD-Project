import './App.css'
import FetchTopQuotes from './components/QuoteComponents/FetchTopQuotes'
import UpdateQuotes from './components/QuoteComponents/UpdateQuotes'
import PaginatedQuotes from './components/QuoteComponents/PaginatedQuotes'
import AddUsersExp from './components/CRUDComponents/AddUsersExp'
import UserList from './components/CRUDComponents/UserList'
import Layout from './components/CRUDComponents/Layout'
import 'react-toastify/dist/ReactToastify.min.css'

import { ToastContainer } from 'react-toastify'
//import UserList  from './components/CRUDComponents/UserList'
// const queryClient = new QueryClient()
function App() {
  return (
    <>
   <ToastContainer />

        <div className="App mx-auto max-w-6xl text-center my-8">
          
          <Layout/>

        </div>
    </>
  )
}
export default App
