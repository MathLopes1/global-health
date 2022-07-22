import { IsNotEmpty, IsString, Length } from "class-validator"

export default class CreatePatientRequest {

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

    constructor(props: CreatePatientRequest){
        Object.assign(this, props)
    }
}