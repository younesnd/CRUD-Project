import { PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice } from '@reduxjs/toolkit'
import { UsersExpData } from '@/api/CRUDApi/fetchCRUDApi'
import { RootState } from '@/store'

export type UsersState = {
  selectedUserId: UsersExpData['id'] | null
  deletingUserId: UsersExpData['id'] | null
}

export const initialState: UsersState = {
  selectedUserId: null,
  deletingUserId: null,
}

// Create ApiSlice to manage UsersExpData and the related states

export const UsersExpApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000/api/'
        : '/api/',
  }),
  tagTypes: ['UsersExp'],
  endpoints: (builder) => ({
    fetchUsersExp: builder.query<UsersExpData[], number | null>({
      query: (page) => ({
        url: 'usersExp/all',
        params: { page },
      }),

      transformResponse: (response: UsersExpData[]) => {
        return response
      },
      providesTags: ['UsersExp'], // determines which tag attached to the cached data returned by the query
    }),

    createUsersExp: builder.mutation<{ user: UsersExpData }, UsersExpData>({
      query: (user) => ({
        url: `usersExp`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['UsersExp'], // dertermines which cached data should be refetched
    }),
    removeUsersExp: builder.mutation<boolean, UsersExpData>({
      query: (user) => ({
        url: `usersExp/${user.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UsersExp'],
      onQueryStarted: async (user, { dispatch, queryFulfilled }) => {
        dispatch(setDeletingUserId(user.id))
        await queryFulfilled
        dispatch(setDeletingUserId(null))
      },
    }),
  }),
})
export const {
  useFetchUsersExpQuery,
  useCreateUsersExpMutation,
  useRemoveUsersExpMutation,
} = UsersExpApiSlice

export const usersExpSlice = createSlice({
  name: 'usersExp',
  initialState,
  reducers: {
    selectUser: (state, action: PayloadAction<string>) => {
      state.selectedUserId = action.payload
    },
    setDeletingUserId: (state, action: PayloadAction<string | null>) => {
      state.deletingUserId = action.payload
    },
    resetUsersExpSlice: () => {
      return initialState
    },
  },
})

export const resetUsersExpApiSlice = UsersExpApiSlice.util.resetApiState()

export const initialiseUsersExpApi =
  UsersExpApiSlice.endpoints.fetchUsersExp.initiate

export const { selectUser, setDeletingUserId, resetUsersExpSlice } =
  usersExpSlice.actions

export const getSelectedUsersExp =
  (users?: UsersExpData[]) => (state: RootState) => {
    // receive the users array as argument
    return users && state.users.selectedUserId
      ? users.find((user) => user.id === state.users.selectedUserId)
      : null
  }

export default usersExpSlice.reducer
