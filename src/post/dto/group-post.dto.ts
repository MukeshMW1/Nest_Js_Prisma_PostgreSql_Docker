import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class GroupPostDto{

@IsString()
@IsNotEmpty()
@MaxLength(200)
title:string
@IsString()
@IsNotEmpty()
descrition:string
@IsNumber({},{each:true,})
@IsNotEmpty({each:true})
@IsArray()
@ArrayNotEmpty()
userIds:number[]

}