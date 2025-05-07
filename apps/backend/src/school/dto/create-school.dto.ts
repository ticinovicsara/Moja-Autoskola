import { Decimal } from '@prisma/client/runtime/library';
import { Type } from 'class-transformer';
import {
  IsDecimal,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSchoolDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsEmail()
  email: string;

  @IsNumber()
  enrollmentFee: number;

  @IsOptional()
  @IsString()
  info: string | null;

  @IsOptional()
  @IsString()
  websiteUrl: string | null;

  @IsOptional()
  @IsString()
  imageUrl: string | null;
}
