export interface UserType {
  id: number;
  google_id: string;
  email: string;
  name: string | null;
  created_at: Date;
  last_login: Date;
}