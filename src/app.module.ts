import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://berdavoglio:TnYrZhA2TgtvNcJa@cluster0.j3wl2iv.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
