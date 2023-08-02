import { atom } from "recoil";

interface AuthModalState {
  isOpen: boolean;
  type: "sign-in" | "sign-up" | "forgot-password";
}

const initialAuthModalState: AuthModalState = {
  isOpen: false,
  type: "sign-in",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: initialAuthModalState,
});
