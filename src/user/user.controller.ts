import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateSettingDto } from "./dto/update-setting.dto";
import { Jwtgurad } from "src/auth/guard/jwt-auth.guard";

@Controller('api/users')
export class UserController{
constructor(private userService:UserService){}   



@Post('register')
@UsePipes(ValidationPipe)
createUser(@Body() createUserDto:CreateUserDto){
return this.userService.createUser(createUserDto)
}





@UseGuards(Jwtgurad)
@Get('profile')
async getUsers(@Req() req){
    return this.userService.getUsers(req.user.username);
}




@UseGuards(Jwtgurad)
@Patch('profile')
updateUserById(@Req() req,@Body() data:UpdateUserDto ){
return this.userService.updateUser(req.user.username,data);
}











@Get('get/:id')
async getUserById(@Param('id',ParseIntPipe) id:number){
    
   const data =await this.userService.getUserById(id);
   if(!data){
       throw new HttpException("Data not found or Id misttyped",404);
}
return data;
}





@Delete('delete/:id')
 deleteUserById(@Param('id',ParseIntPipe) id:number){
 
    return this.userService.deleteUserById(id);

}

// @Get('O')
// findO(@Body() {username}:any){
//     console.log('Received username:', username);
// return this.userService.findOne(username)
// }


// @Patch('update/:id/setting')
// updateUserSettingByUserId(@Param('id',ParseIntPipe) id:number, @Body() settingData:UpdateSettingDto){
//     return this.userService.updateUserSettingByUserId(id,settingData)
// }

}