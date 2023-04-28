import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'stepgt@mail.ru',
  })
  email: string;

  @ApiProperty({
    default: 'stepGT',
  })
  fullName: string;

  @ApiProperty({
    default: '777',
  })
  password: string;
}
