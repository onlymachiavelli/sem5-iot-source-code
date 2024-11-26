import * as TypeORM from 'typeorm'
import Conditions from './conditions.schema'
import Allergies from './Allergies.schema'
import Medications from './Medications.schema'
import TypeAcc from '../../@types/typeAcc'
import BloodType from '../../@types/blood'
import Gender from '../../@types/gender.enum'
import Relations from './relations.entity'
@TypeORM.Entity()

class Users extends TypeORM.BaseEntity{

    @TypeORM.PrimaryGeneratedColumn()
    id : number 

    @TypeORM.Column({nullable : false}) 
    fullname  : string 

    @TypeORM.Column({nullable : false, unique : true })
    email : string 
     
    @TypeORM.Column({nullable : false})
    password : string


    @TypeORM.Column({nullable : false, unique : true })
    phone : string

    @TypeORM.Column({nullable : false})
    address : string

    @TypeORM.Column({nullable : false}) 
    gender : Gender
    
    @TypeORM.Column({nullable : false })
    bday : Date


    @TypeORM.Column({nullable : true, default : ""})
    avatar: string
    
    
    @TypeORM.Column({nullable : false}) 
    created_at : Date 
    
    @TypeORM.Column({nullable : false})
    updated_at : Date

    @TypeORM.Column()
    type : TypeAcc

    //health data 
    @TypeORM.Column({nullable : true, default : 0 })
    height : number

    @TypeORM.Column({nullable : true, default : 0 })
    weight : number

    @TypeORM.Column({nullable : true, default : "Unckown"})
    blood_type : BloodType


    @TypeORM.Column({default : 0 })
    glycemia : number

    @TypeORM.Column({nullable : true, default : "" })
    allergies : string

    @TypeORM.Column({nullable : true, default : "" })
    conditions : string

    @TypeORM.Column({nullable : true, default : "" })
    medications : string

    @TypeORM.Column({nullable:true, default : null})
    code : Number 

    

    
    @TypeORM.Column({nullable:true, default : null})
    codeValidity : Date 


    @TypeORM.ManyToMany(type => Relations, relation => relation.patients)
    relations: Relations[]

 
    
    

}



export default Users