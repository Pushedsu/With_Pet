import { Module } from '@nestjs/common';
import { DiagnosisController } from './controller/diagnosis.controller';
import { DiagnosisService } from './service/diagnosis.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diagnosis, Pet } from './entities/diagnosis.entity';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'src/auth/auth.module';
import { memoryStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
      storage: memoryStorage(),
    }),
    TypeOrmModule.forFeature([Pet, Diagnosis]),
    AuthModule,
  ],
  controllers: [DiagnosisController],
  providers: [DiagnosisService],
  exports: [TypeOrmModule],
})
export class DiagnosisModule {}
