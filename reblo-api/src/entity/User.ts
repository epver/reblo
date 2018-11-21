/**
 * User.
 * @description 用户数据模型
 * @author advsets <https://github.com/advsets>
 */

import {Entity, PrimaryGeneratedColumn, CreateDateColumn, Column} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment', {type: 'int', comment: '用户主键'})
  id: number;

  @Column({unique: true, length: 24, nullable: false, comment: '用户名'})
  username: string;

  @Column({unique: true, length: 200, nullable: false, comment: '用户邮箱'})
  email: string;

  @Column({nullable: false, length: 24, comment: '用户密码'})
  password: string;

  @Column({default: 3, type: 'tinyint', comment: '用户组-0,1,2,3'})
  group: boolean;

  @CreateDateColumn({comment: '创建时间'})
  createdAt: Date;

  @Column({type: 'datetime', comment: '最后登入时间'})
  loggedAt: Date;
}