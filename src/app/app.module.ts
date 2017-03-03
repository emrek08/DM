import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { DailyPage } from '../pages/daily/daily';
import { ActivityPage } from '../pages/activity/activity';
import { BreakPage } from '../pages/break/break';
import { DrivePage } from '../pages/drive/drive';
import { WorkPage } from '../pages/work/work';

@NgModule({
  declarations: [
    MyApp,
    WorkPage,
    ActivityPage,
    DrivePage,
    BreakPage,
    DailyPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WorkPage,
    ActivityPage,
    DrivePage,
    BreakPage,
    DailyPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
