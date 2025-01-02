import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./strategy/local.strategy";
import { JwtStrategy } from "./strategy/jwt-strategy";
import { UserService } from "src/user/user.service";
import * as dotenv from 'dotenv';
dotenv.config()

@Module({
  imports:[JwtModule.register({

    secret:process.env.JWT_SECRET,
    signOptions:{expiresIn:'1h'}
  
  
  })
  ],

  exports:[JwtStrategy],
  controllers:[AuthController],
  providers:[AuthService,LocalStrategy,JwtStrategy,UserService,]
})

export class AuthModule{

}