import {prisma} from "../../database/prisma"
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

class AuthRepository {
    public async login({ email, password }) {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
    
        if (!user) {
            return { status: 401, message: 'Credenciais inválidas', data: null };
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return { status: 401, message: 'Credenciais inválidas', data: null };
        }
        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '8h' });

        return { status: 20, message: 'Credenciais inválidas', data: user , token: token };
    }
}

export default new AuthRepository();