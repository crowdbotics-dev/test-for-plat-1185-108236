import axios from "axios"
const testforplatAPI = axios.create({
  baseURL: "https://test-for-plat-1185-108236.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testforplatAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return testforplatAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return testforplatAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_stores_list(payload) {
  return testforplatAPI.get(`/api/v1/stores/`)
}
function api_v1_stores_create(payload) {
  return testforplatAPI.post(`/api/v1/stores/`, payload)
}
function api_v1_stores_retrieve(payload) {
  return testforplatAPI.get(`/api/v1/stores/${payload.id}/`)
}
function api_v1_stores_update(payload) {
  return testforplatAPI.put(`/api/v1/stores/${payload.id}/`, payload)
}
function api_v1_stores_partial_update(payload) {
  return testforplatAPI.patch(`/api/v1/stores/${payload.id}/`, payload)
}
function api_v1_stores_destroy(payload) {
  return testforplatAPI.delete(`/api/v1/stores/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return testforplatAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return testforplatAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testforplatAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testforplatAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testforplatAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testforplatAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testforplatAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testforplatAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return testforplatAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testforplatAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testforplatAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_stores_list,
  api_v1_stores_create,
  api_v1_stores_retrieve,
  api_v1_stores_update,
  api_v1_stores_partial_update,
  api_v1_stores_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
