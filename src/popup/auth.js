export const AUTH_CONFIG = {
  AUTH_STORAGE_KEY: "threadsai_auth",
  LAST_TG_ID_STORAGE_KEY: "threadsai_last_tg_id",
};

const UNLIMITED_USER = {
  tg_id: 1,
  name: "Пользователь",
  username: "local_user",
  plan: "pro_user",
  comments_left: Number.MAX_SAFE_INTEGER,
  parsing_left: Number.MAX_SAFE_INTEGER,
  authenticated: true,
};

let currentUser = { ...UNLIMITED_USER };
let errorMessage = "";

const noOp = () => {};
const trueAsync = async () => true;

const authCore = {
  async init() {
    await chrome.storage.local.set({ [AUTH_CONFIG.AUTH_STORAGE_KEY]: currentUser });
    return { ...currentUser };
  },

  async authenticate() {
    return { success: true, user: { ...currentUser } };
  },

  async validate() {
    return { success: true, user: { ...currentUser } };
  },

  getUser() {
    return { ...currentUser };
  },

  isAuthenticated() {
    return true;
  },

  async saveUser(userData = {}) {
    currentUser = { ...UNLIMITED_USER, ...userData, authenticated: true, plan: "pro_user" };
    await chrome.storage.local.set({ [AUTH_CONFIG.AUTH_STORAGE_KEY]: currentUser });
    return { ...currentUser };
  },

  async logout() {
    currentUser = { ...UNLIMITED_USER };
    await chrome.storage.local.set({ [AUTH_CONFIG.AUTH_STORAGE_KEY]: currentUser });
    return true;
  },

  setErrorMessage(message) {
    errorMessage = String(message || "");
  },

  getErrorMessage() {
    return errorMessage;
  },

  clearError() {
    errorMessage = "";
  },
};

export const auth = new Proxy(authCore, {
  get(target, prop, receiver) {
    if (Reflect.has(target, prop)) {
      return Reflect.get(target, prop, receiver);
    }

    if (typeof prop === "string") {
      if (prop.startsWith("get")) {
        return () => ({ ...UNLIMITED_USER });
      }
      if (prop.startsWith("is") || prop.startsWith("has")) {
        return () => true;
      }
      if (prop.startsWith("set") || prop.startsWith("clear") || prop.startsWith("show") || prop.startsWith("hide")) {
        return noOp;
      }
      if (prop.startsWith("save") || prop.startsWith("load") || prop.startsWith("auth") || prop.startsWith("check") || prop.startsWith("validate")) {
        return trueAsync;
      }
    }

    return noOp;
  },
});
