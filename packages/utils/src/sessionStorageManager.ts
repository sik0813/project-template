
enum SessionStorageKey {
  TEMP_SESSION_KEY = 'temp_session_key',
}

export const getTempSessionKey = (): string => {
  const tmpSessionKey = get(SessionStorageKey.TEMP_SESSION_KEY) || '';
  return tmpSessionKey;
};

const get = (key: SessionStorageKey): string | null => {
  return window.sessionStorage.getItem(key);
};

const set = (key: SessionStorageKey, value: string): void => {
  return window.sessionStorage.setItem(key, value);
};

const remove = (key: SessionStorageKey): void => {
  return window.sessionStorage.removeItem(key);
};
