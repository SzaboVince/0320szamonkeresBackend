import { Injectable } from '@nestjs/common';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TrainsService {
  
  constructor(private readonly db:PrismaService){}

  create(createTrainDto: CreateTrainDto) {
    return this.db.train.create({
      data:createTrainDto
    });
  }

  findAll() {
    return this.db.train.findMany();
  }

  findOne(id: number) {
    return this.db.train.findFirst({
      where:{id}
    });
  }

  update(id: number, updateTrainDto: UpdateTrainDto) {
    return this.db.train.update({
      where:{id},
      data:updateTrainDto
    })
  }

  remove(id: number) {
    return this.db.train.delete({
      where:{id}
    });
  }
}
