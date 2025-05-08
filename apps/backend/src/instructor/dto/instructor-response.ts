import { UserResponseDto } from '@/user/dto/user-response.dto';
import { PartialType } from '@nestjs/mapped-types';

export class InstructorResponseDto extends PartialType(UserResponseDto) {}
