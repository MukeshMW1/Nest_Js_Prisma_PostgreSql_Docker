import { IsBoolean, IsOptional } from "class-validator"

export class UpdateSettingDto{

    @IsOptional()
    @IsBoolean()
    notificationsOn?:boolean
    @IsOptional()
    @IsBoolean()
    smsEnabled?:boolean
}