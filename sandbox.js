//PART 2

/*
    let age = 25;
    let year = 2019;

    console.log(age, year);

    // age = 30;
    // console.log(age);

    // const points = 100;
    // points = 50;
    // console.log(points);

    // var score = 75;
    // console.log(score);
  */

/*
    // strings
    console.log('hello, world');

    let email = 'mario@thenetninja.co.uk';
    console.log(email);


    let firstName = 'Brandon';
    let lastName = 'Sanderson';

    let fullName = firstName + ' ' + lastName;

    console.log(fullName);


    console.log(fullName[2]);


    console.log(fullName.length);


    console.log(fullName.toUpperCase());
    let result = fullName.toLocaleLowerCase();
    console.log(result);

    let index = email.indexOf('@');
    console.log('index of the @ sign:', index);
  */

/* 
    // common string methods

    let email = 'mario@thenetninja.co.uk';

    //let result = email.lastIndexOf('n');

    //let result = email.slice(0,5);

    //let result = email.substr(5,12);

    //let result = email.replace('m', 'w');

    let result = email.replace('n', 'w');

    console.log(result);
  */

/*
    // numbers

    let radius = 10;
    let pi = 3.14;

    // console.log(radius, pi);

    // math operators - +, -, *, /, **, %

    // console.log(10 / 2);
    // let result = radius % 3;
    // let result = pi * radius**2;

    // order of operation - B I D M A S

    // let result = 5 * (10 - 3)**2;

    // console.log(result);

    // shorthands
    let likes = 10;

    // likes = likes + 1;
    // likes++;

    // likes = likes + 10;
    // likes += 10;

    // likes *= 2;
    // likes /= 2;

    // console.log(likes);

    // NaN - not a number

    // console.log(5 / 'hello');
    // console.log(5 * 'hello');

    let result = 'the blog has ' + likes + ' likes.';
    console.log(result);
  */

/*
    // template strings
    const title = 'Best reads of 2019';
    const author = 'Mario';
    const likes = 30;

    // concatenation way

    // let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
    // console.log(result);

    // template string way

    // let result = `The blog called ${title} by ${author} has ${likes} likes`;
    // console.log(result);

    // creating html templates
    let html = `
      <h2>${title}</h2>
      <p>By ${author}</p>
      <span>This blog has ${likes} likes</span>
    `;

    console.log(html);
  */

/* 
    // arrays

    let ninjas = ['shaun', 'ryu', 'chun-li'];

    // ninjas[1] = 'ken';
    // console.log(ninjas[1]);

    // let ages = [20, 25, 30, 35];
    // console.log(ages[2]);

    // let random = ['shaun', 'crystal', 30, 20];

    // array length
    // console.log(ninjas.length);

    // array methods

    // let result = ninjas.join(',');
    // let result = ninjas.indexOf('chun-li');
    // let result = ninjas.concat(['ken', 'crystal']);
    let result = ninjas.push('ken');
    let result = ninjas.pop();

    console.log(result);
    console.log(ninjas);
  */

/*
    // null & undefined
    let age = null;

    console.log(age, age + 3, `the age is ${age}`);
  */

/*
    // booleans & comparisons
    // console.log(true, false, 'true', 'false');

    // let email = 'luigi@thenetninja.co.uk';
    // let names = ['mario', 'luigi', 'toad'];

    // let result = email.includes('@');
    // let result = names.includes('luigi');

    // console.log(result);

    let age = 25;

    console.log(age == 25);
    console.log(age == 30);
    console.log(age != 30);
    console.log(age > 20);
    console.log(age < 20);
    console.log(age <= 25);
    console.log(age >= 25);

    let name = 'shaun';

    console.log(name == 'shaun');
    console.log(name == 'Shaun');
    console.log(name > 'crystal');
    console.log(name > 'Shaun');
    console.log(name > 'Crystal');
  */

/*

    let age = 25;

    // loose comparison 
    
    // console.log(age == 25);
    // console.log(age == '25');
    // console.log(age != 25);
    // console.log(age != '25');
    
    // strict comparison 
    
    // console.log(age === 25);
    // console.log(age === '25');
    // console.log(age !== 25);
    // console.log(age !== '25');
  */

/*
    // type conversion
    // let score = '100';

    // score = Number(score);
    // console.log(score + 1);
    // console.log(typeof score);

    // let result = Number('hello');
    // let result = String(50);
    // let result = Boolean(100);
    // let result = Boolean(0);
    // let result = Boolean('0');
    let result = Boolean('');

    console.log(result, typeof result);
  */

//PART 3

/*
    // for loops

    // for(let i = 0; i < 5; i++){
    //   console.log('loop: ', i);
    // }

    const names = ['shaun', 'mario', 'luigi'];

    for(let i = 0; i < names.length; i++){
      // console.log(names[i]);
      let html = `<div>${names[i]}</div>`;
      console.log(html);
    }
  */

