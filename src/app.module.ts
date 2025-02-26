import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Environment } from './constants';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { TagsModule } from './tags/tags.module';

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
        autoLoadEntities: true,
        synchronize: process.env.NODE_ENV === Environment.DEVELOPMENT,
        port: 5432,
        username: 'postgres',
        password: '123',
        host: 'localhost',
        database: 'nestjs-blog',
      }),
    }),
    MetaOptionsModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
