import { IsNotEmpty, IsString, Length } from "class-validator"

export default class CreatePatientDTO {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    @Length(1, 24 )
    healthInsuranceCardId: string
    
    @IsNotEmpty()
    @IsString()
    address: string

    constructor(props: CreatePatientDTO){
        Object.assign(this, props)
    }
}