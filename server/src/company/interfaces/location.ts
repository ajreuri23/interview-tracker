import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

enum City {
    TelAviv = 'Tel Aviv',
    Netanya = 'Netanya',
    Herzliya = 'Herzliya',
    HodHasharon = 'Hod Hasharon',
    KefarSava = 'Kefar Sava',
    PetahTikva = 'Petah Tikva',
}

@Schema()
export class Location {
    @ApiProperty()
    @Prop({ type: String, enum: City, required: true })
    city: City;

    @ApiProperty()
    @Prop()
    longitude: number;

    @ApiProperty()
    @Prop()
    latitude: number;

    @ApiProperty()
    @Prop()
    address: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
