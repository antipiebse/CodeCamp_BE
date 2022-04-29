import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from '../user.service';
import { User } from '../entities/user.entity';
import { ConflictException } from '@nestjs/common';
import { Repository } from 'typeorm';

class MockUserRepository {
  mydb = [
    { email: "a@a.com", password:"0000", name:"짱구", age: 8}
  ]

  findOne({email}){
    const users =  this.mydb.filter((el) => el.email === email)
    if(users.length) return users[0]
    return null;
  
  }
  save({email, password, name, age}){
    this.mydb.push({email, password, name, age})
    return {email, password, name, age}
  }
}
type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
// keyof란?
// -> key들만 뽑아서 나열한것!
// 여기에선 findOne, insert등 다양한 기능들이 나열된다.
// 즉, mockrepository안에 원본 repository의 기능들을 필수가 아닌 것들로 전부 넣어놓은 것이다. 
describe("UserService",()=>{
  let userService: UserService;
  let userRepository: MockRepository<User>
  beforeEach(async()=>{
    const userModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: MockUserRepository
        }
      ]
    }).compile()

    userService = userModule.get<UserService>(UserService)
    userRepository = userModule.get<MockRepository<User>>(getRepositoryToken(User))
  })
  describe("create", ()=>{
    it("이미 존재하는 이메일 검증하기!!", async ()=> {
      const userRepositorySpyFindOne = jest.spyOn(userRepository, "findOne")//몇 번 시행됐는지 추적하며 체크!
      const userRepositorySpySave = jest.spyOn(userRepository, "save")

      const myData = {
        email: "a@a.com",
        hashedPassword: "1234",
        name: "철수",
        age: 13
      }
      try {
        await userService.create({...myData})
      } catch(error) {
        expect(error).toBeInstanceOf(ConflictException)
      }

      expect(userRepositorySpyFindOne).toBeCalledTimes(1)
      expect(userRepositorySpySave).toBeCalledTimes(0)
    })
    it("회원 등록 잘됐는지 검증!!", async ()=>{
      const userRepositorySpyFindOne = jest.spyOn(userRepository, "findOne")//몇 번 시행됐는지 추적하며 체크!
      const userRepositorySpySave = jest.spyOn(userRepository, "save")

      const myData = {
        email: "bbb@bbb.com",
        hashedPassword: "1234",
        name: "철수",
        age: 13
      }
      const myResultData = {
        email: "bbb@bbb.com",
        password: "1234",
        name: "철수",
        age: 13
      }

      const result = await userService.create({...myData})
      expect(result).toStrictEqual(myResultData)//객체나 배열은 주소를 저장하기 때문에 toBe로 비교가 안 된다.
      expect(userRepositorySpyFindOne).toBeCalledTimes(1)
      expect(userRepositorySpySave).toBeCalledTimes(1)
    })    
  })

  describe("findOne", ()=>{})
})