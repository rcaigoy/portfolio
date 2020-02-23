import React from 'react';

function AsynchronousBlog() {
    return (
		<div className="Body-Content">
            <div className="Blog">
                <br /><br />
                <h1>Asynchronous C#</h1>
                <br /><br />
                <p>
                If you haven’t tried asynchronous coding, then you probably should.  I’ve actually never used asynchronous coding techniques until my programs started slowing down in the UI and there wasn’t any other way for me to make it better.  For some reason, the email function in C# takes FOREVER.  I mean a good 10 seconds, which can be a nightmare in UI time.  But when I sent the email using an asynchronous method, the process took about 2 seconds.
                </p>

                <h2>
                    What is asynchronous programming?    
                </h2>

                <p>
                    Asynchronous programming is separating the code into a different thread.  It creates a new process in the operating system, but this prevents the current UI from getting locked.  Nobody likes it when their program says “not responding”  well when we use asynchronous programming, we tell a separate thread to do an asynchronous process and then we tell the current thread to “wait” for the response.  Once that response comes back into the main thread, then the main thread can update the rest of the code where the update was supposed to return.
                </p>

                <h2>
                    What does all of this really mean?
                </h2>

                <p>
                    Imagine that you and a few friends decide to go grocery shopping and you need to buy peanut butter, jelly, and bread.  Each item takes 5 minutes to get and return to the register.  If you and your friends decided to only use synchronous methods to grocery shop, then you might decide to take 5 minutes to get the peanut butter, then 5 minutes to get the jelly, and then 5 minutes to get the bread, taking 15 total minutes.  But, if you and your friends decided to use asynchronous methods, then you could get the peanut butter while another friend gets the jelly, and another friend gets the bread.  This new separation will only take you 5 minutes because you did the processes at the same time.
                </p>

                <h2>Asynchronous Programming THAT Efficient?</h2>

                <p>
                    No, but it's close.  If each process takes 5 minutes, then the overall process might take 5-7 minutes instead of 15.  In C#, The syntax can get a bit funky as we need to use await calls and state methods as asynchronous with the Task keywords but from the user’s perspective, it’s 100% worth learning.
                </p>

            </div>
        </div>
    )
}

export default AsynchronousBlog;