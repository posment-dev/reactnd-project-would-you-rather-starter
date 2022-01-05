export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export function setActiveUser (userId) {
    return {
        type: SET_ACTIVE_USER,
        userId
    }
}