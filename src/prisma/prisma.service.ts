import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,OnModuleDestroy{

onModuleInit() {
    this.$connect()
    .then(()=>
    {
        console.log('Database connected successfully')
     
    })
    .catch((err)=>
    {
        console.log(err);
    })
}
onModuleDestroy() {
    this.$disconnect()
    .then(()=>
    {
        console.log('Database disconnected successfully')
     
    })
    .catch((err)=>
    {
        console.log(err);
    })
}


}

