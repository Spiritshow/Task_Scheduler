import {create} from 'zustand'

export const useUser = create((set, get) => ({
    data: {name: "",image: ""},
    addData: (name, image) => {
        set({data: {name, image}});
    }
}))