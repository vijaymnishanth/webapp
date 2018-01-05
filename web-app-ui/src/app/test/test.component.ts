import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testName : string = "test1";
  constructor(private testService:TestService) { }

  getTest():void{
    this.testService.getTest().subscribe(test => this.testName = test);
  }
  ngOnInit() {
    this.getTest();
  }

}
