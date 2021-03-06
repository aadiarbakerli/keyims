/* Tables */
drop table message cascade constraints;
drop table userKey cascade constraints;
drop table auditLog cascade constraints;
drop table userInfo cascade constraints;
drop table accessKey cascade constraints;

create table userInfo
(
    id number primary key,
    name varchar2(25) not null,
    email varchar2(50) not null,
    pswd varchar2(25) not null,
    lvl number(1) not null,
    constraint check_lvl check (lvl in (0,1))
);

create table accessKey
(
    id number primary key,
    keyType varchar2(30),
    keyDesc varchar2(100),
    material varchar2(100),
    pubKey number(1),
    image varchar2(100),
    quantity number not null,
    constraint checkKey check (pubKey in (0,1))
);

create table userKey
(
    userId number not null,
    keyId number not null,
    constraint PK_userKey primary key (userId,keyId),
    constraint FK_userId foreign key (userId) references userInfo(id) on delete cascade,
    constraint FK_keyId foreign key (keyId) references accessKey(id) on delete cascade
);

create table message
(
    id number primary key,
    sender number not null,
    receiver number not null,
    content varchar2(500)
);

create table auditLog
(
    id number primary key,
    userId number not null,
    Event varchar2(200)
);

/* Foreign Keys */

alter table message
add constraint FK_sender foreign key (sender) references userInfo(id) on delete cascade;

alter table message
add constraint FK_receiver foreign key (receiver) references userInfo(id) on delete cascade;

alter table auditLog
add constraint FK_audit foreign key (userId) references userInfo(id) on delete cascade;

/* Sequence*/

drop sequence user_seq;
drop sequence key_seq;
drop sequence msg_seq;
drop sequence audit_seq;

create sequence user_seq;
create sequence key_seq;
create sequence msg_seq;
create sequence audit_seq;

/* Procedures */

create or replace procedure delete_user
(uId in number)
as
begin
    delete from userKey where userId = uId;
    delete from userInfo where id = uId;
end delete_user;
/

create or replace procedure delete_key
(kId in number)
as
begin
    delete from userKey where keyId = kId;
    delete from accessKey where id = kId;
end delete_key;
/

/* Populate tables */

insert into userInfo(id,name,email,pswd,lvl) values (1,'Bob Marley','bob@marley.com','pass',0);
insert into userInfo(id,name,email,pswd,lvl) values (2,'Admin','bob@admin.com','pass',1);

insert into accessKey (id,keyType,keyDesc,material,pubKey,image,quantity) values (1,'House Key','Key to Adam house','Bronze','1',null,1);
insert into accessKey (id,keyType,keyDesc,material,pubKey,image,quantity) values (2,'House Key','Key to Colin house','Rice','0',null,1);
insert into accessKey (id,keyType,keyDesc,material,pubKey,image,quantity) values (3,'Password','Facebook','Digital','0','password',1);
insert into accessKey (id,keyType,keyDesc,material,pubKey,image,quantity) values (4,'Locker Key','Key to a locker','Silver','0',null,1);

commit;