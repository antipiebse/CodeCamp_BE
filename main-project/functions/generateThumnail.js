/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
const sharp = require('sharp');
const { Storage } = require('@google-cloud/storage')

exports.thumbnailGCS = async (event, context) => {
  const storage = new Storage().bucket(event.bucket)
  const Eventname = event.name
  const url = storage.file(Eventname)
  const size = [["s", 320], ["m", 640], ["l", 1280]]

  //만약 썸네일 폴더 안에 이미지가 존재 한다면? 정지
  if (Eventname.includes('thumb/')) return

  await Promise.all(size.map(([folder, withSize]) => {
    new Promise((resolve, reject) => {
      url
        .createReadStream()//파일을 읽어드리는 함수, 실행시켜야 파일이 읽어짐!
        .pipe(sharp().resize(withSize))
        .pipe(storage.file(`thumb/${folder}/${Eventname}`).createWriteStream())
        .on("finish", () => resolve(`썸네일 이미지 생성 완료!!`)) //성공시
        .on("error", (error) => reject("에러가 발생했습니다:", error))//에러발생시 
    })
  }))
}
