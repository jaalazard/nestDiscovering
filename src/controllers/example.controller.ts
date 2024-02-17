import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('example')
export class ExampleController {
  @Get()
  getExample(@Req() req: Request, @Res() res: Response): void {
    console.log('req head', req.headers);
    console.log('req body', req.body);
    if (req.body.name) {
      console.log('req name', req.body.name);
      res.status(200).send('there is a name');
    } else {
      res.status(400).send('there is no name');
    }
  }
}
