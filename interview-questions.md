# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: Any variable in Ruby that starts with "@".

  Researched answer: Instance variables are part of Object Oriented Programming(OOP) and give objects their own private space to store data. They are defined inside of classes. Undefined instance variables always return nil. They don't need to be created in the initialize method. In Rails (hey that's soon) they are used to share data between your controller and views

2. What is a block in Ruby?

  Your answer: A method that doesn't require a name or an object.

  Researched answer: A block is an anonymous piece of code that can accept input from arguments and will return a value but does not require a name. It is always passed to a method call. A single line of code can be written using {} rather than "do" and "end". If a block has an argument you enCAPsulate it with |pipes|

3. Ruby has an implicit return. What does that mean?

  Your answer: An implicit return means the return is implied. Meaning we don't need to worry about typing return. It automatically knows to do so.

  Researched answer: An implicit return will return the last line of code automatically. Whether it is an expression, a truthy value, a print, etc.

4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming is programming in which you use objects to represent things. Functional programming is where you utilize functions to store your data. My functional programming definition may be incorrect or incomplete. I will find out more.

  Researched answer: In object-oriented programming the objects can hold data about themselves. Both the objects and their attributes can be manipulated through methods. It differs from functional programming in that it must be executed in order and functional can be in any order. Functional programming uses immutable data and OOP uses mutable. Functional uses recursion for iterative data, OOP uses loops.

5. What is the difference between a class and an object?

  Your answer: Class is the kind of data a value is. Object is a unit of data.

  Researched answer: Class tells you what kind of data a value is. For example a 1 would be an Integer, 3.5 would be a Float, "General!" would be a String. Where as 1, 3.5, and "General!" are the objects of those classes. They are a unit of data.

6. STRETCH: What is `attr_accessor`?

  Your answer: Generates automatic Getter && Setter methods for the given item

  Researched answer: Automatically sets up getter and setters for instance variables. Not to be confused with attr_accessible which is a Rails' method.



## Looking Ahead: Terms for Next Week
- PostgreSQL: A highly stable database management system. An advanced enterprise class open source relational database. 

- API: Application programming interface is a computing interface that defines interactions between multiple software intermediaries. Can access Yelp's database using their API

- CRUD: Create, Read, Update, Delete. The four basic types of functionality when building APIs. It is common in programming because it provides a framework that helps developers remember how to construct a full usable model. 

- Ruby on Rails: A server-side application framework written in Ruby. It provides model-view-controller frameworks. Providing default structures for a database, web service, and web pages.

- ORM: Object Relational Mapper. Meaning you don't have to manually call the database. Ruby on Rails uses one called...(see next term to define.)

- Active Record: An object relational mapper used in Ruby on Rails to automatically call databases. Instead of retrieving the data with SQL statements it allows you to interact with that data as if it were a normal Ruby object.

