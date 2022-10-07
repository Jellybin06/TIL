--SQL = Structured Query Language

--테이블 추가 명령어
CREATE DATABASE (이름);

--테이블 확인
SHOW DATABASES;

--특정 테이블을 대상으로 명령어 실행
USE (DB이름);

-- column 열 , table 표, row,record 행

CREATE TABLE topic(
    id INT(11) NOT NULL AUTO_INCREMENT, -- 11글자 이내, 공백이면 안됨, 자동으로 1씩 증가(중복되지 않는 식별자를 가지게됨)
    title VARCHAR(100) NOT NULL, -- 100글자 이내, 공백이면 안됨
    description TEXT NULL, -- text에 정해진 글자 이내, 공백 가능
    created DATETIME NOT NULL, -- 날짜 , 공백 불가능
    author VARCHAR(30) NULL, -- 30글자 이내 , 공백 가능
    profile VARCHAR(100) NULL, -- 100글자 이내 , 공백 가능
    PRIMARY KEY(id)); -- 기본키 (id)
    

-- 테이블의 구조를 보여줌
-- DESC 테이블 이름

--테이블에 값 추가
INSERT INTO topic (title,description,created,author,profile) VALUES('MySQL','MySQL is ...',NOW(),'egoing','developer');

--테이블 전체 보여주기
SELECT * FROM topic;

--테이블에 2번째 값 추가
INSERT INTO topic (title,description,created,author,profile) VALUES('ORACLE','ORACLE is ...',NOW(),'egoing','developer');

--테이블 전체 보여주기
SELECT * FROM topic;

--나머지 데이터 추가
INSERT INTO topic (title,description,created,author,profile) VALUES('MongoDB','MongoDB is ...',NOW(),'egoing','developer');
INSERT INTO topic (title,description,created,author,profile) VALUES('PostgreSQL','PostgreSQL is ...',NOW(),'taeho','data scientist, developer');

--최종데이터
SELECT * FROM topic;


