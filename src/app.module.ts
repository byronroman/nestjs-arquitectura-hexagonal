import { Module } from '@nestjs/common';
import { PaymentModule } from '@src/contexts/payments/infrastructure/repositories/payment.module';

@Module({
  imports: [PaymentModule],
})
export class AppModule {}
