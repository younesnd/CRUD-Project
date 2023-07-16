import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'
import { useCreateUsersExpMutation } from './UsersExpSlice'
import Spinner from '../UsersManager/components/Spinner'
import { UsersExpData } from '@/api/CRUDApi/fetchCRUDApi'

type AddUsersProps = {}

const createId = () => '_' + Math.random().toString(36).substring(2, 9)
const initialState = {
  name: '',
  email: '',
  address: '',
  phone: '',
  website: '',
  company: '',
}
const AddUsersExp = (props: AddUsersProps) => {
  const [form, setForm] = useImmer<Omit<UsersExpData, 'id'>>(initialState)
  const [addUserExp, { isLoading, isSuccess }] = useCreateUsersExpMutation()

  const AddUserExpHandle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    addUserExp({
      id: createId(),
      ...form,
    })
  }
  useEffect(() => {
    if (isSuccess) {
      setForm(initialState)
    }
  }, [isSuccess])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }))
  }

  return (
    <form className="container shadow-inner flex flex-col mt-20 ml-44">
      <div className="relative z-0 w-full mb-6 group">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_filled"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Name *
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Email *
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          name="address"
          value={form.address}
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Address *
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_filled"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Phone *
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          name="website"
          value={form.website}
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_filled"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Website *
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          name="company"
          value={form.company}
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_filled"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Company *
        </label>
      </div>

      <div className="flex">
        <button
          onClick={AddUserExpHandle}
          type="button"
          className="px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg w-2/8 "
          disabled={isLoading}
        >
          {isLoading ? <Spinner show /> : 'Add User'}
        </button>
      </div>
    </form>
  )
}

export default AddUsersExp
