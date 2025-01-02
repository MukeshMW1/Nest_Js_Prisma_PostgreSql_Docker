import { HttpException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PostsService } from 'src/post/posts.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class CommentService {


  constructor(private postService:PostsService,
  private prismaService:PrismaService
  ){}
  async create(id:number,createCommentDto: CreateCommentDto) {


const findPost = await this.prismaService.post.findUnique({where:{id}})
if(!findPost) throw new HttpException('Post was not found',404)
  return this.prismaService.comment.create({data: {
    content: createCommentDto.content,
     postId:id


  }})


}








async  findAllPostComments(id:number) {
  const findPost = await this.prismaService.post.findUnique({where:{id},include:{
    comment:true
  }})
  if(!findPost) throw new HttpException('Post was not found',404)
if(!findPost.comment) throw new HttpException('There are not comments fo this post',404);
  return findPost.comment;




  }



















  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
