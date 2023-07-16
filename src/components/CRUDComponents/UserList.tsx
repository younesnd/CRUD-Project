import Modal from './ModalUser'
import { useImmer } from 'use-immer'
import clsx from 'clsx'
import { resetStore } from '@/store'
import { useAppDispatch } from '@/store/hook'
import { toast } from 'react-toastify'

import {
  useFetchUsersExpQuery,
  useRemoveUsersExpMutation,
  resetUsersExpApiSlice,
  resetUsersExpSlice,
} from './UsersExpSlice'
import Spinner from '../UsersManager/components/Spinner'
import { UsersExpData } from '@/api/CRUDApi/fetchCRUDApi'

const UserList = () => {
  const dispatch = useAppDispatch()

  const [page, setPage] = useImmer(1)
  const {
    data: usersExp,
    isError: isFetchUsersExpError,
    isLoading: isUsersExpLoading,
    isSuccess: isUserqExpSuccess,
  } = useFetchUsersExpQuery(page - 1)
  const [removeUser, { isLoading: isRemoveUserPending }] =
    useRemoveUsersExpMutation()

  const [showModal, setShowModal] = useImmer(false)
  const [idx, setIdx] = useImmer(0)

  const handleIndex = (index: number) => {
    setIdx(index)
    setShowModal(true)
  }
  const handleDelete = (item: UsersExpData) => {
    removeUser(item)
    if (isUserqExpSuccess) {
      toast.error('Is deleting')
    }
  }
  const paginationBtnClass =
    'bg-blue-100 px-4 py-3 rounded-lg hover:bg-blue-200 text-blue-900'
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-44 mt-5  ">
      <table className=" w-4/5 text-sm text-left  dark:text-gray-400 mt-10 border border-gray-900 rounded">
        <thead className=" font-semibold border text-warmGray-900  dark:bg-gray-700 ">
          <tr>
            <th scope="col" className="px-6 py-3 border border-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-900 ">
              Company
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-900 ">
              Email
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-900">
              Phone Number
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left border border-gray-900"
            >
              Action
            </th>
          </tr>
        </thead>
        {isUsersExpLoading ? <Spinner show /> : null}

        <tbody>
          {usersExp?.map((item, index) => (
            <>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 hover:underline"></tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:under"
              >
                {item.name}
              </th>
              <td className="px-6 py-4 font-content">{item.company} </td>
              <td className="px-6 py-4 font-content">{item.email}</td>
              <td className="px-6 py-4 font-content">{item.phone}</td>
              {showModal ? (
                <Modal
                  setShowModal={setShowModal}
                  crudata={usersExp}
                  index={idx}
                />
              ) : null}
              <td className="space-x-3  flex flex-row align-[4px] ml-5 mr-5 mb-5">
                <button
                  data-modal-target="staticModal"
                  type="button"
                  onClick={() => handleIndex(index)}
                  className="px-3 shadow-md rounded-md py-2 mt-5 text-sm font-medium text-center text-white bg-blue-600"
                >
                  More
                </button>

                <button
                  data-modal-target="staticModal"
                  type="button"
                  onClick={() => handleDelete(item)}
                  className="px-3 shadow-md rounded-md py-2 mt-5 text-sm font-medium text-center text-white bg-red-600"
                >
                  Delete
                </button>
              </td>
            </>
          ))}
        </tbody>
      </table>
      <div className="flex space-x-4 justify-end mt-4 mb-4 mr-48">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setPage((old) => old - 1)}
            className={clsx(
              paginationBtnClass, // always apply
              { 'text-gray-400': page === 1 }
            )}
            disabled={page === 1}
          >
            {'<'}
          </button>
          <span className=" text-xs font-mono">Page {page}</span>
          <button
            onClick={() => setPage((old) => old + 1)}
            className={clsx(paginationBtnClass, {
              'text-gray-400': page * 5 > 10,
            })}
            disabled={page * 5 > 10}
          >
            {'>'}
          </button>
        </div>
        <button
          className="shadow px-4 py-3 bg-blue-100"
          onClick={() => dispatch(resetUsersExpApiSlice)}
        >
          Reset store
        </button>
      </div>
    </div>
  )
}

export default UserList
