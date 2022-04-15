import { PaymentService } from './payment.service';
import { UseGuards } from "@nestjs/common";
import { Args, Resolver, Mutation } from "@nestjs/graphql";
import { GqlAuthAccessGuard } from "src/common/auth/gql-auth-guard";
import { CurrentUser, ICurrentUser } from "src/common/auth/gql-user.param";
import { Payment } from "./entities/payment.entity";

@Resolver()
export class PaymentResolver {
  constructor(
    private readonly paymentService: PaymentService,
  ){}

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(()=>Payment)
  createPayment(
    @Args('impUid') impUid: string,
    @Args('amount')  amount: number,
    @CurrentUser() currentUser: ICurrentUser,
  ){
    // console.log(currentUser.email)
    return this.paymentService.payment({impUid, amount, currentUser,})
  }
}