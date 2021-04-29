import { Router, Request, Response, NextFunction } from 'express';
import middlewares from '../middlewares';
import { celebrate, Joi } from 'celebrate';
import studentService from '../../services/student';
import { Container } from 'typedi';
import { IStudentInput } from '../../interfaces/IStudent';

const route = Router();

export default (app: Router) => {
  app.use('/students', route);
  const studentServiceInstance = Container.get(studentService);

  //get All
  route.post('/all', middlewares.isAuth, middlewares.attachCurrentUser,async (req: Request, res: Response) => {
    try{
        let location =req.body.location;
        console.log('location', location)
        const {students} = await studentServiceInstance.getStudents(location);
        return res.json(students).status(200);

    }catch(e){

    }
  });

  //get Single 
  route.get('/:id',middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response)=>{

  })


  //create Shop
  route.post('/add', 
    celebrate({
        body:Joi.object({
            title: Joi.string().required(),
            photo: Joi.string().required(),
            location:Joi.object()
        })
    }), async(req:Request, res:Response, next: NextFunction)=>{
    // const logger = Container.get('logger');
    console.log(req.body);
        // logger.debug('req', req.body);
        try{
            const { student, success } = await studentServiceInstance.addShop(req.body as IStudentInput);
            return res.status(201).json({student, success})
        }catch(e){
            console.log(e);
            return next(e)
        }
    })
  

    //create Shop
  route.get('/delete/:id', middlewares.isAuth, middlewares.attachCurrentUser, async(req:Request, res:Response, next: NextFunction)=>{
  console.log(req.body);
      try{
          const {  success } = await studentServiceInstance.deleteShop(req.params.id as string);
          return res.status(201).json({ success});
      }catch(e){
          console.log(e);
          return next(e)
      }
  })

//like Shop
route.get('/like/:id',  middlewares.isAuth, middlewares.attachCurrentUser,async(req:Request, res:Response, next: NextFunction)=>{
    console.log(req.body);
        try{
            const {  success } = await studentServiceInstance.likeShop(req.currentUser._id,req.params.id as string);
            return res.status(201).json({ success});
        }catch(e){
            console.log(e);
            return next(e)
        }
    })
  
  
  
    //dislike student
    //like Shop
route.get('/dislike/:id',  middlewares.isAuth, middlewares.attachCurrentUser,async(req:Request, res:Response, next: NextFunction)=>{
    console.log(req.body);
        try{
            const {  success } = await studentServiceInstance.likeShop(req.currentUser._id,req.params.id as string);
            return res.status(201).json({ success});
        }catch(e){
            console.log(e);
            return next(e)
        }
    })
  
  
    


  
};
