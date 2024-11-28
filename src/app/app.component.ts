import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  url = "http://51.20.100.211:8082/getItems";
  data:{items:string , cost:string, img:string}[] = [];
  imagesLinks = [
   "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQme18RMwwavG9WLc6b6ogFSiVHd3nLY7Vr7sE4PFS_OP6g5A9z0bict6-J4TJgNSoT6_rjNXpIqciXUYmrMOBRLV2pWNWijqDmOUn6N9fHvKu11OnN93O8w-flCEVh-YHTIPkY_x1WtIU&usqp=CAc",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQA8AGedPQds2QVZwMYwnjUaqZXH2LTl5ghI21a8k9fI7o4R7x4C6-aj-Jt4FvPTfB56C9rh7puZtjNwpS4tFfrSBHrvFBehhjVSQCtqYioGvdbbT1q7py3tgsFbALytqY4HJVS2dc&usqp=CAc",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSEHPpWlkUiXbU9s-zvsFFCNKWKGWmw2_CgtB0Jrp8w_UdgqKo0-RmNu-OfHMWk-rpgYsW_O-1x4FhxSeUQ8CeMILny3AuT2slogw6azAknnYuDzNFMLEL7bXqmE2wcNOLpMpo5WRo&usqp=CAc",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJMjmGJ3k1xD6tMqJnpdUWnPXw7SK5OJfGS22Ial7C4UI9hYr9yQ4qjjWOUKF80GXvfV9BLd_q7SahG6sHeZ7aXzcc2rHiB8YHwVfJhKgt2zOYrYz3tuk3Pvn9c5VCS1CiVQ5v8cdoGN8&usqp=CAc",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMAlPlVxThnOimac9weVmtJG17B2j7mzAeoCnyJnEEjNAqNH5oPG_d35XC-rU6tuWUZZp1j-07h07mnOG8GBEgKEteWrZkDECiVxkzDHslFkwvvJ-1abvzHX1uBSqX5ea0uFNYRV0&usqp=CAc",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSb4QgUcdr07eQsZ1JHqUQxK8NDPBiWSqhh5ZZH6gGeDlzBQCY7T84Y4gqgBkYoP_Hg17LKh8TLE2oAJXyDx-G5p40K8ExH9wfeVQTQBlEBMKrj_FA7ICeTK_awtFlFgOpfrpvN7nE&usqp=CAc",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXHTz5e0SrkgkaMGPv1eEz89jF-bohzoYKy_xjW0qVzd9Us0xMQzeWRzjNkVPKSnohzuPKiwIQwgvxE4I1hv3M-XT5CvrwBQizom1pBDML-LFMju7PL9wWRWSvjaLZqpzmWM8hmCPX&usqp=CAc",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS685TBgU0s7nqRIad6fIfkkifV7kpRZZrWbCmXYii0oL6pqD7BCdR2b_QMowhW0fY8c5V_frUphg0OYHtz7WxAhft5-DcK7tQhJxYN6NYG0IZJQxRqZudfR4oQTstxXyWHNqCl8Xo&usqp=CAc"
  ]
  errMsg: string = '';
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getData();
  }


  getData(){
    this.http.get<any>("/api/getItems").subscribe(data => {
      console.log(data);
      this.data = data.productDetails;
      this.data.forEach((item, index) => {
        item.img = this.imagesLinks[index];
      })
    }, err => {
      this.errMsg = err;
      console.log(err);
    })
  }
}
