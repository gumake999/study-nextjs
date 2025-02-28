import { MongoClient } from "mongodb";

const url = 'mongodb+srv://gumake999:idsoo6492!@cluster0.3ww1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB }


/**
 * - 여러번 .connect() 하는 것이 서버에 부담이 감.
 * - 따로 파일을 분리해서 1회만 실행시키기.
 * - 개발 시에는 무조건 다시 읽어 들이기 때문에 개발 모드일 때 케이스를 분리해서 해두면 좋음.
 * */