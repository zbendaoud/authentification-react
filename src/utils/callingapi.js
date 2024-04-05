import * as api from "./apiWithToken";

function getUser() {
  return api.GET("users");
}
export { getUser };
