export interface JwtResponse {
  dataUser: {
    id: number;
    usuario: string;
    password: string;
    accessToken: string;
    expiresIn: string;
  };
}
