import * as TypeORM from 'typeorm'


@TypeORM.Entity()
class Conditions extends TypeORM.BaseEntity{
    @TypeORM.PrimaryGeneratedColumn()
    id : number

    @TypeORM.Column()
    title : string

    @TypeORM.Column()
    created_at : Date

    @TypeORM.Column()
    updated_at : Date

}

export default Conditions