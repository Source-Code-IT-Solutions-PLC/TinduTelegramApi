export interface IAccount {
  _id: string;
  chatId: number;
  name: string;
  gender: string;
  age: number;
  country: string;
  image: string;
  city: string;
  is_active: boolean;
  is_verified: boolean;
  title:string,
  username:string,
  created_at: string;
  updated_at: string;
}
export interface UserStats{
  totalUsers: number;
  activeUsers: number;
    title: string;
    value: string;
    currency?: string; // Optional property
    frequency: string;
    percentage: string;
    percentageClass: string;
}
 export interface IAccountInput {
  chatId: number;
  name: string;
  gender: string;
  age: number;
  country: string;
  image: string;
  city: string;
}
export interface IUser {
  _id: string;
  chatId: number;
  age: number;
  city: string;
  country: string;
  image: string;
  name: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  free_match_count: number;
  is_active: true;
  coin: number;
  gift: number;
}
