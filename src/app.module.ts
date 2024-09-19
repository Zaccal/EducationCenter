import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LessonModule } from './lesson/lesson.module';
import { PaginationModule } from './pagination/pagination.module';
import { UserModule } from './user/user.module';
import { HomeworkModule } from './homework/homework.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [AuthModule, LessonModule, PaginationModule, UserModule, HomeworkModule, QuestionModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
