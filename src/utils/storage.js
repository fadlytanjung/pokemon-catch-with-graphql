const COUNTDOWN_STORAGE = 'tokomon_web_countdown';
const DEFAULT_LANGUAGE = 'tokomon_web_default_language';
const EXPIRE_TIME_STORAGE = 'tokomon_web_expire_time';
const GUEST_ADDRESS_STORAGE = 'tokomon_web_guest_address';
const SESSION_TIME = 'tokomon_web_session_time';
const TOKEN_STORAGE = 'tokomon_web_access_token';
const USER_DATA_STORAGE = 'tokomon_web_user_data';

export function setToken(value) {
  localStorage.setItem(TOKEN_STORAGE, value);
}

export function getToken() {
  return localStorage.getItem(TOKEN_STORAGE);
}

export function clearStorages() {
  localStorage.removeItem(TOKEN_STORAGE);
  localStorage.removeItem(EXPIRE_TIME_STORAGE);
  localStorage.removeItem(USER_DATA_STORAGE);
  localStorage.removeItem(GUEST_ADDRESS_STORAGE);
  localStorage.removeItem(SESSION_TIME);
  localStorage.removeItem(COUNTDOWN_STORAGE);
  localStorage.removeItem(DEFAULT_LANGUAGE);
}

export function setExpireTime(value) {
  localStorage.setItem(EXPIRE_TIME_STORAGE, value * 1000);
}

export function checkExpireTime() {
  const time = new Date().getTime();
  const expire = localStorage.getItem(EXPIRE_TIME_STORAGE) || 0;

  return time > expire;
}

export function setUserData(value) {
  localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(value));
}

export function getUserData() {
  const retval = localStorage.getItem(USER_DATA_STORAGE);

  return JSON.parse(retval) || '';
}

export function setGuestAddress(value) {
  localStorage.setItem(GUEST_ADDRESS_STORAGE, JSON.stringify(value));
}

export function getGuestAddress() {
  const retval = localStorage.getItem(GUEST_ADDRESS_STORAGE);

  return JSON.parse(retval) || '';
}

export function clearGuestAddress() {
  localStorage.removeItem(GUEST_ADDRESS_STORAGE);
}

export function setSessionTime(value) {
  localStorage.setItem(SESSION_TIME, value);
}

export function getSessionTime() {
  const retval = localStorage.getItem(SESSION_TIME);

  return parseInt(retval) || 0;
}

export function setCountdown(value) {
  localStorage.setItem(COUNTDOWN_STORAGE, value);
}

export function getCountdown() {
  return localStorage.getItem(COUNTDOWN_STORAGE);
}

export function clearCountdown() {
  localStorage.removeItem(COUNTDOWN_STORAGE);
}

export function setDefaultLanguage(value) {
  localStorage.setItem(DEFAULT_LANGUAGE, value);
}

export function getDefaultLanguage() {
  return localStorage.getItem(DEFAULT_LANGUAGE) || 'ID';
}
