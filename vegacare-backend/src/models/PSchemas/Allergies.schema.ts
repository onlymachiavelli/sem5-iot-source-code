import * as TypeORM from "typeorm"

@TypeORM.Entity()
class Allergies extends TypeORM.BaseEntity{
    @TypeORM.PrimaryGeneratedColumn()
    id : number

    @TypeORM.Column()
    title : String

    @TypeORM.Column()
    created_at : Date

    @TypeORM.Column()
    updated_at : Date
}

export default Allergies