// src/services/authService.ts

import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL || "https://your-api-url.com/api";

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
  role: string;
}

export const refreshToken = async (refreshToken: string): Promise<RefreshResponse> => {
  try {
    const response = await axios.post<RefreshResponse>(`${API_URL}/auth/refresh`, {
      refreshToken,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw error;
  }
};
