import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    filterQuery: string; 
}

const initialState: FilterState = {
    filterQuery: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterQuery(state, action: PayloadAction<string>) {
            state.filterQuery = action.payload;
        },
    },
});

export const { setFilterQuery } = filterSlice.actions;
export default filterSlice.reducer;