import {Component} from '@angular/core';
import {Student} from '../../classes/student.model';
import {Subject} from '../../classes/subject.model';
import { StudentService } from '../../services/student.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [StudentService, SubjectService]
})
export class LoginFormComponent {
  student = new Student('', '', {home: '', work: ''}, '');
  subject = new Subject('', [], '', '', '');
  constructor(private studentService: StudentService, private subjectService: SubjectService) {}
  addStudent(name: string, address: string, hometlf: string, worktlf: string, id: string) {
    this.student.name = name;
    this.student.address = address;
    this.student.phone = { home: hometlf, work: worktlf};
    this.student._id = id;
    console.log(this.student);
    this.studentService.addStudent(this.student).subscribe(
      (data) => console.log(data));
  }
  addSubject(name: string, studies: string, quadri: string, studentId: string, id: string) {
    this.subject.name = name;
    this.subject.studentId.concat(studentId);
    this.subject._id = id;
    this.subject.studies = studies;
    this.subject.quadri = quadri;
    console.log(this.subject);
    this.subjectService.addSubject(this.subject).subscribe(
      (data) => console.log(data));
  }
}
