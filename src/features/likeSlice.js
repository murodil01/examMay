import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedItems: [], 
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const index = state.likedItems.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.likedItems.splice(index, 1); // Remove item if it's already liked
      } else {
        state.likedItems.push(action.payload); 
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
