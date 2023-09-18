import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { request } from 'helpers/configuration'

export const getTerms = createAsyncThunk(
  'termsRequest/get',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.get(`terms/${data}`)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const saveTerms = createAsyncThunk(
  'termsRequest/save',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.patch('terms', data)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

const terms = createSlice({
  name: 'terms',
  initialState: {
    terms: undefined,
    loading: true,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload
    },
    setTerms(state, action) {
      state.terms = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTerms.fulfilled, (state, { payload }) => {
        state.terms = payload.payload.htmlStr
        state.loading = false
      })
      .addCase(saveTerms.fulfilled, (state, { payload }) => {
        state.loading = false
      })
  },
})

export const { setLoading, setTerms } = terms.actions
export default terms.reducer
