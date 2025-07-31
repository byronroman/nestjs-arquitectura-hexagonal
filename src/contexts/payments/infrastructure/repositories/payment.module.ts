import { CreatePaymentController } from '@src/contexts/payments/infrastructure/repositories/http-api/create-payment/create-payment.controller';
import { CreatePaymentUseCase } from '@src/contexts/payments/application/create-payment-use-case/create-payment-use-case';
import { InMemoryPaymentRepository } from '@src/contexts/payments/infrastructure/repositories//in-memory.payment';
import { PaymentRepository } from '@src/contexts/payments/domain/payment.repository';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CreatePaymentController],
  providers: [
    CreatePaymentUseCase,
    InMemoryPaymentRepository,
    { provide: PaymentRepository, useExisting: InMemoryPaymentRepository },
  ],
  exports: [CreatePaymentUseCase],
})
export class PaymentModule {}
