import { 
    Body, 
    Controller, 
    Get, 
    Param, 
    ParseIntPipe, 
    Post, 
    UploadedFile, 
    UseInterceptors, 
    UsePipes, 
    ValidationPipe, 
    NotFoundException,
    ParseFilePipe,
    MaxFileSizeValidator,
    FileTypeValidator,
    ParseFilePipeBuilder,
    HttpStatus, 
   
} 
from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import {  FileInterceptor } from "@nestjs/platform-express";
import { Express } from 'express'

@Controller('api/posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postsService.createPost(createPostDto);
    }

    @Get()
    getAllPosts() {
        return this.postsService.getAllPosts();
    }

    @Get(':id')
    async getPostById(@Param('id', ParseIntPipe) id: number) {
        const post = await this.postsService.getPostById(id);
        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }

    
    
    @Post('upload')
    @UseInterceptors(FileInterceptor('file') )
    uploadFile(@UploadedFile(new ParseFilePipeBuilder()
    .addFileTypeValidator({
        fileType: /(jpg|jpeg|png)$/,
    })
    .build({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
    }),
) file: Express.Multer.File) {
        console.log(file);
    }
}



// @Post('group')
// @UsePipes(ValidationPipe)
// createGroupPost(@Body() {userIds,...createPostDto}:GroupPostDto){
// return this.postsService.createGroupPost(userIds,createPostDto)
// }

// @Get('group')
// getAllGroupPosts()
// {
//   return this.postsService.getAllGroupPosts()
// }


