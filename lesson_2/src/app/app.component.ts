import { Component, ElementRef, ViewChild } from '@angular/core';
import { TreeNode } from './tree';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tree: TreeNode[] = [
    {
      name: 'Level_1',
      children: [
        {
          name: 'Level_2',
          children: [
            {
              name: 'Level_3_1',
            },
            {
              name: 'Level_3_2',
            },
            {
              name: 'Level_3_3',
            },
            {
              name: 'Level_3_4',
            },
          ],
        },
      ],
    },
  ];
}
