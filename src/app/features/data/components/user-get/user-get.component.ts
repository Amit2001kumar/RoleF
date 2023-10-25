import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/features/services/service.service';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent {
  id:any;
  all_user: any =[];


  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [10, 20, 50, 100];

  filterObj = {
    "limits": 2,
    "pages": 1,
  }



  constructor(private ServiceService: ServiceService, private router: Router) {

    // this.ServiceService.getAllJobs().subscribe((data: any) => {

    //   this.all_post = data;
    //   console.log(this.all_post);

    // });

  }

  ngOnInit(): void {

    this.postList();

  }


  postList(): void {

    this.id = {
      "RowId": 0
    }

    console.log('id', this.id);

    this.ServiceService.getAll().subscribe((data: any[]) => {
     
      this.all_user = data;
      console.log(this.all_user);
    });

  }

  onTabledataChange(event: any) {
    this.page = event;
    this.postList();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }

  deletePost(id: any) {
    // this.ngxService.start();
    if (confirm("Are you sure to delete this Data?")) {
      this.ServiceService.deleteUser(id).subscribe((data) => {

        alert("User Successfully Deleted!");
        this.router.navigate(['getdata']);
        window.location.reload();
        // this.ngxService.stop();
      });
    }

  }



  onPrevious() {
    this.filterObj.pages--;
    this.filetrCandidates();
  }

  onNext() {
    this.filterObj.pages++;
    this.filetrCandidates();
  }

  filetrCandidates() {

    console.log("abc", this.filterObj)

    // this.ServiceService.PagebyGet(this.filterObj).subscribe((result: any) => {
    //   this.all_post = result;
    //   console.log(this.all_post);
    // })

  }

}
