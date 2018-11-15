import {Component} from '@angular/core';
import {Subject} from '../../classes/subject.model';
import {SubjectService} from '../../services/subject.service';
import {Student} from '../../classes/student.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})

export class SubjectListComponent {
  subject = new Subject('', [], '', '', '');
  student = new Student('', '', {home: '', work: ''}, '');
  constructor(private subjectService: SubjectService) {
  }
  sub: any;
  students: any;
  idd: string;
  showSubject() {
    this.subjectService.getSubject().subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
  deleteSubject(id: string, index: number) {
    this.subject._id = id;
    console.log(id);
    this.subjectService.deleteSubject(id).subscribe(
      (data) => {
        console.log(data);
        this.sub.splice(index, 1);
      });
  }
  studentInfo(id: string, name: string, address: string, tlfhome: string, tlfwork: string, subjectId: string, subjectName: string) {
    this.student._id = id;
    this.idd = id;
    this.student.name = name;
    this.student.address = address;
    this.student.phone = { home: tlfhome, work: tlfwork};
    this.subject._id = subjectId;
    this.subject.name = subjectName;
    this.subject.studentId.push(this.idd);
    console.log(this.student);
    console.log(this.subject);
  }
  deleteStudentFromSubject(subjectId: string, subjectName: string, studentId: string) {
    console.log('ESTEEE:' + subjectId + subjectName + studentId);
    this.subjectService.deleteStudentSubjectApi(this.subject).subscribe(
      (data) => {
        console.log(data);
      });
    this.subject.studentId.pop();
  }
  searchName(name: string) {
    this.subjectService.searchSubject(name).subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
  searchStudies(studies: string) {
    this.subjectService.searchStudiesSubject(studies).subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
  searchQuadri(quadri: string) {
    this.subjectService.searchQuadriSubject(quadri).subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
  showByAlpha() {
    this.subjectService.getSortSubject().subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
}
