import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { request } from 'helpers/configuration'

export const saveMessages = createAsyncThunk(
  'newsletterRequest/messages',
  async (e, { rejectWithValue }) => {
    try {
      const response = await request.get('messages')
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const saveSubscriptions = createAsyncThunk(
  'newsletterRequest/subscriptions',
  async (e, { rejectWithValue }) => {
    try {
      const response = await request.get('subscriptions')
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

const newsletter = createSlice({
  name: 'newsletter',
  initialState: {
    subscriptions: undefined,
    messages: undefined,
    newsletter: undefined,
  },
  reducers: {
    setNewsletter(state, action) {
      state.newsletter = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(saveMessages.fulfilled, (state, { payload }) => {
        state.messages = payload.payload.contacts
      })
      .addCase(saveSubscriptions.fulfilled, (state, { payload }) => {
        state.subscriptions = false
      })
  },
})

export const { setNewsletter } = newsletter.actions
export default newsletter.reducer
