//Import components
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { request } from 'helpers/configuration'

//Request for get all projects
export const getProjects = createAsyncThunk(
  'projectsRequest/get',
  async (data, { rejectWithValue }) => {
    try {
      const response = await request.get(`projects/all/${data}`)
      return response.data
    } catch (error) {
      console.error('Ошибка во время выполнения запроса:', error)
      return rejectWithValue(error.response.data)
    }
  }
)

//Create projects store
const projects = createSlice({
  name: 'projects',
  initialState: {
    projects: null,
  },
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getProjects.fulfilled, (state, { payload }) => {
      state.projects = payload.payload
    })
  },
})

export const { setProjects } = projects.actions
export default projects.reducer
