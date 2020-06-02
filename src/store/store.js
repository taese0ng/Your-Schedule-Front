import {configureStore, createSlice} from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: {
    // list: [],
    tripDate: null,
    itineraryId : '',
  },
  reducers: {
    setTripDate:(state, action)=>{
      state.tripDate = action.payload;
    },
    setItineraryId:(state, action)=>{
      console.log(action.payload)
      state.itineraryId = action.payload;
    }
    // add: (state, action) => {
    //   state.list.push({ text: action.payload, id: Date.now() });
    // },
    // remove(state, action){
    //     for(var i = 0; i < state.list.length; i++){
    //         if(state.list[i].id === action.payload){
    //             state.list.splice(i,1);
    //         }
    //     }
    // },

    // remove: (state,action) => state.list.filter(toDo => toDo.id !== action.payload)
  },
});

export const {
    setTripDate,
    setItineraryId
    // add,
    // remove
} = toDos.actions;

export default configureStore({ reducer: toDos.reducer });