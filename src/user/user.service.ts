import { Body, HttpException, Injectable, Post } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService{
constructor(private prismaService:PrismaService ){}





async findOne(username:string){
    
console.log(username)
const user= await this.prismaService.user.findFirst({where:{username
}})
if(!user) throw new HttpException("There was an error finding the user in userservice",404);
return user;
}





createUser(data:Prisma.UserCreateInput){
return this.prismaService.user.create({
    data:{
    ...data,
   
}
 })



 
}

async getUsers(username:string){
return await this.prismaService.user.findUnique({where:{username}});

}


getUserById(id:number){
return this.prismaService.user.findUnique({where:{id}})
}


async updateUser(username:string,data:Prisma.UserUpdateInput){

    const findUser =await this.prismaService.user.findUnique({where:{username}});
    if(!findUser){
        throw new HttpException('User not found',404);

    }
return this.prismaService.user.update(
    {where:{username},data }
);

}


async deleteUserById(id:number)
{
    const findUser = await this.getUserById(id);
    if(!findUser) throw new HttpException('Id do not match the data in the database',404);
return this.prismaService.user.delete({where:{id}});
}


// async updateUserSettingByUserId(userId:number,data:Prisma.UserSettingUpdateInput){
// const findUser=await this.getUserById(userId);
// if(!findUser) throw new HttpException('Error finding the user',404);
// if(!findUser.userSetting) throw new HttpException('Bad Request',400)

// return this.prismaService.userSetting.update({where:{userId},data})


// }

}



// userSetting:{
//     create:{
//         notificationsOn:false,
//         smsEnabled:true
//     }

// }
