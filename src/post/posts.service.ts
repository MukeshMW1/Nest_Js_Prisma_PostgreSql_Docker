import { HttpException, Injectable, Param, ParseIntPipe } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PostsService{

  constructor(private prismaService:PrismaService){}
  createPost(data:Prisma.PostCreateWithoutCommentInput){
return this.prismaService.post.create({data})
  }

  getAllPosts(){
    return this.prismaService.post.findMany({include:{
      comment:true
    }})
  }


 async  getPostById(id:number){
const findPost = await this.prismaService.post.findUnique({where:{id}})
if(!findPost) throw new HttpException("Post associted with the id not found",404)
  return this.prismaService.post.findFirst({where:{id}})
  }






  


// createGroupPost(userIds:number[],data:Prisma.GroupPostCreateWithoutUsersInput){
//   return this.prismaService.groupPost.create({data:
//     {
//       ...data,
//       users:{
//         create:userIds.map((userId)=>({userId}))
//       }
//     }
//   })
// }

// getAllGroupPosts(){
//   return this.prismaService.groupPost.findMany({
//     include:{
//       users:{
//         select:{
//           user:true
//         }
//       }
//     }
//   })
// }

} 