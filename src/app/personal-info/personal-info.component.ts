import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GithubService } from '../github.service';
import { User } from '../user';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  user$: Observable<User> | undefined;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.user$ = this.githubService.getUser();
  }

}
