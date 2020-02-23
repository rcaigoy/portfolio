import React from 'react';

function DefensiveCodingBlog() {
    return (
		<div className="Body-Content">
            <div className="Blog">
                <br /><br />
                <h1>7 Levels of Defensive Coding in C#</h1>
                <br /><br />

                <h2>
                    What is Defensive Coding?
                </h2>

                <p>
                    Defensive coding is the ART of ensuring that your code works, is fail-safe, is efficient, and as far improved as possible.  I’ve been programming for about 10 years now and with each task I was given, I was able to get the job done one way or another.  I thought that getting the job done was the only measurable level of programming there are.  It wasn’t until I started working in larger coding environments that I realized that getting the job done is just the 1st level.  So I’ve compiled a list of levels regarding defensive coding.
                </p>

                <p>
                    These are just my personal opinions and they are much more geared towards C# and the entity frame work.  
                </p>
                
                <h2>1. Testing and GIT Repositories</h2>

                <p>
                    The first level of defensive coding is to test your code (does it work).  Once it does work, save your code into a git repository so that you always have some version of working code.  
                </p>

                <p>
                    This level should be use with ALL programs regardless of size.
                </p>

                <h2>2. Enclosing Code With Try/Catch</h2>

                <p>
                    The second level of defensive coding is using try/catch statements.  When we teach coding, we don’t show try/catch statements because it makes it easier for students to learn.  However, it’s a lot better if we use try/catch methods on as many methods as we can because when our programs fail (and yes they will fail one way or another), we need to see what went wrong as quickly as possible.  If it uses catch statements correctly, then we can ensure that it’s fail-safe.  
                </p>

                <p>
                    This level should be used on all programs with 5 or more Methods.
                </p>

                <h2>3. Commenting and Refactoring Code </h2>

                <p>
                    The 3rd level of defensive coding is refactoring.  Refactoring is the term used to rewrite code into less lines and better efficiency.  Let’s say you tried to create a data structure that has all unique values and only adds a value to the collection when the new value isn’t a duplicate of anything inside the list.  So you use a List Object.  Then later, you realized that using the Hash Set data structure is much quicker than using the List data structure as the list gets much larger.  The reason a HashSet is quicker is because the hash function only requires a small part of the data structure to be parsed while the DistinctList needs to look at the entire structure.  As we learn more efficient methods, we need to refactor code.
                </p>

                <p>
                    This means that if your code gets to a certain size, then it should be very well commented.  Writing comments in code should look like an essay.
                    With proper commenting, your code should be easy to understand piece by piece.  At the bare minimum, each step of a main program should be commented to display what each main method does.
                </p>

                <p>
                    This method should be used on all programs with 10 or more methods
                </p>

                <h2>4. Using Automated Tests</h2>

                <p>
                    The 4th level of defensive coding is using test methods.  The concept of testing is quite simple, we have a value that we want and a value that we actually get from our code and pass them both into a method called Assert and every language you come across will probably have a testing library that you can start with Assert.IsTrue(true).  You might have realized from the set example that using a HashSet makes “de-dup” code faster, but some of your code accesses data using indexes.  HashSets don’t have indexes so now you’re concerned that when you refactor your code you want to know what else broke.  That’s what tests are for.  After you refactor your code, you want to make sure all of your code still works.
                </p>

                <p>
                    I would say that automated tests should be a requirement for programs that have more than 20 methods.
                </p>

                <h2>5. Using Mock Data and Databases</h2>

                <p>
                    The 5th level of defensive coding is using mock databases inside test methods because we cannot change live data and we probably don’t want to change test data too often either.  With .net core we can actually migrate databases to in-memory sources, allowing us to safely change databases to test the actual database behavior.  Otherwise some developers choose to use mock packages such as moq, which can be tested along live databases but won’t actually change the data.  When using mock databases, we need to use the repository pattern.
                </p>
                
                <p>
                    If a database will be used and there are more than 20 methods, then a mock database should be used.
                </p>

                <h2>
                    6. Creating System-Wide Solutions
                </h2>

                <p>
                    The 6th level of defensive coding is using system-wide solutions such as CICD.  using CICD typically requires Git of some sort.  CICD is meant for very high level version management of software.  The CICD system inputs tests created and related methods to the tests to decide which versions of git are going to the customer.  You can also do things like create standard nuget packages for your team to use when doing things like sending emails, or other very common functions used along different projects.  There are jobs that specialize in these deployment systems instead of coding and typically called Dev Ops Engineers.
                </p>

                <p>
                    This method should be used if there are more than 2 developers on a single project.
                </p>

                <h2>7.  Pushing The Boundaries Of Efficiency</h2>

                <p>
                    The 7th level of defensive coding is really just continuously answering the 4th problem of defensive coding.  Stating that your code cannot be improved is equally arrogant as it is ignorant.  There are always better practices, better solutions, better hardware, better software, better languages, better systems.  People looking for the absolute best way to run their software development systems will be going to conferences and subscribing to developer youtube channels, blogs, and websites.  You get the idea…
                </p>

                <p>
                    Regardless of your job description, ideally you should be trying to figure out better ways to do everything.  But you might eventually find out that someone is using a better method for doing something than you.  Learn from them and see how your current knowledge overlaps with theirs so that you can adapt but not have to change everything.  
                </p>

                <p>
                    For a personal example, web developers using asp.net MVC can make web application with front end and back end completed extremely quick.  But, front ends pages alone can actually be quicker to write, easier to maintain, and are faster to the user when using react.js.  
                </p>

                <p>
                    I've been developing in just MVC and using the javascript frameworks like JQuery.  The applications were developed quick and at the time, that's all I needed to know.
                    However, I decided to use a react application and I was blown away by how quickly the other pages were "loading".  Those who know the react router know what I'm talking about.
                    It turns out that react.js's front end system is actually wholly better than anything JQuery could ever ask for.  So, I started a new journey into learning react and started developing sites with it.  I'll document how that process goes as well.
                </p>

                <p>
                    If the mvc developer wants to learn react, there are ways to compile the same react.js code in mvc.  Otherwise, the MVC developer could learn how to write API methods and have a front-end developer use those API methods.
                </p>

                <h2>How Have I Incorporated This?</h2>

                <p>
                    I've used these techniques a lot more when dealing with back end API's for front end engineers to use.  These API's needed dozens of calls for each different platform and I had to make multiple changes based on requirement changes, design changes, and issues that we didn't know we would have.
                    I would have to make a database change and using tests and different dev environments helped me to ensure that I'm using the correct build for the correct server based on that server's development stage.
                    Our team had a different server for testing, staging, and production, so this was important.
                </p>

                <p>
                    Even if you are not coding in C#, I hope that my article helped you to understand better defensive coding techniques.
                </p>

            </div>
        </div>
    )
}

export default DefensiveCodingBlog;