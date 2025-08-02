// src/utils/tokenUtils.ts
export function getTokenExpiration(token: string): number | null {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000; // convert to ms
  } catch (e) {
    return null;
  }
}
