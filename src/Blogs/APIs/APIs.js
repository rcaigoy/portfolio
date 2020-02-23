import React from 'react';

function APIs() {
    return (
		<div className="Body-Content">
            <div className="Blog">
                <br /><br />
                <h1>API's and the Repository Pattern</h1>
                <br /><br />
                <p>
                    As more developers started coming into my workplace, upper management wanted efficiency on both the project delivery time and user interface perspective.  They wanted projects to be completed faster and for the applications to be fast in the user’s eyes.  They separated the large projects into front end developers and backend developers.  There were other aspects of large projects such as the design team and project coordinators, but the point I’m trying to make is that my team was to focus on the backend only and that’s why we had to learn how to develop API’s.
                </p>

                <p>
                    API’s are a pretty simple concept.  We place into a URL the data we want to push or receive (get or post methods).  When using MVC and returning json files, it’s quite easy.  But when we are using different front end platforms as back end platforms, sometimes we need to ensure that the front end server is able to talk to the backend server.  So using different servers became a problem.
                </p>

                <p>
                    To use build in API controller methods, instead of inheriting from the mvc controller class, we are inheriting from api controller classes.  We don’t get to return ActionResults anymore.  Instead we’re returning HttpRequestMessages.

                    We also need to be careful and look at our web config.  With API’s we need to understand what different URL method calls mean as well.  For example, in the web config we need to ensure that our code accepts HttpGet, HttpPost, and HttpOptions methods.  
                </p>

                <h2>
                    Documentation with SWAGGER
                </h2>

                <p>
                    When I first made API’s, my solution to displaying my API library was to create an html file that shows the name of each api call, what the inputs are, what the outputs are, and what the overall call does.  Then I started realizing that I had to keep track of the html file every time the project’s logic had to change even just a little.  Swagger is a great plugin tool that automatically updates an html file to display the functionality of each public controller method.  Now I can focus more on coding and less on documentation.
                </p>

                <h2>Testing API Code</h2>

                <p>
                    With larger projects, there are also a lot more classes and methods used. With a lot more methods, it’s much better practice to use automated tests.  But with automated tests, we don’t want to test calls that change the database.  We can get around that using the repository pattern and moq.
                </p>

                <h2>
                    What is the Repository Pattern?
                </h2>

                <p>
                    The repository pattern is just the coding architecture having a header interface for a controller to see and then actual classes that implement the header class.  With these implementations, we can have multiple classes inherit from the same header class if we wanted.  
                </p>

                <p>
                    For those that use the mvc architecture, the repository pattern simply splits the model into 4 components:  Entity classes, Model Classes, Header classes, and Repository classes.  There are the entity classes, which consists of classes that match the database and are also referred to in the dbset class.  There are model classes that are also known as DTO classes.  The names aren’t as relevant but these are the readable versions of the entity classes that can be parsed into json files for the front end to see.  Then there are of course the repository header interfaces and the repository implemented classes.  The separation of these classes have been argued to be not as effective as once thought, but it can make testing code easier with mock data.
                </p>

                <h2>
                    What is Mock Data?
                </h2>

                <p>
                    Mock data is data that is very much like the live data, but will not change the live data.  If we are using .net core then you could migrate the data to local memory.  Otherwise you could just transfer the live data to a test database or even local sql server.  If you are lazy enough like me, then you use moq to use a mock object database that “returns” the same database as the test database.  With the nature of mock data, the actual databases don’t change.  However, the code still runs as if the database was changed.
                </p>

                <h2>Why Use Mock Data With The Repository Pattern?</h2>

                <p>
                    This is so that we can change our API as needed (because requirements for our software always change).  With every change we make, we don’t know what else is going to break and if we can automate tests that simulate get and post methods, then we can find any errors a lot quicker and hopefully before any customers do.
                </p>

            </div>
        </div>
    )
}

export default APIs;