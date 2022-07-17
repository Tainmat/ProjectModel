import { Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(req: Request, res: Response){
  CreateCourseService.execute({ 
    name: "Node Js",
    educator: 'Dani',
    duration: 10
  });

  CreateCourseService.execute({ 
    name: 'React JS',
    educator: 'Diego'
  })

  return res.send()
}