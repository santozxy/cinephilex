export interface RequestToken {
  request_token: string;
  success: boolean;
  expires_at: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Login extends RequestToken {}

export interface Session {
  success: boolean;
  session_id: string;
  expires_at: string;
}

export interface User {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string | null;
    };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}
