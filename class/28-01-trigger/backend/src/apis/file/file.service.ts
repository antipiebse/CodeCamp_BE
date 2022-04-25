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
      projectId: 	"back01-347705",
      keyFilename:"GCP_KEYFILE.json",
    }).bucket("codecamp-file-storage-sungmin")//저장할 장소

    // 일단 먼저 프론트엔드로 부터 저장할 데이터 다 받아오기
    const waitedFiles = await Promise.all(files)
    
    //여러 장 보낼때
    const results = await Promise.all(waitedFiles.map((el)=>{
      return new Promise((resolve, reject)=>{
        el.createReadStream()//파일을 읽어드리는 함수, 실행시켜야 파일이 읽어짐!
          .pipe(storage.file(el.filename).createWriteStream()) //파일을 읽고 어떤 작업을 할 지 정함(업로드, 사이즈 변경 등등)
          .on("finish", ()=> resolve(`codecamp-file-storage-sungmin/${el.filename}`)) //성공시
          .on("error", (error)=> reject(error))//에러발생시 
     })
    }))
    //배열 안에 url이 들어가 있는 상태로 리턴!
    return results
  }
}

      // .bucket("codecamp-file-storage-sungmin")//저장할 장소
      // .file(file.filename)//어떤 이름으로 파일을 저장할지
      

      //createReadStream은 구글에서 지원하는 기능이기 때문에 promise로 리턴되지 않는다.
      //js특성상 사진이 업로드 되기전 리턴이 되는데 axios를 직접 만들어서 파일이 업로드 되는 걸 기다리도록 해야한다.
    
      //한 장만 보낼때
      // const result = await new Promise((resolve, reject)=>{
      //    file
      //   .createReadStream()//파일을 읽어드리는 함수, 실행시켜야 파일이 읽어짐!
      //   .pipe(storage.createWriteStream()) //파일을 읽고 어떤 작업을 할 지 정함(업로드, 사이즈 변경 등등)
      //   .on("finish", ()=> resolve(`codecamp-file-storage-sungmin/${file.filename}`)) //성공시
      //   .on("error", ()=> reject())//에러발생시 
      // })
    
      //사진을 만약 여러장 저장한다면 보통 for문을 통해 저장할 것이다.
      // 근데 이런 식으로 하면 순서대로 다 기다려야해서 시간이 오래걸린다.
      // 즉, 저장하는 순서는 상관없이 동시에 진행할 수 있도록 for문 대신 
      // promise.all을 통해 한방에 요청을 보내자.
