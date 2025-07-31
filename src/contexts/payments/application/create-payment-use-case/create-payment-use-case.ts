import { PaymentRepository } from '@src/contexts/payments/domain/payment.repository';
import { CreatePaymentDto } from '@src/contexts/payments/application/create-payment-use-case/create-payment.dto';
import {
  PrimitivePayment,
  Payment,
} from '@src/contexts/payments/domain/payment';
import { Injectable } from '@src/contexts/shared/dependency-injection/injectable';

@Injectable()
export class CreatePaymentUseCase {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(dto: CreatePaymentDto): Promise<{ payment: PrimitivePayment }> {
    const payment = Payment.create(dto);

    await this.paymentRepository.create(payment);

    return {
      payment: payment.toValue(),
    };
  }
}