/*
    // while loops
    const names = ['shaun', 'mario', 'luigi'];
    let i = 0;

    // while(i < 5){
    //   console.log('loop: ', i);
    //   i++;
    // }

    // while(i < names.length){
    //   console.log(names[i]);
    //   i++;
    // }

    i = 8;
    while(i > 5){
      console.log('loop: ', i);
      i--;
    }
  */

/*
    // do while loops
    let i = 5;

    do{
      console.log('val of i is: ', i);
      i++;
    } while(i < 5);
  */

/*
    // if statements
    // const age = 25;

    // if(age > 20){
    //   console.log('you are over 20 years old');
    // }

    // const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

    // if(ninjas.length > 3){
    //   console.log("that's a lot of ninjas!");
    // }

    const password = 'p@ssword';

    if(password.length >= 8){
      console.log('that password is long enough');
    }
  */

/*
    // else if statements
    const password = 'p@ss12';

    if(password.length >= 12 && password.includes('@')){
      console.log('that password is mighty strong');
    } else if(password.length >= 8 || password.includes('@') && password.length > 5){
      console.log('that password is strong enough');
    } else {
      console.log('that password is not strong enough');
    }
  */

/*
    // Logical NOT
    const user = false;

    if(!user){
      // do something
      console.log('you must be logged in to continue');
    }

    console.log(!true);
    console.log(!false);
  */

/*
    // break & continue
    const scores = [50, 25, 0, 30, 100, 20, 10];

    for(let i = 0; i < scores.length; i++){

      if(scores[i] === 0){
        continue;
      }

      console.log('your score:', scores[i]);

      if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
      }

    }
  */

/*
    // switch statements
    const grade = 'D';

    switch(grade){
      case 'A':
        console.log('you got an A!');
        break;
      case 'B':
        console.log('you got a B!');
        break;
      case 'C':
        console.log('you got a C!');
        break;
      case 'D':
        console.log('you got a D!');
        break;
      case 'E':
        console.log('you got an E!');
        break;
      default:
        console.log('not a valid grade');
    }

    // using if statements
    // if(grade === 'A'){

    // } else if(grade === 'B'){

    // } else if(grade === 'C'){

    // } else if(grade === 'D'){

    // } else if(grade === 'E'){

    // } else {

    // }
  */

/*
    // variables & block scope
    let age = 30;

    if(true){

      // age = 40;
      let age = 40;
      let name = 'shaun';
      console.log('inside 1st code block:', age, name);

      if(true){

        let age = 50;
        console.log('inside 2nd code block:', age, name);

      }

    }

    console.log('outside code block:', age, name);
  */

//PART 4

/* 
    // function declaration
    function greet(){
      console.log('hello there');
    }

    // function expression
    const speak = function(){
      console.log('good day!');
    };

    // greet();
    // greet();

    speak();
  */

/*
    // arguments & parameters

    const speak = function(name = 'luigi', time = 'night'){
      console.log(`good ${time}, ${name}!`);
    };

    // speak('mario', 'morning');
    // speak();
    speak('shaun');
  */

/*
    // return statements

    // const speak = function(name, time){
    //   console.log(`good ${time}, ${name}!`);
    // };

    const calcArea = function(radius){
      let area = 3.14 * radius**2;
      return area;
    }

    const area = calcArea(5);
    console.log('area is:', area);
  */

/*
    // regular function
    // const calcArea = function(radius){
    //   return 3.14 * radius**2;
    // }

    // arrow function
    const calcArea = radius => 3.14 * radius**2;

    const area = calcArea(5);
    console.log('area is:', area);

    // practise arrow functions

    // const greet = function(){
    //   return 'hello, world';
    // }

    const greet = () => 'hello, world';

    // const bill = function(products, tax){
    //   let total = 0;
    //   for(let i = 0; i < products.length; i++){
    //     total += products[i] + products[i] * tax;
    //   }
    //   return total;
    // }

    const bill = (products, tax) => {
      let total = 0;
      for(let i = 0; i < products.length; i++){
        total += products[i]  + products[i] * tax;
      }
      return total;
    }

    console.log(greet());
    console.log(bill([10,15,30], 0.2));
  */

/*
    const name = 'shaun';

    // function

    const greet = () => {
      return 'hello';
    };

    let resultOne = greet();
    console.log(resultOne);

    // method

    let resultTwo = name.toUpperCase();
    console.log(resultTwo);
  */

/*
    // callbacks & forEach
    let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

    const logPerson = (person, index) => {
      console.log(`${index} - hello ${person}`);
    }

    // people.forEach(person => {
    //   console.log(`hello ${person}`);
    // });

    people.forEach(logPerson);
  */

