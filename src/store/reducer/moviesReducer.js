import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
// const getdata=createAsyncThunk(
//   'movies/getdata',
// async () => {
//   const response = await userAPI.fetchById(userId)
//   return response.data
// }
// )
export const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
    movies:[],
    favorites:[],
    listInput: '',
    isDisabled: false
  },
  
  reducers: {
   setMovies: (state, {payload})=>{
     state.movies=payload
   },
   setFavorite: (state, {payload})=>{
     if(state.favorites.map(item=>item.imdbID).includes(payload.imdbID)==false){
        state.favorites=[...state.favorites, payload]
     }
   },
   deleteFavorites: (state, {payload})=>{
     state.favorites=state.favorites.filter(item=> item.imdbID !== payload)
   },
   changeInput: (state, {payload})=>{
     state.listInput=payload
   },
   setDisabled: (state, {payload})=>{
     state.isDisabled = !payload
   }
  }
})

export const { setMovies, setFavorite, deleteFavorites, changeInput, setDisabled } = moviesSlice.actions

export default moviesSlice.reducer
