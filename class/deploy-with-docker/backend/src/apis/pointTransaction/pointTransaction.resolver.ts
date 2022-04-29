import { PoinTransactionService } from './pointTransaction.service';
import { UseGuards } from "@nestjs/common";
import { Args, Resolver, Mutation } from "@nestjs/graphql";
import { GqlAuthAccessGuard } from "src/common/auth/gql-auth-guard";
import { CurrentUser, ICurrentUser } from "src/common/auth/gql-user.param";
import { PointTransaction } from "./entities/pointTransaction.entity";

@Resolver()
export class PoinTransactionResolver {
  constructor(
    private readonly pointTransactionService: PoinTransactionService,
  ){}

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(()=>PointTransaction)
  createPointTransaction(
    @Args('impUid') impUid: string,
    @Args('amount')  amount: number,
    @CurrentUser() currentUser: ICurrentUser,
  ){
    return this.pointTransactionService.create({impUid, amount, currentUser,})
  }
}