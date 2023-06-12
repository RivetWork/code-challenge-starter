import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileState, makeFakeUserList } from './profileUtils'
import { RootState } from '../../store';



const initialState = {
  profiles: [],
  inFocus: ''
} as ProfileState;

export const fetchProfiles = createAsyncThunk('users/fetchUsers', async () => {

  const profiles = makeFakeUserList();
  console.log('got some data', profiles);

  return profiles;

  // fetch("https://codechallenge.rivet.work/api/v1/profile/1", {
  //   headers: {
  //     "token": ""
  //   }
  // })
  // .then((response) => response.json())
  // .then((data) => {
  //   // do something with the data
  //   console.log('got some data', data);
  // })
  
})

export const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(fetchProfiles.fulfilled, (state, action) => {
      return {
        ...state,
        profiles: action.payload
      }
    })
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = profileSlice.actions
export const profileList = (state: RootState) => state.profile.profiles;

export default profileSlice.reducer