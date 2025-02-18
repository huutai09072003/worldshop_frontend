import {
    USERLOGIN,
    USERLOGOUT,
    STOREPROFILE,
    ADD_TOAST,
    SET_CURRENT_SPACE,
} from './appActions.jsx'

export const userLoggedIn = (state = '', {type, payload}) => {
	switch (type) {
		case USERLOGIN:
			return payload.loggedin

		case USERLOGOUT:
			return payload.loggedin

		default:
			return state
	}
}

export const userProfile = (state = {}, {type, payload}) => {
	switch (type) {
		case STOREPROFILE:
			return payload.profile

		default:
			return state
	}
}

export const toasts = (state = [], action) => {
	const {payload, type} = action

	switch (type) {
		case ADD_TOAST:
			return [payload, ...state]

		case REMOVE_TOAST:
			return state.filter(toast => toast.id !== payload)

		default:
			return state
	}
}

export const currentSpaceReducer = (state = {}, action) => {
	const {payload, type} = action

	switch (type) {
		case SET_CURRENT_SPACE:
			return payload

		default:
			return state
	}
}
