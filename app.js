{
    class Student {
        constructor(name, surname, tell, adress) {
            this.name = name;
            this.surname = surname;
            this.tell = tell;
            this.adress = adress;
        }
    
        getfullname() {
            return this.name + " " + this.surname;
        }
    
        info() {
            console.log(`${this.name} ${this.surname} ${this.tell} ${this.adress}`);
        }
    }
    
    let me = new Student("John", "Doe", "123-456-7890", "123 Main Street");
    console.log(me.getfullname());
    me.info();
}

{

class Teacher {
    constructor(fname, lname, address, salary, level) {
        this.fname = fname;  
        this.lname = lname; 
        this.address = address;s
        this.salary = salary;  
        this.level = level;  
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }

    description() {
        console.log(`Teacher: ${this.getFullName()}, Address: ${this.address}, Salary: ${this.salary}, Level: ${this.level}`);
    }
}

let teacher = new Teacher("John", "Smith", "123 Main Street", 5000, "Expert");

console.log(teacher.getFullName()); 
teacher.description(); 

}

{
    
class Group {
    constructor(name, room, level, studentCounts, teacher) {
        this.name = name;           
        this.room = room;          
        this.level = level;     
        this.studentCounts = studentCounts; 
        this.teacher = teacher;    
    }

    fullInformation() {
        console.log(`Group Name: ${this.name}`);
        console.log(`Room: ${this.room}`);
        console.log(`Level: ${this.level}`);
        console.log(`Student Counts: ${this.studentCounts}`);
        console.log(`Teacher: ${this.teacher.getFullName()}`);
    }
}


class Teacher {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}

let teacher = new Teacher("John", "Smith");

let group = new Group("Math Group", "Room 101", "Advanced", 25, teacher);

group.fullInformation();

}

{
class Payment {
    constructor(from, to, amount, date, status) {
        this.from = from;          
        this.to = to;               
        this.amount = amount;       
        this.date = new Date(date);
        this.status = status;    
    }

  
    getStatus() {
        return this.status ? "Completed" : "Pending";
    }
}


let payment = new Payment("John", "Nurbek", 1000, 1234564564654, false);


console.log(`Payment from ${payment.from} to ${payment.to}: ${payment.getStatus()}`);


}

{
class Salary {
    constructor(to, amount, type, date, status) {
        this.to = to;             
        this.amount = amount;      
        this.type = type;           
        this.date = new Date(date);
        this.status = status;       
    }

    getInfo() {
        const statusText = this.status ? "Paid" : "Unpaid";
        console.log(`Salary to: ${this.to}`);
        console.log(`Amount: ${this.amount} ${this.type}`);
        console.log(`Date: ${this.date.toDateString()}`);
        console.log(`Status: ${statusText}`);
    }
}


let salary = new Salary("Mike", 150, "USD", 1231321321321, true);

salary.getInfo();

}
{

class Organization {
    constructor(name, founder, address, employeeCount = 400) {
        this.name = name;               
        this.founder = founder;       
        this.address = address;        
        this.employeeCount = employeeCount;
    }

  
    getInfo() {
        console.log(`Organization Name: ${this.name}`);
        console.log(`Founder: ${this.founder}`);
        console.log(`Address: ${this.address}`);
        console.log(`Employee Count: ${this.employeeCount}`);
    }
}


let organization = new Organization("Tech Solutions", "Elon Musk", "123 Innovation Street");


organization.getInfo();


}
