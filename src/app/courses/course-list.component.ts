import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { IAppState } from '../store';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { CourseActions } from './course.actions';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses$: Observable<Course>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private courseActions: CourseActions
    ) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.courseActions.filterCourses(searchText);
  }



  ngOnInit() {
    this.courseActions.getCourses();
    componentHandler.upgradeDom();
  }
}
