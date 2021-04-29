import Container, { Service, Inject } from 'typedi';
import config from '../config';
import { IStudent, IStudentInput } from '../interfaces/IStudent';
import mongoose from 'mongoose'
@Service()
export default class StudentService {

  constructor(
    @Inject('studentModel') private studentModel: Models.StudentModel,
    @Inject('userModel') private userModel: Models.UserModel,
    @Inject('logger') private logger,
  ) { }


  public async getStudents(): Promise<{ students: Array<IStudent>; }> {
    try {
      const studentRecord = await this.studentModel.find();
      if (!studentRecord) {
        throw new Error('No Students found!');
      }
      this.logger.silly('Student Found');
      const students = studentRecord;
      return { students };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async getStudent(studentId:ObjectId): Promise<{ student: IStudent; }> {
    try {
      const studentRecord = await this.studentModel.findOne({_id: studentId});
      if (!studentRecord) {
        throw new Error('No Students found!');
      }
      this.logger.silly('Student Found');
      const student = studentRecord;
      return { student };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }


  public async addStudent(studentInputDTO: IStudentInput): Promise<{ student: IStudent; success: boolean }> {
    try {    
      const studentRecord = await this.studentModel.create({...studentInputDTO})
      if (!studentRecord) {
        throw new Error('Student cannot be created');
      }
      const student = studentRecord;
      const success = true;
      console.log('student', student)
      return { student, success };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async updateStudent(studentInputDTO: IStudentInput): Promise<{ student: IStudent; success: boolean }> {
    try {    
      const studentRecord = await this.studentModel.create({...studentInputDTO})
      if (!studentRecord) {
        throw new Error('Student cannot be created');
      }
      const student = studentRecord;
      const success = true;
      console.log('student', student)
      return { student, success };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async deleteStudent(studentId: ObjectId): Promise<{  success: boolean; }> {
    try {    
      const studentRecord = this.studentModel.findOneAndRemove({ "_id": studentId });
     console.log('student----record---s', studentRecord)
      return { success: true}
    } catch (e) {
      console.log('error', e)

    }
  }

}