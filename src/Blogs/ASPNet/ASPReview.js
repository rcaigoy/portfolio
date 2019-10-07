import React from 'react';

function ASPReview() {
    return (
		<div className="Body-Content">
        <div className="Blog">
			<br /><br />
			<h1>Reviewing C# Asp.net and MVC</h1>
			<br /><br />
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				C# seems to be a very easy language to pick up.  
				It’s object oriented and strongly typed so those who know Java, C, C++, 
				or other strongly typed object oriented languages should be able to pick it up 
				quickly.  There are a lot of similarities between C# and other object oriented 
				languages, which is why I wanted to go through how easy it is to transition into 
				C#, what the differences are, what the advantages are, and what disadvantages 
				there are.
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				C# uses all of the syntax that we see from other languages.  That includes public 
				and private variables, classes, and methods.  We still use integers, strings, floats, 
				doubles and even custom objects.  For loops, while loops, recursive functions, parameters.  
				Pretty much all of the basics of other languages are transferred over.  Writing to the 
				console is pretty easy too.  Hello world is created with Console.WriteLine(“Hello World”).  
				Not all object oriented languages use typecasting, but it’s easy to convert datatypes into 
				other datatypes as long as the values are compatible.  C# also allows usage of the datatype 
				“var” which many developers might know from javascript.
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				Some of the things that are different from C# as other object oriented languages are that
				 C# herits classes by using the colon character ‘:’.  When morphing an abstract method, we 
				 just need to use the term “override” before stating the name of the method.  I also really 
				 like that C# care much more about what the user sees and less about what the computer sees.  
				 Pointers are still a thing in C# but RAM Addresses almost become irrelevant as every variable 
				 returns the value that the reference holds and not some weird looking address value.
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				In the C# world, data structures are known as collections.  That’s because the base class of 
				data structures are what’s called IEnumerables.  This abstract class is the base of the data 
				structures that can access each inside value (called an ienumerator) with a foreach loop.  
				There’s also a built in LINQ language that incorporates lambdas for queries.  As an example, 
				if we have a list of person objects and each person object has 2 values, the name and age, 
				then we could return filter of that list by using a lambda.  
				<br />
				Below is an example of getting a 
				query of all people in the list over 18.
				<br /><br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				var query = persons.Where(x => x.age > 18)
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				Libraries are pretty easy to use because of Visual Studio’s autocorrect feature.  After using 
				a library class, just use the `.` character after and you can see what methods are available to 
				use.  
				C# with visual studio is great!  Visual studio provides a very easy to use interface and you are 
				set up very quickly with a working template of code.  Visual studio also has a GUI for git for 
				those who don’t like having to open up a command prompt to use git.  
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				Each application uses a 
				config file.  For console apps and client apps it’s app.config and for websites, it’s web.config.  
				The code can reference config file information just by using the system.configuration library.  
				We use this for changing connections to different databases, URL’s, changing the admin list of 
				sites, and even stating if the website is in test mode or production mode.  
			</p>
			<p>
				Syntax differences from other Object Oriented Languages:
			</p>
				<ul>
					<li>
						Inherit with `:` 
					</li>
					<li>
						using `Get` and `Set` keywords for read and write
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						(No returning of weird RAM addresses like in C++)
						<br /> 
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						(Except I haven't tried doing this with pointers)
					</li>
					<li>
						Anonymous objects 
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						(you can just use something like <b>new {`\{`}data = "Hello World"{`\}`}</b>
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						and this anonymous object will be created with a string variable
						called "data" equal to "Hello World"
					</li>
					<li>
						White spaces are mostly irrelevant.  
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						(a lot of languages actually do this but not all)
					</li>
				</ul>
				<ul>
					<li>
						Libraries
					</li>
					<li>
						Easy to search on the internet for nuget packages
					</li>
					<li>
						Easy to import another project into references
					</li>
				</ul>
			<p>
				Visual studio
				A few key functions that are useful, but aren’t used in other places
			</p>
				<ul>
					<li>
						Git has an easy GUI
					</li>
					<li>
						Easy to import sql code
					</li>
					<li>
						Very good code autocorrect
					</li>
				</ul>
			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				My favorite feature is the autocorrect and the variable/method checker. 
				<br />
				<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				Data structures (collections)
				Asp.net fluent members around the globe refer to the data structures as collections
				IEnumerables
				The highest level of collections
				LINQ language and lambdas
			</p>

			<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				Overall C# is great.  I needed to learn C# this past year because it’s the language used along 
				the internal servers at my work place.  Larger corporations seem to love using Microsoft servers 
				because microsoft makes it pretty easy for hundreds, thousands, or even hundreds of thousands of 
				employees to communicate with each other within a domain.  C# is 
				mainly used on Microsoft Operating Systems, so it might not be very appealing for 
				smaller companies to want to use.
				Web hosting with Windows servers is also generally more 
				expensive than linux hosting because windows servers require licensing from Microsoft, while 
				linux is a free operating system. 
				<br /><br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				You can get around using IIS with ASP.Net Core, which is very similar.  I haven't tried hosting 
				any asp.net core sites on linux, but google tells me it's possible.
				For those wanting to build upon C#, it’s much easier to get a 
				job in medium to large size corporations than smaller companies or startups.  It's 100% worth 
				learning, especially if you're already an object oriented disciplined programmer.
			</p>

		</div>
        </div>
    );
}

export default ASPReview;