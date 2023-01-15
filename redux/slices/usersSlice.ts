import { RootState } from './../store.js';
import { createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";
// Чтобы не хардкодить урлы, делаем модуль, в котором они создаются


interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  __v: number;
}

type Entities = {
  [index: number]: User
}


const userAdapter = createEntityAdapter<User>();

const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState(),
  reducers: {
    addUser: (state, actions: PayloadAction<{ ids: number[], entities: Entities }>) => {
      const { entities, ids } = actions.payload;
      state.entities = entities;
      state.ids = ids;
    },
    // addUsers: (state, actions) => {
    //   console.log(actions);
    //   // const { entities, ids } = actions.payload;
    //   // state.entities = entities;
    //   // state.ids = ids;
    // },
    addNewChannel: userAdapter.addOne,
    renameChannel: userAdapter.updateOne,
  },
});
export const selectors = userAdapter.getSelectors((state: RootState) => state.user);
export const { actions } = userSlice;
export default userSlice.reducer;