import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "be46b1ee-801b-4ae7-b08a-48e2a57783eb",
  },
});

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getFollowingUsers() {
    return instance.get(`users?count=100`).then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`/follow/${userId}`).then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`/follow/${userId}`)
      .then((response) => response.data);
  },
};

export const AuthAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const ProfileAPI = {
  getProfile(profileId) {
    return instance
      .get(`profile/${profileId}`)
      .then((response) => response.data);
  },
};
