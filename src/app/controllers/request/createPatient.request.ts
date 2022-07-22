import {
  IsNotEmpty, IsString, MaxLength, MinLength,
} from 'class-validator';

export default class CreatePatientRequest {
    @IsNotEmpty()
    @IsString()
      name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(24)
    @MaxLength(24)
      healthInsuranceCardId: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
      address: string;

    constructor(props: CreatePatientRequest) {
      Object.assign(this, props);
    }
}
