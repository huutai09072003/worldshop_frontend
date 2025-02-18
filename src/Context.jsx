import axios from "axios"

let ENDPOINTVERSION = 'v1'
let NEW_API_URL = process.env.NEW_API_URL
let ACTION_CABLE_URL = process.env.ACTION_CABLE_URL

export const Globals = {
    ENDPOINTVERSION: ENDPOINTVERSION,
    NEW_API_URL: NEW_API_URL,
    ACTION_CABLE_URL: ACTION_CABLE_URL,
    signupurl: `${ssurl}/register/`,
	signinurl: `${ssurl}/login/`,
    _Axios: axios,
    currentSpace: JSON.parse(Cache.get(USERSELECTEDSPACE)),
    currentUserId: JSON.parse(Cache.get(USERPROFILE))?.id,
    getProfile: () => {
		const params = {}
		if (!isNil(Globals.SELECTEDSPACEID)) {
			params.space_id = Globals.SELECTEDSPACEID
		}

		return new Promise((resolve, reject) => {
			Globals.New_Axios({logOutWhenUnauthorized: false})
				.get(`${Globals.NEW_API_URL}/v1/me`, {params})
				.then(response => {
					return resolve(response.data)
				})
				.catch(error => {
					return reject(error)
				})
		})
	},
}
