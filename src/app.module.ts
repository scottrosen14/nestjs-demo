import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Environment } from "./constants";

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        entities: [],
        synchronize: process.env.NODE_ENV === Environment.DEVELOPMENT,
        port: 5432,
        username: 'postgres',
        password: '123',
        host: 'localhost',
        database: 'nestjs-blog',
      })
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
