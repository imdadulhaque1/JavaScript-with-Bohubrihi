// Asynchronous Programming
// AJAX: Asynchronous JavaScript And XML
// Get the data without loading the page

document.getElementById('get_data').addEventListener('click', loadData);

function loadData(){
    // console.log("Button Clicked !");

    //Create  XHR object (XML Http Request)
    let xhr = new XMLHttpRequest();
    // console.log(xhr);
    //Open(): help to get informations to access from the file(Example: data.txt)
    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }
    //onload(): at the loading time of data, this function will be called
        //--------> "onload" is old techniques to get the data form another file but mostly used .
    xhr.onload = function () {
        //HTTP statuses:
              // 200: OK
              // 403: Forbidden
              // 404: Not Found
              if(this.status === 200){
                //   console.log(this.status);
                // console.log(this.responseText);
                document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`
              }
    }

    //--------> "onreadystatechange" is too old techniques to get the data form another file .

    // xhr.onreadystatechange = function(){
    //     //readState Values:
    //                // 0: Request not Initialized
    //                // 1: Server connection estiblished
    //                // 2: Request received
    //                // 3: Processing request
    //                // 4: Request finished and Response is ready
    //     // console.log(this.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }
    xhr.send();   //This function is called for showing the "data.txt" files information
    // console.log(xhr);

}