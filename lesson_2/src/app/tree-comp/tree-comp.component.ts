import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode } from '../tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree-comp.component.html',
  styleUrls: ['./tree-comp.component.scss'],
})
export class TreeCompComponent {
  public innerTree!: TreeNode[];
  @Input() set tree(value: TreeNode[]) {
    this.innerTree = value.map((node, index) => {
      return { ...node, position: index };
    });
    console.log(this.innerTree);
  }
  get tree() {
    return this.innerTree.map((item, index) => {
      delete item.position;
      return item;
    });
  }
  delete(el: any) {
    let index = this.innerTree.indexOf(el);
    this.innerTree.splice(index, 1);
    // this.innerTree.pop();
  }

  change(
    array: TreeNode[] | undefined,
    index: number | undefined,
    direction: 'up' | 'down'
  ) {
    console.log(index);
    if (typeof index == 'undefined' || typeof array == 'undefined') return [];
    const a = Array.from(array);
    let nextIndex = direction === 'up' ? index - 1 : index + 1;
    if (
      (direction === 'up' && nextIndex >= 0) ||
      (direction === 'down' && nextIndex <= a.length)
    ) {
      let t = a[index];
      a[index] = a[nextIndex];
      a[nextIndex] = t;
    }
    return a;
  }

  add() {
    this.tree = this.tree.concat([{ name: 'template', children: [] }]);
    console.log(this.innerTree);
  }
}
