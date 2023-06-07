import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';


@Injectable()
export class CronService {
  @Cron('0 7-19/12 * * *') // Run every 12 hours from 7 am to 7 pm
  handleCron() {
    // Execute your service logic here
  }
}
