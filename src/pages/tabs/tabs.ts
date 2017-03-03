import { Component } from '@angular/core';

import { DailyPage } from '../daily/daily';
import { ActivityPage } from '../activity/activity';
import { BreakPage } from '../break/break';
import { DrivePage } from '../drive/drive';
import { WorkPage } from '../work/work';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DailyPage;
  tab2Root: any = ActivityPage;
  tab3Root: any = BreakPage;
  tab4Root: any = DrivePage;
  tab5Root: any = WorkPage;

  constructor() {

  }
}
