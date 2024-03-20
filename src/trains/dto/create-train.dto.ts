import { IsDefined, IsString } from "class-validator";

export class CreateTrainDto {
  @IsDefined()
  @IsString()
  from_where:string;

  @IsDefined()
  @IsString()
  to_where:string;

  @IsDefined()
  @IsString()
  departure:string;

  @IsDefined()
  @IsString()
  arrival:string;
}
