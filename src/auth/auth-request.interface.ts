interface AuthRequest extends Request {
    user: {
        userId: number;
    };
}
export default AuthRequest;