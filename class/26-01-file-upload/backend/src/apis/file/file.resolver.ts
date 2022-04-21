import { FileService,  } from './file.service';
import { Args, Resolver , Mutation} from "@nestjs/graphql";
// import {FileUpload, GraphQLUpload} from 'graphql-upload'
import {FileUpload, GraphQLUpload} from 'graphql-upload'
@Resolver()
export class FileResolver{
  constructor(
    private readonly fileService:FileService
  ){

  }
  //단순 이미지 업로드
  // 브라우저에서 백엔드 api로 전송할 땐 graphqlUpload, 
  // 백엔드 안에선 fileUpload형식으로 사용!
  // @Mutation(()=>String)
  // uploadFile(
  //   @Args({name:'file', type:()=>GraphQLUpload}) file: FileUpload
  // ) {
  //   //fileupload형태로 사용
  //   console.log(file)
  //   return this.fileService.upload({file})
  // }
  @Mutation(()=>[String])
   async uploadFile(
    @Args({name:'files', type:()=>[GraphQLUpload]}) files: FileUpload[],
  ) {
    //fileupload형태로 사용
    // const waitedFiles = await Promise.all(files)
    // console.log(files)
    return await this.fileService.upload({files})
  }
}