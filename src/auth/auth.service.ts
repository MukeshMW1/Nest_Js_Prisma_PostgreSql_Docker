import { HttpException, Injectable, Post } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";
// const fakeUsers=[
//   {
//     id:1,
//     email:'kite@gmail.com',
//     password:'123'
//   },
//   {
//     id:2,
//     email:'lite@gmail.com',
//     password:'456'
//   }
// ]


@Injectable()
export class AuthService{
constructor(
  private userService:UserService,
  private jwtService:JwtService
){}

  async validateUser({username, password}: CreateAuthDto)
{
  console.log("auth services started")
 const findUser = await this.userService.findOne(username)
 console.log(findUser);
 if(!findUser) throw new HttpException("username was not found",404);
 if(password === findUser.password){
  const {password,...result} = findUser
  console.log(result)
  return result
 }
}
async login(user:any)
{
  const payload = await {username:user.username,sub:user.id}
  console.log("Login Payload",payload)
  return{
    accessToken:this.jwtService.sign(payload)
  }
}
} 