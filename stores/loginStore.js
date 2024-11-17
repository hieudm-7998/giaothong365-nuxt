import { defineStore } from "pinia";

export const DEFAULT = "default";
export const NO_VIOLATION = "no-violation";
export const HAS_VIOLATION = "has-violation";

export const useLoginType = defineStore("loginType", {
  state: () => ({
    loginType: DEFAULT,
    isRegisterSuccess: false,
    isLoggedIn: false,
  }),
  actions: {
    toggleLoginType(type) {
      this.loginType = type;
    },
    toggleRegisterSuccess(status) {
      this.isRegisterSuccess = status;
    },
    toggleIsLoggedIn(status) {
      this.isLoggedIn = status;
    },
  },
});
