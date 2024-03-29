import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered : (state) => {
          state.numOfIcecreams--;
        },

        restocked : (state, action) => {
          state.numOfIcecreams += action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(ordered, state => {
            state.numOfIcecreams--
        })
      }
})

export default icecreamSlice.reducer
export const {ordered, restocked} = icecreamSlice.actions