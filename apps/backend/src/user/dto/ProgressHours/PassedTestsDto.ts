import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class PassedTestsDto {
  @IsNumber()
  @Type(() => Number)
  theory: number;

  @IsNumber()
  @Type(() => Number)
  driving: number;

  @IsNumber()
  @Type(() => Number)
  firstAid: number;
}
