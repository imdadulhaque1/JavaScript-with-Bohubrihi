/////------------> Event  Listener

//--------------------------------->Apply on Button<-------------------------------//
// document.getElementById('sample-btn').addEventListener('click',message);
// // function message(){
// //     console.log("Button Clicked !");
// // }

// function message(e){
//     let val = e;
//     val = e.target;
//     val = e.target.id;  // ID show
//     val = e.timeStamp;  // time of clicking in every click
//     val = e.type;  // click type

//     val = e.clientY;  // y-axis of page in pixel
//     val = e.clientX;  // x-axis of page in pixel

//     val = e.offsetY;  // y-axis of button in pixel
//     val = e.offsetX;  // x-axis of button in pixel

//     console.log(val);
// }



//--------------------------------->Apply on Div<-------------------------------//
document.querySelector('.container').addEventListener('mousemove',message);

document.querySelector('.container').style.background='red';

function message(e){
    let val = e;
    val = e.target;   // this keyword works same as
    val = e.target.id;  // ID show
    val = e.timeStamp;  // time of clicking in every click
    val = e.type;  // click type

    val = e.clientY;  // y-axis of page in pixel
    val = e.clientX;  // x-axis of page in pixel

    val = e.offsetY;  // y-axis of button in pixel
    val = e.offsetX;  // x-axis of button in pixel

    val = this;
    this.style.background=`#${e.offsetX}`;  // background color changes with cursor moving 

    // console.log(val);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(val);
}

