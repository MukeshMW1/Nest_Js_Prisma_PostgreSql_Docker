import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guard/local-auth.guard";




@Controller('api/users')
export class AuthController{
constructor(private authService:AuthService,
){}

@UseGuards(LocalAuthGuard)
@Post('login')
async login(@Request() req )
{
  console.log(req)
  return this.authService.login(req.user)
}






// @UseGuards(Jwtgurad)
// @Get('get')
// getProfile(@Request() req )
// {
//   return req.user
// }

}