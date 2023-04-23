import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  stock: number;

  @Prop()
  img: string;

  @Prop()
  size: string;

  @Prop()
  color: string;

  @Prop()
  material: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
