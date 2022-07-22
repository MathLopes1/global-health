import {
  IsNotEmpty, IsOptional, IsString, MaxLength, MinLength,
} from 'class-validator';

export default class UpdatePatientRequest {
    @IsOptional()
    @IsString()
      name?: string;

    @IsOptional()
    @IsString()
    @MinLength(24)
    @MaxLength(24)
      healthInsuranceCardId?: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
      address?: string;

    constructor(props: UpdatePatientRequest) {
      Object.assign(this, props);
    }
}
