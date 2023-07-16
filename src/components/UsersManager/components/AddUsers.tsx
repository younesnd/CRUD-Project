import { useImmer } from 'use-immer'
import { useCreateUserMutation } from '../usersSlice'
import { useEffect } from 'react'

const createId = () => '_' + Math.random().toString(36).substring(2, 9)
const initialState = {
  name: '',
  email: '',
}

const AddUsers = () => {
  // const SelectAll = useAppSelector((state) => state.users.users)
  const [form, setForm] = useImmer(initialState)
  const [addUser, { isLoading: isAddingUser, isSuccess: isAddUserSuccess }] =
    useCreateUserMutation()

  const onAddUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    addUser({
      id: createId(),
      ...form,
    })
  }
  useEffect(() => {
    if (isAddUserSuccess) {
      setForm(initialState)
    }
  }, [isAddUserSuccess])
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }))
  }
  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Add users</h2>
      <form className="space-y-3">
        <div className="flex flex-col items-stretch text-left space-y-2">
          <label className="font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="flex-grow px-4 py-3"
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col items-stretch text-left space-y-2">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="flex-grow px-4 py-3"
            type="text"
            name="email"
            id="email"
            value={form.email}
            onChange={onChange}
          />
        </div>
        <button
          className="w-28 self-end bg-blue-700 text-blue-100 px-4 py-3"
          onClick={onAddUser}
          disabled={isAddingUser}
        >
          {isAddingUser ? 'Adding...' : 'Add User'}
        </button>
      </form>
    </div>
  )
}
export default AddUsers
