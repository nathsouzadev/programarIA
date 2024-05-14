import { create } from 'zustand';

interface useContactStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useContactModal = create<useContactStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
