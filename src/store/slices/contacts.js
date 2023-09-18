import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { request } from 'helpers/configuration'

export const getContacts = createAsyncThunk(
  'contactsRequest/get',
  async (e, { rejectWithValue }) => {
    try {
      console.log('try')
      const response = await request.get('contacts')
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const saveContacts = createAsyncThunk(
  'contactsRequest/save',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.patch('contacts', data)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: undefined,
    loading: true,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload
    },
    setContacts(state, action) {
      state.contacts = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload.payload.contacts
        state.loading = false
      })
      .addCase(saveContacts.fulfilled, (state, { payload }) => {
        state.loading = false
      })
  },
})

export const { setLoading, setContacts } = contacts.actions
export default contacts.reducer
