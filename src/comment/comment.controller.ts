import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';


@Controller('api/posts/')
export class CommentController {
  constructor(private readonly commentService: CommentService) {



  }

  @Post(':postId/comments')
   create(@Param('postId',ParseIntPipe) id:number,@Body() createCommentDto: CreateCommentDto) {
    return   this.commentService.create(id,createCommentDto);
  }

  @Get(':postId/comments')
  findAllPostComments(@Param('postId',ParseIntPipe) id:number) {
    return this.commentService.findAllPostComments(id);
  }

  













  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.commentService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
  //   return this.commentService.update(+id, updateCommentDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commentService.remove(+id);
  // }
}
