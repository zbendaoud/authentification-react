import { bootstrapAppData } from "../context/auth-context";
import { getToken } from "../provider-auth";
import * as api from "./apiWithToken";

async function fetchTodoList() {
  return "salut";
}

function getUser() {
  return api.GET("users");
}
export { fetchTodoList, getUser };
