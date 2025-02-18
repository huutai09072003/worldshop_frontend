import { Globals } from "../Context";
export const USERLOGIN = '@APP/USERLOGIN'
export const USERLOGOUT = '@APP/USERLOGOUT'
export const STOREPROFILE = '@APP/STOREPROFILE'
export const ADD_TOAST = '@APP/ADD_TOAST'
export const SET_CURRENT_SPACE = '@APP/SET_CURRENT_SPACE'

export const logIn = () => {
	return {
		type: USERLOGIN,
		payload: {
			loggedin: true,
		},
	}
}

export const logOut = (needRedirect=true) => {
	// Globals.Cache.deleteStorage(Globals.TokenKey)
	// Globals.Cache.deleteCookie(Globals.TokenKey)

	// Globals.Cache.deleteCookie(Globals.New_TokenKey)
	// Globals.Cache.deleteStorage(Globals.New_TokenKey)

	// Globals.Cache.deleteCookie(Globals.New_TokenKey_Expiry)
	// Globals.Cache.deleteStorage(Globals.New_TokenKey_Expiry)

	// Globals.Cache.deleteCookie(Globals.New_TokenKey_Expiry)
	// Globals.Cache.deleteStorage(Globals.New_TokenKey_Expiry)

	// Globals.Cache.deleteCookie(Globals.REFRESH_TOKEN)
	// Globals.Cache.deleteStorage(Globals.REFRESH_TOKEN)

	// Globals.Cache.deleteCookie(Globals.REFRESH_TOKEN_EXPIRY)
	// Globals.Cache.deleteStorage(Globals.REFRESH_TOKEN_EXPIRY)

	// Globals.Cache.deleteCookie(Globals.USERPROFILE)
	// Globals.Cache.deleteStorage(Globals.USERPROFILE)

	// Globals.Cache.deleteCookie(Globals.USERSELECTEDSPACE)
	// Globals.Cache.deleteStorage(Globals.USERSELECTEDSPACE)

	// Globals.Cache.deleteCookie(Globals.Sensitive_Data_Column)
	// Globals.Cache.deleteStorage(Globals.Sensitive_Data_Column)

	localStorage.setItem('logoutEvent', Date.now());

	if (needRedirect) {
		window.location.href = '/login'
	}

	return {
		type: USERLOGOUT,
		payload: {
			loggedin: false,
		},
	}
}

let toastId = 0

export default function createToast(options) {
    return {
        ...options,
        id: toastId++,
    }
}

export const addToast = (options = {}) => {
    return {
        type: ADD_TOAST,
        payload: createToast(options),
    }
}

export const removeToast = id => {
    return {
        type: REMOVE_TOAST,
        payload: id,
    }
}

export const setCurrentSpace = space => {
	return {
		type: SET_CURRENT_SPACE,
		payload: space,
	}
}