/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleResolver } from './article.resolver';
import { UserService } from 'src/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './article.schema';
import { User, UserSchema } from 'src/user/user.schema';

@Module({
  imports: [ MongooseModule.forFeature([
    { name: Article.name, schema: ArticleSchema },
    { name: User.name, schema: UserSchema }
  ]) ],
  providers: [ArticleService, ArticleResolver, UserService, ]
})
export class ArticleModule {}
