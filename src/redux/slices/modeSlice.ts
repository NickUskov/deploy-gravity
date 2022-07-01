import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModeType = 'auto' | 'manual'

export interface ModeState {
    value: ModeType
}

const initialState: ModeState = {
    value: 'auto'
}

export const modeSlice = createSlice({
    name: 'modeSlice',
    initialState,
    reducers: {
        toggleMode: (state, action: PayloadAction<ModeType>) => {
            state.value = action.payload
        },
    }
})

export const { toggleMode } = modeSlice.actions

export default modeSlice.reducer