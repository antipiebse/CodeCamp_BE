import { FileUpload } from 'graphql-upload';
import { Injectable } from "@nestjs/common";
import { Storage } from '@google-cloud/storage'

//타입스크립트에서 타입을 지정해주기 위해 사용!
interface IFile{
  files: FileUpload[]
}

@Injectable()
export class FileService{
  async upload({files}:IFile){
    const storage = new Storage({
      projectId: 	"back01-347705",//우리의 프로젝트 id
      keyFilename:"back01-347705-14996fc5f866.json", //keyfilename
    }).bucket("codecamp-file-storage-sungmin")//저장할 장소
    
    // 일단 먼저 프론트엔드로 부터 저장할 데이터 다 받아오기
    const waitedFiles = await Promise.all(files)
    
    //여러 장 보낼때
    const results = await Promise.all(waitedFiles.map((el)=>{
      return new Promise((resolve, reject)=>{
        el.createReadStream()//파일을 읽어드리는 함수, 실행시켜야 파일이 읽어짐!
          .pipe(storage.file(el.filename).createWriteStream()) //파일을 읽고 어떤 작업을 할 지 정함(업로드, 사이즈 변경 등등)
          .on("finish", ()=> resolve(`codecamp-file-storage-sungmin/${el.filename}`)) //성공시
          .on("error", (error: Error)=> reject(error))//에러발생시 
     })
    }))
    //배열 안에 url이 들어가 있는 상태로 리턴!
    return results
  }
}

