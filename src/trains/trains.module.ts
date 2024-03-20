import { Module } from '@nestjs/common';
import { TrainsService } from './trains.service';
import { TrainsController } from './trains.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TrainsController],
  providers: [TrainsService, PrismaService],
})
export class TrainsModule {}
