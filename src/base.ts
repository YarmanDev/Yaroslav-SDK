import fetch from "isomorphic-fetch";

export interface Config {
  API_KEY: string;
  BASE_URL: string;
}

export abstract class Base {
  private API_KEY: string;
  private BASE_URL: string;

  constructor(config: Config) {
    this.API_KEY = config.API_KEY;
    this.BASE_URL = config.BASE_URL;
  }

  protected async fetchReq<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.BASE_URL}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.API_KEY}`,
    };

    const config = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
