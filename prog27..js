// w.a.p to print the given pattern

// *    *   *   *
// *    *   *   *
// *    *   *   *
// *    *   *   *

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+' #'
    }
    console.log(str);
}

console.log('----------------------------------------------------------------');

// 1111
// 2222
// 3333
// 4444

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+` ${row}`
    }
    console.log(str);
}

console.log('---------------------------------------------');

// 1 2 3 4 
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+` ${col}`
    }
    console.log(str);
}

console.log('---------------------------------------------');


// *
// * *
// * * *
// * * * *

for(row=1;row<=4;row++){
    str=' '
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    console.log(str);
}

console.log('---------------------------------------------');


// 1
// 1 2
// 1 2 3
// 1 2 3 4


for(row=1;row<=4;row++){
    str=' '
    for(col=1;col<=row;col++){
        str=str+col+' '
    }
    console.log(str);
}
console.log('---------------------------------------------');


for(row=1;row<=4;row++){
    str=' '
    for(col=1;col<=row;col++){
        str=str+row+' '
    }
    console.log(str);
}

console.log('---------------------------------------------');

// * * * *
// * * *
// * *
// * 

for(row=1;row<=4;row++){
    str=' '
    for(col=4;col>=row;col--){
        str=str+' *'
    }
    console.log(str);
}


console.log('---------------------------------------------');
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// * 


for(row=1;row<=5;row++){
    str=' '
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    console.log(str);
}
for(row=1;row<=4;row++){
    str=' '
    for(col=4;col>=row;col--){
        str=str+' *'
    }
    console.log(str);
}

console.log('---------------------------------------------');


//          *
//         * *
//        * * *
//       * * * *


for(row=1;row<=4;row++){
    str=' '
    for(spa=4;spa>row;spa--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    console.log(str);
}
console.log('---------------------------------------------');


//          *
//         * *
//        * * *
//       * * * *
//      * * * * *
//       * * * * 
//        * * * 
//         * *
//          *


for(row=1;row<=5;row++){
    str=' '
    for(spa=5;spa>row;spa--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    console.log(str);
}
for(row=4;row>=1;row--){
    str=' '
    for(spa=5;spa>row;spa--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    console.log(str);
}










console.log('---------------------------------------------');

    //      *
    //     * *
    //    *   *
    //   *******


for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=7;col++){
        if (row+col==5 || col-row==3 || row == 4) {
            str=str+'*'
        }
        else{
             str = str+" ";   
        }
        
    }
    console.log(str);

}
console.log('---------------------------------------------');


//         * * * * *
//         *       *
//         *       *
//         *       *
//         * * * * *

for(row=1;row<=5;row++)
{
    str=''
    for(col=1;col<=5;col++){
        if (col==1 || col==5 || row ==1 || row==5) {
            str=str+'*'
        }
        else
        {
            str=str+' ';
        }
    }
    console.log(str);
}

console.log('---------------------------------------------');

// 1
// 0 1
// 1 0 1
// 0 1 0 1


for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        if((row+col)%2==0){
            str=str+' 1'
        }
        else{
            str=str+' 0'
        }
    }
    console.log(str);
}



//              * * * * * * *
//               *         *
//                *       *
//                 *     *
//                  *   *
//                   * *
//                    *  
//                   * *
//                  *   *
//                 *     *
//                *       *
//               *         *
//              * * * * * * *

