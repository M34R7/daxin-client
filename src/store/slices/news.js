import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { request } from 'helpers/configuration'

export const getNews = createAsyncThunk(
  'newsRequest/get',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.get(`news/all/${data}`)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const saveNews = createAsyncThunk(
  'newsRequest/save',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.post('news', data)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const editNews = createAsyncThunk(
  'newsRequest/edit',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.patch('news', data)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteNews = createAsyncThunk(
  'newsRequest/delete',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.delete(`news/${data}`)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

const news = createSlice({
  name: 'news',
  initialState: {
    news: undefined,
    loading: true,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload
    },
    setNews(state, action) {
      state.news = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNews.fulfilled, (state, { payload }) => {
        const sortedNews = payload.payload.sort((a, b) => {
          const dateA = new Date(a.createdAt)
          const dateB = new Date(b.createdAt)
          return dateB - dateA
        })
        state.news = sortedNews
        state.loading = false
      })
      .addCase(saveNews.fulfilled, (state, { payload }) => {
        state.loading = false
      })
      .addCase(deleteNews.fulfilled, (state, { payload }) => {
        state.loading = false
      })
      .addCase(editNews.fulfilled, (state, { payload }) => {
        state.loading = false
      })
  },
})

export const { setLoading, setNews } = news.actions
export default news.reducer
