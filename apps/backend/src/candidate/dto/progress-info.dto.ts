import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class ProgressInfoDto {
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
