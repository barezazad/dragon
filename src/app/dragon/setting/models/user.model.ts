export interface Users {
  id: number | null;
  username: string;
  role: string;
  lang: string;
  password: string;
  email: string;
  status: string;
  role_id: number;
}
export interface UsersList {
  data: {
    list: Users[];
    count: number;
  };
}
