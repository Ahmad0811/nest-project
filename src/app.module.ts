import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [,MongooseModule.forRoot(''),UserModule, PostModule, LikeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
