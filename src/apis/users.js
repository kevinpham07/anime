import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDY3YTM0NmFjOGE1MTZiZDI4ZDlkYzYiLCJpYXQiOjE2MTc0MDQ3NDJ9.FpeuO293lafB34HyJOSrwOrqIUG0veKq15GKlFkOS2g'
    }
})