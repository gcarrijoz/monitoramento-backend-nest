import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { SigninDto } from './dto/signin.dto';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';



@Injectable()
export class UserService {

    constructor(private prisma: PrismaService){}

    private createToken(user: any){
        
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error('JWT_SECRET não definido nas variáveis de ambiente');
        }

        const payload = {email: user.email, id: user.id};

        return {
            access_token: jwt.sign(payload, secret, { expiresIn: '7d'})
        }
    }

    async signup(data: UserDto) {
        const existingUser = await this.prisma.user.findUnique({where: {email: data.email}});

        if (existingUser) {
            throw new ConflictException('Email já está em uso');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await this.prisma.user.create({
            data: {
                ...data, password: hashedPassword
            }
        });

        const token = this.createToken(user);

        const {password, ...userWithoutPassword} = user;

        return {
            user: userWithoutPassword,
            token: token.access_token
        }

    }

    async signin(data: SigninDto) {
        const user = await this.prisma.user.findUnique({where: {email: data.email}});

        if (!user){
            throw new UnauthorizedException('Usuário ou senha inválidos');
        }

        const isPasswordValid = await bcrypt.compare(data.password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Usuário ou senha inválidos');
        }

        const token = this.createToken(user);

        const {password, ...userWithoutPassword} = user;

        return {
            user: userWithoutPassword,
            token: token.access_token
        }
    }

    
}
