import React from 'react'

let uid = document.querySelector("#userid"); //user id
let pass_word = document.querySelector("#password"); //user password
let uname = document.querySelector("#username"); // user's username
let uaddress = document.querySelector("#address"); //user's address
let ucountry = document.getElementById("country"); // user's country "select and options"
let uzcode = document.querySelector("#zipcode");
let uemail = document.querySelector("#useremail");
let ugender = document.getElementsByName("gender"); //user's gender "radio"
let ulang = document.getElementsByName("language"); // user's language "checkbox"
let uabout = document.getElementById("about"); // about "text area"
let uform = document.querySelector("#registerForm"); // the registration form

let userData =[];

uform.addEventListener("submit", function (event){
    // STOPS the form from submitting ocne the button is clicked
    event.preventDefault();
    
    // ctr is used when a function returns a number if theres an error returns 0
    // if the function returns 1, increment ctr.
    // Once all functions is called and ctr is a checker if it reaches 8 
    // it saves the input to the local storage if not it doesnt save the inputs.
    // ctr is used for validation checker
    let ctr =0;
    
    // checkUID();
    // checkUsername();
    // checkPassword();
    // checkEmail();
    // checkZipcode();
    // checkLang();
    // checkGender();
    // checkCountry();

    // addToLocalStorage();

    (checkUID()==1)?ctr++:ctr;
    (checkUsername()==1)?ctr++:ctr;
    (checkPassword()==1)?ctr++:ctr;
    (checkEmail()==1)?ctr++:ctr;
    (checkZipcode()==1)?ctr++:ctr;
    (checkLang()==1)?ctr++:ctr;
    (checkGender()==1)?ctr++:ctr;
    (checkCountry()==1)?ctr++:ctr;
    console.log(ctr);
    if(ctr==8){ // checks if all validation is correct;
        addToLocalStorage();
        alert(`Successfully Saved to The Local Storage`);
    }else{
        alert(`Invalid Registration`);
        console.log(`Invalid Registration`);
    }

});

const isEmpty = (check) => check == "" ?true:false;
const isBetween= (element_length, min, max) =>{
    return element_length >= min && element_length <= max ? false: true;
}
const isvalidPassword = (check) =>{
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regexp.test(check);
}
const isAlpha = (check) =>{
    const regexp = /^[A-Za-z]+$/;
    return regexp.test(check);
}

// checking for UID
function checkUID(){
    const uidVal = uid.value;
    const min = 7;
    const max = 12;
    let x =0;
    if(isEmpty(uidVal)){
        console.log(`UID Empty`);
        document.getElementById("iderr").innerHTML = (`Required`);
        document.getElementById("iderr").style.color = "red";
    }else if(isBetween(uidVal.length, min, max)){
        console.log(`not following`);
        document.getElementById("iderr").innerHTML = (`Invalid Input of ID`);
        document.getElementById("iderr").style.color = "red";
    }else{
        console.log(`Nice`);
        document.getElementById("iderr").innerHTML = (``);
        x=1;
    }
    return x;
}

// checking for password
function checkPassword(){
    const passVal = pass_word.value.trim();
    const min = 7;
    const max = 12;
    let x =0;
    
    if(isEmpty(passVal)){
        console.log("Password Empty");
        document.getElementById("passerr").innerHTML = (`Required`);
        document.getElementById("passerr").style.color = "red";
    }else if(isBetween(passVal.length, min, max)){
        console.log("not following");
        document.getElementById("passerr").innerHTML = (`Minimum of 7 to 12 characters`);
        document.getElementById("passerr").style.color = "red";
    }else if(!isvalidPassword(passVal)){
        console.log(`not following`);
        document.getElementById("passerr").innerHTML=(`Invalid password must contain at least 1 Lower case, 1 Upper case, 1 Number, and 1 Special case character`);
        document.getElementById("passerr").style.color = "red";
    }else{
        console.log(`Nice!`)
        document.getElementById("passerr").innerHTML=(``);
        x=1;
    }
    return x;
}

// checkin for user's name
function checkUsername(){
    const unameVal = uname.value;
    let x=0;

    if(isEmpty(unameVal)){
        console.log("Name Empty");
        document.getElementById("namerr").innerHTML = (`Required`);
        document.getElementById("namerr").style.color = "red";
    }else if(!isAlpha){
        console.log("Only Alphabet");
        document.getElementById("namerr").innerHTML = (`Only Alphabet`);
        document.getElementById("namerr").style.color = "red";
    }else{
        console.log(`Nice!`);
        document.getElementById("namerr").innerHTML=(``);
        x=1;
    }
    return x;
}

// checking for email
function checkEmail(){
    const uemailVal = uemail.value;
    let x=0;
    
    if(isEmpty(uemailVal)){
        console.log(`Email Empty`);
        document.getElementById("emailerr").innerHTML=(`Required`)
        document.getElementById("emailerr").style.color = "red";
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uemailVal)){
        console.log(`Invalid`);
        document.getElementById("emailerr").innerHTML=(`Please Input The Correct Email Pattern. ex. "example@mail.com"`)
        document.getElementById("emailerr").style.color = "red";

    }else{
        console.log(`Valid`);
        document.getElementById("emailerr").innerHTML=(``);
        x=1;
    }
    return x;
}

