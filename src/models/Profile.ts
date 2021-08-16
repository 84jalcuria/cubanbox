export default interface Profile {
  id: string;
  avatar_url: string;
  fitness_level: number;
  sex: 'male' | 'female';
  teacheer: boolean;
  updated_at: Date;
  username: string;
  email: string;
}
