import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { request } from 'helpers/configuration'

export const saveMessages = createAsyncThunk(
  'newsletterRequest/messages',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.post('message', data)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const saveSubscriptions = createAsyncThunk(
  'newsletterRequest/subscriptions',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.post('subscription', data)
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
