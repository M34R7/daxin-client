import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { request } from 'helpers/configuration'

export const getAbout = createAsyncThunk(
  'aboutRequest/get',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.get(`about/${data}`)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const saveAbout = createAsyncThunk(
  'aboutRequest/save',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.patch('about', data)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

const about = createSlice({
  name: 'about',
  initialState: {
    about: undefined,
    loading: true,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload
    },
    setAbout(state, action) {
      state.about = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAbout.fulfilled, (state, { payload }) => {
        state.about = payload.payload.htmlStr
        state.loading = false
      })
      .addCase(saveAbout.fulfilled, (state, { payload }) => {
        state.loading = false
      })
  },
})

export const { setLoading, setAbout } = about.actions
export default about.reducer
