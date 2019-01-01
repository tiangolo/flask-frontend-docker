import { AdminState } from './state';

export const getters = {
    adminUsers: (state: AdminState) => state.users,
    adminRoles: (state: AdminState) => state.roles,
    adminOneUser: (state: AdminState) => (username: string) => {
        const filteredUsers = state.users.filter((user) => user.username === username);
        if (filteredUsers.length > 0) {
            return { ...filteredUsers[0] };
        }
    },
};
