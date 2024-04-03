import * as api from "./apiWithToken";

async function fetchTodoList() {
  return "salut";
}

function getUser() {
  return api.GET("users");
}
export { fetchTodoList, getUser };
