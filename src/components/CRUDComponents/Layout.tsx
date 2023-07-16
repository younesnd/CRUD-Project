import LeftMenu from './LeftMenu'
import UserList from './UserList'
import AddUsersExp from './AddUsersExp'
import Welcome from './Welcome'
import { OpenWelcome } from '@/constants/UsersExpConstant'
import { useOpenStatus } from '@/hooks/useOpenStatus'

const Layout = () => {
  const {
    status: OpenStatus,
    setStatus: setOpenStatus,
    IsOpenWelcome,
    IsOpenUserList,
    IsOpenAddUser,
  } = useOpenStatus(OpenWelcome)

  return (
    <div className="app">
      <LeftMenu setOpen={setOpenStatus} />
        {IsOpenWelcome ? (
            <Welcome/>
        ): (IsOpenUserList ? (
        
        
        <UserList/>) : <AddUsersExp/>)}    
    

     
      
    </div>
  )
}

export default Layout
