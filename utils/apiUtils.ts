import axios from 'axios';

export async function isUserCreated(email: string): Promise<boolean> {
    const res = await axios.get(`https://api.example.com/users?email=${email}`);
    return res.status === 200 && res.data.length > 0;
}
