function generateHTML() {
 
  const name = document.getElementById("name").value;
  const fsession = document.getElementById("fsession").value;
  const tsession = document.getElementById("tsession").value;
  const regno = document.getElementById("regno").value;
  const imglink = document.getElementById("imglink").value;
  const bgrp = document.getElementById("bgrp").value;
  const rh = document.getElementById("rh").value;
  const course = document.getElementById("course").value;
  const branch = document.getElementById("branch").value;
  const fname = document.getElementById("fname").value;
  const rno = document.getElementById("rno").value;
  const mob = document.getElementById("mob").value;
  const add = document.getElementById("add").value;

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ID_Card_of_(${rno}</title>
  <style>
    .inside-box {
      height: 480px;
      width: 320px;
      border: 2px solid black;
      border-radius: 5px;
      display: inline-grid;
    }
    .box {
      border: 2px solid green;
      height: 480px;
      width: 320px;
      padding: 1rem;
      border-radius: 6px;
      transform: scale(0.6);
      box-shadow: 5px 5px 10px, -5px -5px 10px;
      margin:0 auto;
    }
    h1 {
      padding: 5px;
      text-align: center;
      font-size: large;
      color: rgb(3, 90, 3);
      font-weight: 900;
      text-transform: uppercase;
      margin: 0.2rem;
    }
    #session {
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      font-size: small;
      color: rgb(231, 1, 1);
      display: inline-block;
      align-items: center;
      margin: 0 1.5rem;
    }
    .blood-grp {
      margin:0 1.5rem;
    }

    #pic {
      max-width: 40%;
      border: 2px solid rgb(3, 90, 3);
      min-height: 150px;
      min-width: 120px;
      margin:0 0.5rem;
    }
    .name {
      color: rgb(231, 1, 1);
      font-size: large;
      margin-bottom: 2px;
    }

    .cb {
      display: flex;
    }
    .c {
      text-align: left;
    }

    .b {
      text-align: right;
    }

    .fsign {
      color: rgb(231, 1, 1);
      float: right;
      margin-right: 1rem;
      line-height: 1.8;
      position: relative;
    }
    .lft {
      float: left;
      margin-left: 1rem;
      text-align: left;
    }
    .rtd {
      float: right;
      margin-right: 1rem;
      text-align: right;
    }
    .sign {
      display: block;
      unicode-bidi: isolate;
    }
    #spic {
      position: relative;
      max-width: 35%;
      float: right;
      display: block;
      margin-right: 1rem;
      position: relative;
    }
    .foot {
      background-color: rgb(3, 90, 3);
      color: white;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      position: relative;
    }

    .box:hover {
      transition-duration: 2s;
      transform: scale(0.8);
    }
    .details {
      height: 108px;
      display: inline-block;
      position: relative;
    }
    .flex {
      display: flex;
      align-items: center;
      align-content: center;
    }
      button {
        padding: 0.5rem;
        font-size: normal;
        background-color: #E6B9A6;
        border-top-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
  </style>
</head>
<body>
  <center>
 <br /> <br />
  <p>Your Registration Number is ${regno}</p>
  <br />
    <div class="box">
      <div class="inside-box">
        <h1>Siwan College of Engineering & Management</h1>
        <div class="flex">
          <p id="session">Session : ${fsession} - ${tsession}</p>
          <center>
            <img id="pic" src="${imglink}" alt="_picture" />
          </center>
          <p class="blood-grp">
            &#129656;
            ${bgrp} <sup style="display:inline;">${rh}</sup>
          </p>
        </div>
        <span class="name"><i>${name}</i></span>
        <div class="details">
          <span class="lft">Course : <span>${course}</span></span>
          <span class="rtd">Branch : <span>${branch}</span></span>
          <br />
          <span class="lft"
            >Father's Name &nbsp;: ${fname}
            <br />
            Roll No. &nbsp;: ${rno} <br />
            Mob.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : ${mob} <br />
            Address &nbsp;: ${add}
          </span>
        </div>
        <div class="sign">
          <img
            id="spic"
            src="https://i.ibb.co/Wn37nMw/spic.png"
            alt="sign_"
          />
          <br /><br />
          <span class="fsign"><i>Issuing Authority</i></span>
        </div>
        <div class="foot">
          Islamia Nagar, Surapur, Siwan - 841226
          <br />
          Mob : 9801979696, 8271870080, 8298078825
        </div>
      </div>
    </div>
  </center>
 
 <button id="pre" onclick="hide();window.print();">Print this ID-Card</button>
</body>
</html>

  `;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const save = document.getElementById("save");
  save.href = url;
  save.download = "Student.html";
  save.style.display = "block";
  save.innerText = "Click Here To Confirm Save";

  document.getElementById("idcard").innerHTML = htmlContent;
}
function hide() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("author").style.display = "none";
  document.getElementById("pre").style.display = "none";
  
}
