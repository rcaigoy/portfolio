import React from 'react';

function MVCBlog() {
    return (
		<div className="Body-Content">
            <div className="Blog">
                <br /><br />
                <h1>MVC and Entity in C#</h1>
                <br /><br />

                <h2>
                    MVC
                </h2>
                
                <p>
                    MVC is a developer software architectural pattern that separates the user from the system from the user interface.
                    <ul>
                        <li>odel is the data on the server side</li>
                        <li>The view the visual aspects that the user is able to see</li>
                        <li>The controller is the system that acts as the communicator between the user and the server</li>
                    </ul>
                </p>

                <h2>
                    Entity
                </h2>

                <p>
                    When using the MVC architectural pattern, the model is what’s supposed to translate between the entity and the controller.  This isn’t exactly the case for the repository pattern (I’ll talk about that later).
                </p>

                <p>
                    When we are using viewbags, we can easily parse through entity class objects and return just the data that we want to see.  However, the entity class isn’t able to be passed into JSON alone.  With the weird foreign key properties that need to be passed into the entity classes (virtual objects and collections), json isn’t able to parse through everything and return it to the user.  Instead we need to translate the entity class into a readable model class.  The way I see it, there are 3 ways to do this.  If it’s only getting passed in one time, then the first way to do it is to create a new anonymous object by passing in the entity object’s data into the same name variables.
                </p>

                <p>
                    The 2nd way is to create a model class that is already readable and use the entity model as a parameter into the model class’s constructor.  With that entity class passed into the model class’s constructor we can simply match each value into the model class from the entity class.  With this method, we can make an easy translation between the model and entity class.  This worked great for me until I had to create a database table with about 65 different columns.  No there wasn’t a better way for me to obtain their information
                </p>

                <h2>So What Was the Easiest Thing To Do Here?</h2>

                <p>
                    I created a model class but I used a package called “TinyMapper”.  Mappers in C# are great because C# developers know how hard it is to translate objects into objects that will fit into the system being used.   I still needed to declare each variable in the model class, but the constructor just needed to use tinymapper with the source as the parameter and the target being “this”
                </p>

                <h2>
                    MVC and Entity Makes Back End Development Really Easy!
                </h2>

                <p>
                    C#, ASP.net, visual studio, MVC, and Entity are all Great for a full stack developer to return a working application FAST.  I had a full plate of work pushed onto me and a priority project came in that was asking for me to build a project management system.  They asked for a bunch of specifications and asked how long it would take me to get it done.  I told them I could get a working prototype in about 2 weeks.  I was still pretty new as a professional web developer and I didn’t know that we’re supposed to give each coding project about a month.  I delivered in 2 weeks anyways.  The first week was spent designing the database and creating a functional web application.  The 2nd week was spent trying to make the  project look nice.  This wasn’t also mentioning the small requests they had such as being able to automate customized excel spreadsheets and importing lists of team members into the system.
                </p>

            </div>
        </div>
    )
}

export default MVCBlog;