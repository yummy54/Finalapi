const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//define scheme
var SeoulParkingSchema = mongoose.Schema({
  name:String, //주차장명
  address:String, // 주차장 주소
  dong:String,
  num: String, //주차구획수
  opday:String, //운영요일
  wds:String, //평일 시작
  wde:String, //평일 마감
  hds:String, //주말 시작
  hde:String, //주말 마감
  bpt:String, //기본 주차 시간
  bpf:String, //기본 요금
  mpf:String, // 한달 주차 요금
},
  {
    collection : 'seoul'
});

var IncheonParkingSchema = mongoose.Schema({
  name:String, //주차장명
  address:String, // 주차장 주소
  dong:String,
  num: String, //주차구획수
  opday:String, //운영요일
  wds:String, //평일 시작
  wde:String, //평일 마감
  hds:String, //주말 시작
  hde:String, //주말 마감
  bpt:String, //기본 주차 시간
  bpf:String, //기본 요금
  mpf:String, // 한달 주차 요금
},
  {
    collection : 'incheon'
});

var SeoulCctvSchema = mongoose.Schema({
  name:String, // 이름
  gu:String, // 구
  address:String, // 주소
  latitude:String, // 위도
  longitude:String // 경도
},
  {
    collection : 'seoulcctv'
});

var IncheonCctvSchema = mongoose.Schema({
  name:String, // 이름
  gu:String, // 구
  address:String, // 주소
  detail:String, // 상세주소
  latitude:String, // 위도
  longitude:String // 경도
},
  {
    collection : 'incheoncctv'
});

var SeoulParking = mongoose.model('SeoulParking', SeoulParkingSchema);
var IncheonParking = mongoose.model('IncheonParking', IncheonParkingSchema);
var SeoulCctv = mongoose.model('SeoulCctv', SeoulCctvSchema);
var IncheonCctv = mongoose.model('IncheonCctv', IncheonCctvSchema);

router.get('/seoulparkinglot', function(req, res, next) {
  SeoulParking.find({},{_id : 0},function(err,docs){
       if(err) console.log('err');
       res.send(docs);
  });
})

router.get('/incheonparkinglot', function(req, res, next) {
      IncheonParking.find({},{_id : 0},function(err,docs){
           if(err) console.log('err');
           res.send(docs);
      });
});

router.get('/seoulcctv', function(req, res, next) {
  SeoulCctv.find({},{_id : 0, latitude : 0, longitude : 0}, function(err,docs){
       if(err) console.log('err');
       res.send(docs);
  });
});

router.get('/incheoncctv', function(req, res, next) {
  IncheonCctv.find({},{_id : 0, latitude : 0, longitude : 0}, function(err,docs){
       if(err) console.log('err');
       res.send(docs);
  });
});

router.get('/findseoul/dong', function(req, res, next) {
  db = req.db;
  var dong = req.query.dong
  SeoulParking.find({'dong' : dong},{_id : 0},function(err,docs){
    if(err) console.log('err');
    res.send(docs);
});
});

module.exports = router;