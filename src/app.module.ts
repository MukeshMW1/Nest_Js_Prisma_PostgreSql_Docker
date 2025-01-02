import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './post/posts.module';
import { CommentModule } from './comment/comment.module';
import { MulterModule } from '@nestjs/platform-express';



@Module({
  imports: [ PostsModule, AuthModule, PrismaModule, UserModule, CommentModule, MulterModule.register({ dest: './uploads' })],
  controllers: [],
  providers: [],
})
export class AppModule {}
