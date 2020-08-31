import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

@Schema({ collection: 'business' })
export class Business extends Document {
  @Prop()
  location_account: string;

  @Prop()
  business_name: string;

  @Prop()
  dba_name: string;

  @Prop()
  street_address: string;

  @Prop()
  city: string;

  @Prop()
  zip_code: string;

  @Prop()
  location_description: string;

  @Prop()
  mailing_address: string;

  @Prop()
  mailing_city: string;

  @Prop()
  mailing_zip_code: string;

  @Prop()
  naics: string;

  @Prop()
  primary_naics_description?: string;

  @Prop()
  council_district: string;

  @Prop()
  location_start_date: string;

  @Prop()
  location_end_date: string;

  @Prop()
  location_1: string;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);

BusinessSchema.plugin(mongoosePaginate);

export const BusinessName = "business";