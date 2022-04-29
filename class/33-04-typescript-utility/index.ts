interface IProfile {
  name: string;
  age: 13;
  school: string;
  hobby?: string;
}
// interface IProfile {
//   apple: string;
// }
// const bbb: IProfile{
  // 이름이 같으면 두 개의 형식을 다 사용가능!
// }
// 인터페이스는 같은 이름으로 여러개 생성 가능!



// 1. Partial 타입
// 특정 객체의 요소가 모두 필수가 아니도록 변경
type Mytype1 = Partial<IProfile>;

// 2. Required 타입
// 특정 객체의 요소가 전부 필수 요소가 된다.
type Mytype2 = Required<IProfile>;

// 3. Pick 타입
// 원하는 요소만 가져와서 사용할 수 있다.
type Mytype3 = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
// 그 요소만 제외하고 전부 사용할 수 있게된다.
type Mytype4 = Omit<IProfile, "school">;

// 5. Record 타입
// 정해진 조건이 있을 때, 각각의 레코드에 iprofile을 적용시켜 aaa: IProfile의 형식을 갖춘 객체로 바꾼다.
type ZZZ = "aaa" | "qqq" | "rrr";
type Mytype6 = Record<ZZZ, IProfile>;