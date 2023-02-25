import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = '';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      // console.log(action);
      console.log(state);
    },
    deleteContact(state, action) {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
