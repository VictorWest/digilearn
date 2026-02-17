import { User } from "../shared/interface"

export const BASE_BACKEND_ROUTE = "http://localhost:3000"
export const BACKEND_REGISTER = `${BASE_BACKEND_ROUTE}/api/register`

export const createUserRequest = async ({ userData}: { userData: User }) => {
    const response = await fetch(BACKEND_REGISTER, ({
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    }))

    // console.log(response)

    if (!response.ok){
        return {
            ok: false,
            error: await response.json()
        }
    }

    return {
        ok: true,
        value: await response.json()
    }
}