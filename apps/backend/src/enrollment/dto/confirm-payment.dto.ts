import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class ConfirmPaymentDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsOptional()
  @Matches(/^\d{11}$/, {
    message: 'OIB mora sadržavati točno 11 znamenki.',
  })
  oib?: string;
}
