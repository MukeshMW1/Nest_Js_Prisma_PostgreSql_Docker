import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PostsService } from 'src/post/posts.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService,PostsService],
  imports:[]
})
export class CommentModule {}
