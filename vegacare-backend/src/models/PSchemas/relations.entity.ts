// relations.entity.ts
import * as TypeORM from 'typeorm'
import Users from './user.Schema'

@TypeORM.Entity()
class Relations extends TypeORM.BaseEntity {
    @TypeORM.PrimaryGeneratedColumn()
    id: number 
    
    @TypeORM.Column()
    phone: string

    // patient id: many to many 
    @TypeORM.ManyToMany(type => Users, user => user.relations)
    @TypeORM.JoinTable()
    patients: Users[]




    @TypeORM.Column()
    name: string


    //pending, approved
    @TypeORM.Column({nullable : false, default :"pending"})
    status  :string 
    @TypeORM.Column()
    created_at : Date

    @TypeORM.Column()
    updated_at : Date
}

export default Relations