/*
    const ul = document.querySelector('.people');

    const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

    let html = ``;

    people.forEach(person => {
      // create html template for each person
      html += `<li style="color: purple">${person}</li>`;
    });

    console.log(html);
    ul.innerHTML = html;
  */

//PART 5

/*
    // object literals

    let user = {
      name: 'crystal',
      age: 30,
      email: 'crystal@thenetninja.co.uk',
      location: 'berlin',
      blogs: ['why mac & cheese rules', '10 things to make with marmite'],
      login(){
        console.log('the user logged in');
      },
      logout(){
        console.log('the user logged out');
      },
      logBlogs(){
        // access the blogs here
        // console.log(this);
        console.log('this user has written these blogs:');
        this.blogs.forEach(blog => {
          console.log(blog);
        })
      }
    };

    // console.log(this);
    user.logBlogs();
  */

/*
    // const blogs = [
    //   {title: 'why mac & cheese rules', likes: 30},
    //   {title: '10 things to make with marmite', likes: 50}
    // ];

    // console.log(blogs[0].title);

    let user = {
      name: 'crystal',
      age: 30,
      email: 'crystal@thenetninja.co.uk',
      location: 'berlin',
      blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
      ],
      login(){
        console.log('the user logged in');
      },
      logout(){
        console.log('the user logged out');
      },
      logBlogs(){
        // access the blogs here
        // console.log(this);
        console.log('this user has written these blogs:');
        this.blogs.forEach(blog => {
          console.log(`${blog.title} has ${blog.likes} likes`);
        })
      }
    };

    // console.log(this);
    user.logBlogs();
  */

/*
    // Math object

    console.log(Math);
    console.log(Math.PI);
    console.log(Math.E);

    const area = 7.7;

    console.log(Math.round(area));
    console.log(Math.floor(area));
    console.log(Math.ceil(area));
    console.log(Math.trunc(area));

    // random numbers

    const random = Math.random();

    console.log(random);
    console.log(Math.round(random * 100));
  */

/*
    // primitive values

    let scoreOne = 50;
    let scoreTwo = scoreOne;
    console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

    scoreOne = 100;
    console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

    // reference values

    userOne = { name: 'ryu', age: 30 };
    userTwo = userOne;
    console.log(userOne, userTwo);

    userOne.name = 'chun-li';
    console.log(userOne, userTwo);
  */

//PART 6

/*
    // const para = document.querySelector('p');
    // const para = document.querySelector('.error');
    const para = document.querySelector('div.error');

    console.log(para);

    // query multiple elements at once
    const paras = document.querySelectorAll('p');
    const errors = document.querySelectorAll('.error');

    console.log(paras, errors);
    console.log(paras[1], errors[0]);
  */

/*
    // get an element by ID
    const title= document.getElementById('page-title');
    console.log(title);

    // get elements by their class name
    const errors = document.getElementsByClassName('error');
    console.log(errors);
    console.log(errors[0]);

    // get elements by their tag name
    const paras = document.getElementsByTagName('p');
    console.log(paras);
    console.log(paras[1]);
  */

/*
    const para = document.querySelector('p');

    // console.log(para.innerText);
    // para.innerText = 'ninjas are awesome';

    const paras = document.querySelectorAll('p');

    // paras.forEach(p => {
    //   console.log(p.innerText);
    //   p.innerText = 'new text!';
    // });

    const content = document.querySelector('.content');

    // console.log(content.innerHTML);
    // content.innerHTML = '<h2>this is a new h2</h2>';

    // content.innerHTML += '<h2>this is an h2 added to the content</h2>';

    const people = ['mario', 'luigi', 'yoshi'];

    people.forEach(person => {
      content.innerHTML += `<p>${person}</p>`;
    });
  */

/*
    const link = document.querySelector('a');

    console.log(link.getAttribute('href'));
    link.setAttribute('href', 'https://www.thenetninja.co.uk');
    link.textContent = 'The Net Ninja webiste';

    const mssg = document.querySelector('p');

    console.log(mssg.getAttribute('class'));
    mssg.setAttribute('class', 'success');
    mssg.setAttribute('style', 'color: green');
  */

/*
    const title = document.querySelector('h1');

    // title.setAttribute('style', 'margin: 50px;');

    console.log(title.style);
    console.log(title.style.color);

    title.style.margin = '50px';
    title.style.color = 'crimson';
    title.style.fontSize = '60px';
    title.style.margin = '';
  */

/*
    // const content = document.querySelector('p');

    // console.log(content.classList);
    // content.classList.add('error');
    // content.classList.remove('success');

    const paras = document.querySelectorAll('p');

    paras.forEach(p => {
      if(p.textContent.includes('error')){
        p.classList.add('error');
      } else if(p.textContent.includes('success')) {
        p.classList.add('success');
      }
    });
  */
