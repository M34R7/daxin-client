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
      const httpsProjects = payload.payload.map(project => {
        if (project.previewImagePath.startsWith('http://')) {
          project.previewImagePath = project.previewImagePath.replace(
            'http://',
            'https://'
          )
        }
        project.imagePathsSection1 = project.imagePathsSection1.map(
          sliderOne => {
            if (sliderOne.startsWith('http://')) {
              return sliderOne.replace('http://', 'https://')
            }
          }
        )
        if (Array.isArray(project.imagePathsSection2)) {
          project.imagePathsSection2 = project.imagePathsSection2.map(
            sliderTwo => {
              if (sliderTwo.startsWith('http://')) {
                return sliderTwo.replace('http://', 'https://')
              }
            }
          )
        }

        return project
      })
      console.log(httpsProjects)
      state.projects = httpsProjects
    })
  },
})

export const { setProjects } = projects.actions
export default projects.reducer
