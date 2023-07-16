import { AddUser, ListView, Home } from '@icon-park/react'
import {
  openStatus,
  OpenWelcome,
  OpenAddUser,
  OpenUserList,
} from '@/constants/UsersExpConstant'

export type LeftMenuPro = (M: openStatus) => any

const LeftMenu = (props: { setOpen: LeftMenuPro }) => {
  const { setOpen } = props
  return (
    <div className="flex">
      <input
        type="checkbox"
        id="drawer-toggle"
        className="relative sr-only peer flex flex-grow"
      />
      <label
        htmlFor="drawer-toggle"
        className="absolute top-0 left-0 inline-block p-4 w-full duration-500 bg-indigo-500 rounded-lg  peer-checked:left-64"
      >
        <div className="flex">
          <div className="mr-8">
            <div className="w-7 h-1 mb-2  bg-white rounded-lg"></div>
            <div className="w-7 h-1 mb-2 bg-white rounded-lg"></div>
            <div className="w-7 h-1  bg-white rounded-lg"></div>
          </div>
          <span className="text-white text-lg"> CRUD Application</span>
        </div>
      </label>

      <div className=" fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
        <div className="  px-6 py-4 mt-8 ">
          <ul className="flex mt-20 flex-col align-middle">
            <button className="flex font-medium items-center mb-5 hover:bg-slate-100 text-slate-700 hover:text-slate-900">
              <Home
                theme="multi-color"
                size="24"
                fill={['#2F88FF', '#FFF']}
                strokeLinecap="butt"
                className="mt-4 items-center mr-5"
              />

              <span
                className="mt-4 hover:underline font-heading"
                onClick={() => setOpen(OpenWelcome)}
              >
                Welcome
              </span>
            </button>

            <button className="flex items-center mb-5 font-medium ">
              <ListView
                theme="multi-color"
                size="24"
                fill={['#2F88FF', '#7ed321']}
                strokeLinecap="butt"
                className="mt-4 items-center mr-5"
              />

              <span
                className="mt-4 hover:underline font-heading"
                onClick={() => setOpen(OpenUserList)}
              >
                User Lists
              </span>
            </button>
            <button className="flex items-center font-medium">
              <AddUser
                theme="outline"
                size="24"
                fill={['#2F88FF', '#FFF', '#7ed321']}
                strokeLinecap="butt"
                className="mt-4 items-center mr-5"
              />
              <span
                className="mt-4 hover:underline font-heading"
                onClick={() => setOpen(OpenAddUser)}
              >
                Add User
              </span>
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LeftMenu
