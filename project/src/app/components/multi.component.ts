import {Component} from '@angular/core';

@Component({
    //create a tag for the component
    selector: 'app-multi',
    //set the template path
    templateUrl: './multi.component.html',
    //set the path for the style file
    styleUrls: ['../app.component.css']
})

export class MultiComponent{
    //initialize the variables
    num1:number = 0;
    num2:number = 0;
    num3:number = 0;
    ginomeno:number = 0;
    
    //change the number 1
    num1Up(){
        this.num1 += 1;
        //this.result();
    }
    num1Down(){
        this.num1 -= 1;
        //this.result();
    }

    //change the number 2
    num2Up(){
        this.num2 += 1;
        //this.result();
    }
    num2Down(){
        this.num2 -= 1;
        //this.result();
    }

    //change the number 3
    num3Up(){
        this.num3 += 1;
        //this.result();
    }
    num3Down(){
        this.num3 -= 1;
        //this.result();
    }
    //find the result
    result(){
       this.ginomeno = this.num1 * this.num2 * this.num3
    }

}