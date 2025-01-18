import {create} from 'zustand'

type StateCreator = {
    navigation: string | null;
    setNavigation: (nav: string) => void;
}

export const useStoreNav =create<StateCreator>((set) => ({
    navigation: null,
    setNavigation: (nav) => set({navigation: nav})
}))