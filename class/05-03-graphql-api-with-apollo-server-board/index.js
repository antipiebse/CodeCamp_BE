import { ApolloServer, gql } from 'apollo-server';

// The GraphQL schema
const typeDefs = gql`
    type BoardReturn {
        number: Int
        writer: String
        title: String
        contents: String
    }
    input CreateBoardInput{
        writer: String
        title: String
        contents: String
    }

    type Query {
        # fetchBoards: BoardReturn => 객체 1개 의미
        fetchBoards: [BoardReturn] # => 배열 안에 객체 1개 이상을 의미
    }

    type Mutation {
        createBoard(writer:String, title:String, contents:String): String
        createBoard2(createBoardInput: CreateBoardInput): String
    }
`;

// A map of functions which return data for the schema.
const resolvers = { //router
    Query: {
        fetchBoards: () => {
            //1. 데이터를 조회하는 로직=>DB에 접속해서 데이터 꺼내오기
            const result = [
                {
                    number: 1,
                    writer: '철수',
                    title: "제목1",
                    contents: "내용1"
                },
                {
                    number: 2,
                    writer: '영희',
                    title: "제목2",
                    contents: "내용2"
                },
                {
                    number: 3,
                    writer: '훈이쓰',
                    title: "제목3",
                    contents: "내용3"
                },
            ];
            // 2. 꺼내온 결과 응답 주기
            return result
        }
    },
    Mutation: {
        createBoard: (_, args) => {
            //1. 데이터를 조회하는 로직=>DB에 접속해서 데이터 꺼내오기
            console.log(args);
            //2. 저장결과 알려주기!

            return "등록에 성공하였습니다."
        }, 
        createBoard2: (_, args) => {
            //1. 데이터를 조회하는 로직=>DB에 접속해서 데이터 꺼내오기
            console.log(args);
            //2. 저장결과 알려주기!

            return "등록에 성공하였습니다."
        }
    },
};

//shorthand property로 객체를 표현해도 됨.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen(3001).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});