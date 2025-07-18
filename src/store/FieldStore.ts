import { create } from 'zustand'
import type { Widget } from '@/types/common'
import baseFields from '@/assets/baseFields'

interface FieldStore {
    baseFields: Widget[]
    businessFields: Widget[]
    customFields: Widget[]
    setBaseFields: (baseFields: Widget[]) => void
    setBusinessFields: (businessFields: Widget[]) => void
    setCustomFields: (customFields: Widget[]) => void
}

const useFieldStore = create<FieldStore>((set) => ({
    baseFields: baseFields,
    businessFields: [],
    customFields: [],
    setBaseFields: (baseFields: Widget[]) => set({ baseFields }),
    setBusinessFields: (businessFields: Widget[]) => set({ businessFields }),
    setCustomFields: (customFields: Widget[]) => set({ customFields })
}))

export default useFieldStore;