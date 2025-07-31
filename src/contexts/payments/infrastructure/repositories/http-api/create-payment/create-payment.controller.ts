import { Body, Controller } from '@nestjs/common';
import { CreatePaymentUseCase } from '@src/contexts/payments/application/create-payment-use-case/create-payment-use-case';
import { CreatePaymentHttpDto } from '@src/contexts/payments/infrastructure/repositories/http-api/create-payment/create-payment.http-dto';
import { PrimitivePayment } from '@src/contexts/payments/domain/payment';

@Controller('payments')
export class CreatePaymentController {
  constructor(private createPaymentUseCase: CreatePaymentUseCase) {}

  async run(
    @Body() createPaymentHttpDto: CreatePaymentHttpDto,
  ): Promise<{ payment: PrimitivePayment }> {
    return await this.createPaymentUseCase.execute({
      amount: createPaymentHttpDto.amount,
      customerId: createPaymentHttpDto.customerId,
    });
  }
}
