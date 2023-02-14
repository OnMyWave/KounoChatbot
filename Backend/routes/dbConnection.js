// 1. mongoose 모듈 가져오기
var mongoose = require("mongoose");
const url = ""; // DB URL
mongoose.set("strictQuery", true);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// 3. 연결된 testDB 사용
var db = mongoose.connection;
// 4. 연결 실패
db.on("error", function () {
  console.log("Connection Failed!");
});
// 5. 연결 성공
db.once("open", function () {
  console.log("");
  console.log("");
  console.log(
    "2023 KOUNOSOFT INTERNSHIP : Arduino Chatbot for Education Project"
  );
  console.log("");
  console.log("MongoDB 데이터 베이스가 연결되었습니다.");
  console.log("");
});

// // Collection 연결
var logSchema = mongoose.Schema(
  {
    text: String,
    type: String,
    timestamp: String,
  },
  { collection: "kounosoft_log" }
);

var kounosoft_log = mongoose.model("kounosoft_log", logSchema);

module.exports = kounosoft_log;
