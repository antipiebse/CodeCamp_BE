import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

//AuthGuard(restapi용)을 graphql용으로 변환!
export class GqlAuthAccessGuard extends AuthGuard('access'){
  getRequest(context: ExecutionContext){ //contextheader를 따라 들어오는 데이터들
   const ctx = GqlExecutionContext.create(context)
   return ctx.getContext().req//graphql용 context
  }
}
export class GqlAuthRefreshGuard extends AuthGuard('refresh'){
  getRequest(context: ExecutionContext){ //contextheader를 따라 들어오는 데이터들
   const ctx = GqlExecutionContext.create(context)
   return ctx.getContext().req//graphql용 context
  }
}