// to check for zipcode
function checkZipcode(){
    const uzcodeVal = uzcode.value;
    let x=0;

    if(uzcodeVal == ""){
        console.log(`Zip Code Empty`);
        document.getElementById("zcoderr").innerHTML=(`Required`);
        document.getElementById("zcoderr").style.color = "red";
    }else{
        console.log(`Nice!`);
        document.getElementById("zcoderr").innerHTML=(``);
        x=1;
    }
    return x;
}

// check for Language
function checkLang(){
    let x=0;
    

    if(ulang[0].checked == true){
        console.log("English");
        document.getElementById("langerr").innerHTML=(``);
        x=1;
    }else if(ulang[1].checked == true){
        console.log("Non-English");
        document.getElementById("langerr").innerHTML=(``);
        x=1;
    }else{
        console.log(`Language Empty`);
        document.getElementById("langerr").innerHTML=(`Required`);
        document.getElementById("langerr").style.color = "red";
        
    }
    return x;
}

// check for gender
function checkGender(){
    let x=0;
    

    if(ugender[0].checked == true){
        console.log("Male");
        ugender.value="Male"
        document.getElementById("genderr").innerHTML=(``);
        x=1;
    }else if(ugender[1].checked == true){
        console.log("Female");
        ugender.value="Female"
        document.getElementById("genderr").innerHTML=(``);
        x=1;
    }else{
        console.log(`Gender Empty`);
        document.getElementById("genderr").innerHTML=(`Required`);
        document.getElementById("genderr").style.color = "red";
    }
    return x;
}

// check the select box of the country
function checkCountry(){
    const ucountrySelected =[... ucountry.options].filter(option => option.selected).map(option => option.value);
    let x=0;
    
    if(isEmpty(ucountrySelected)){
        console.log(`Country Empty`);
        document.getElementById("countryerr").innerHTML=(`Required`);
        document.getElementById("countryerr").style.color = "red";
    }else{
        console.log(`Nice!`);
        document.getElementById("countryerr").innerHTML=(``);
        x=1;
    }
    return x;
}

// to save into the local storage
function addToLocalStorage(){
    const user={
        id: Date.now(),
        userid: uid.value,
        username: uname.value,
        userpass: pass_word.value,
        address: uaddress.value,
        country: ucountry.value,
        zipcode: uzcode.value,
        email: uemail.value,
        gender: ugender.value,
        language: ulang.value,
        about: uabout.value
    }
    console.log(user);
    userData.push(user);
    localStorage.setItem("userRegistration", JSON.stringify(userData));
}

const Registration = () => {
  return (
    <div class="container-fluid">
            <h2>Registration Form</h2>
            <form action="" method="get" id="registerForm">
            <label for="userid">User id: </label>
                <input type="number" name="userid" id="userid" className="form-control"/>
                <small id="iderr"></small><br/>


                <label for="password">Password: </label>
                <input type="password" name="password" id="password" className="form-control"/>
                <small id="passerr"></small><br/>

                <label for="username">Name: </label>
                <input type="text" name="username" id="username" className="form-control"/>
                <small id="namerr"></small><br/>

                <label for="address">Address</label>
                <input type="text" name="address" id="address"className="form-control"/>


                <div class="row">
                    <div class="col-6">
                        <label for="country">Country: </label>
                        <select name="country" id="country" className="form-control">
                            <option value="">--Please Select Country--</option>
                            <option value="philippines">Philippines</option>
                            <option value="japan">Japan</option>
                            <option value="korea">Korea</option>
                            <option value="russia">Russia</option>
                            <option value="china">China</option>
                            <option value="germany">Germany</option>
                            <option value="usa">USA</option>
                            <option value="france">France</option>
                            <option value="egypt">Egypt</option>
                            <option value="africa">Africa</option>
                        </select>
                        <small id="countryerr"></small><br/>
                    </div>
                    <div class="col-6">
                        <label for="zipcode">ZIP Code: </label>
                        <input type="number" name="zipcode" id="zipcode" clasName="form-control"/>
                        <small id="zcoderr"></small><br/>
                    </div>
                </div>
                <label for="useremail">Email: </label>
                <input type="email" name="useremail" id="useremail" className="form-control"/>
                <small id="emailerr"></small><br/>

                <div>
                    <label for="gender">Sex: </label>
                    <input type="radio" name="gender" id="male" value="Male"/> Male
                    <input type="radio" name="gender" id="female" value="Female"/> Female
                    <small id="genderr"></small><br/>
                </div>

                <div>
                    <label for="language">Language: </label>
                    <input type="checkbox" name="language" id="eng_lang" value="English"/> English
                    <input type="checkbox" name="language" id="non_eng_lang" value="NonEnglish"/> Non-English
                    <small id="langerr"></small><br/>
                </div>

                <label for="about">About: </label>
                <textarea name="about" id="about" cols="30" rows="10" className="form-control"></textarea>

                <br/>
                <input type="submit" value="Submit" id="btn_submit" className="btn btn-primary"/>
            </form>
    </div>
  )
}

export default Registration