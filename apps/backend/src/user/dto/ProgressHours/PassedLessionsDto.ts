import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class PassedLessonsDto {
  @IsNumber()
  @Type(() => Number)
  firstAid: number;

  @IsNumber()
  @Type(() => Number)
  theory: number;

  @IsNumber()
  @Type(() => Number)
  driving: number;
}
