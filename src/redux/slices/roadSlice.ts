import { createSlice } from "@reduxjs/toolkit";

export interface GateStateType {
    value: {
        rightGate: boolean;
        leftGate: boolean;
    }
}

const initialState: GateStateType = {
    value: {
        rightGate: false,
        leftGate: false,
    }
}

export const roadSlice = createSlice({
    name: 'roadSlice',
    initialState,
    reducers: {
        openRightGate: (state) => {
            console.log('opening right gate')
            state.value.rightGate = true
        },
        openLeftGate: (state) => {
            state.value.leftGate = true
        },
        closeRightGate: (state) => {
            console.log('closing right gate')
            state.value.rightGate = false
        },
        closeLeftGate: (state) => {
            state.value.leftGate = false
        }
    }
})

export const {
    openRightGate,
    openLeftGate,
    closeRightGate,
    closeLeftGate
} = roadSlice.actions

export default roadSlice.reducer