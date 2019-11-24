import React from 'react'

const WebsiteRequest = () => {

    return (
    <div>
        <h1>Request A Website!</h1>

        <div className='Contact'>
            Name:  <input type='text' name='Name' />
            <br />
            Company Name <input type='text' name='CompanyName' />
            <br />
            Phone:  <input type='text' name='Phone' />
            <br />
            Email: <input type='text' name='Email' />
            <br />

        </div>
        
        <br /><br />

        <div className='HostingType'>
            <h2>Step 1:  Choose Hosting Type</h2>
            <br />
            <div>
                <input type='radio' name='HostingType' value='RC1' />
                RC-1 (RC-Domain)
                <br />
                <div>
                    <ul>
                        <li>Domain and Hosting Provided</li>
                        <li>$612.00 startup cost</li>
                        <li>Free Maintenance for 1 year</li>
                    </ul>
                </div>
            </div>

            <div>
                <input type='radio' name='HostingType' value='RC2' />
                RC-2 (RC-Hosting)
                <br />
                <div>
                    <ul>
                        <li>Hosting Only</li>
                        <li>$600.00 Starting cost</li>
                        <li>Free Maintenance for 1 year</li>
                    </ul>
                </div>
            </div>

            <div>
                <input type='radio' name='HostingType' value='RC3' />
                RC-3 (RC-Independent)
                <br />
                <div>
                    <ul>
                        <li>Files Only</li>
                        <li>No Startup Cost</li>
                        <li>Extra services available at $125.00/hour</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <br /><br />

        <div className='StackType'>
            <h2>Step 2: Choose Your StackType</h2>
            <br />
            <div>
                <input type='radio' name='StackType' value='WordPress' />
                RC WordPress
                <br />
                <div>
                    Details
                    <ul style={{}}>
                        <li>Price
                            <ul>
                                <li>$300/page</li>
                                <li>First 3 pages free if hosted by Ryan Caigoy</li>
                            </ul>
                        </li>
                        <li>Website Performance:  
                            <ul>
                                <li>Slow</li>
                            </ul>
                        </li>
                        <li>Estimated Delivery Time
                            <ul>
                                <li>3 Page delivery 15 business days </li>
                                <li>+3 days per extra page</li>
                            </ul>
                        </li>
                        <li>Content Management System: 
                            <ul>
                                <li>Built-in</li>
                            </ul>
                        </li>
                        <li>Login/Register System
                            <ul>
                                <li>Built-in</li>
                            </ul>
                        </li>
                        <li>Scalability
                            <ul>
                                <li>None</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <br />

                <input type='radio' name='StackType' value='MVC' />
                RC Sharp
                <br />
                <div>
                    Details
                    <ul>
                        <li>Price
                            <ul>
                                <li>$300/page</li>
                                <li>First 3 pages free if hosted by Ryan Caigoy</li>
                            </ul>
                        </li>
                        <li>Website Performance
                            <ul>
                                <li>Medium</li>
                            </ul>
                        </li>
                        <li>Estimated Delivery Time
                            <ul>
                                <li>3 Page delivery 15 business days</li>
                                <li>+3 days per extra page</li>
                                <li>+3 days per extra feature</li>
                            </ul>
                        </li>
                        <li>Content Management System
                            <ul>
                                <li>$500 per CMS page</li>
                            </ul>
                        </li>
                        <li>Login/Register Systm
                            <ul>
                                <li>$500</li>
                            </ul>
                        </li>
                        <li>Scalability
                            <ul>
                                <li>$500 per added feature</li>
                                <li>$500 full api conversion to React + $300/page</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <br />

                <input type='radio' name='StackType' value='React1' />
                RC React
                <br />
                <div>
                    Details
                    <ul>
                        <li>Price
                            <ul>
                                <li>$300/page</li>
                                <li>First 3 pages free if hosted by RyanCaigoy</li>
                            </ul>
                        </li>
                        <li>Website Performance
                            <ul>
                                <li>Fast</li>
                            </ul>
                        </li>
                        <li>Estimated Delivery Time</li>
                        <ul>
                            <li>3 Page delivery 15 business days</li>
                            <li>+3 days per extra page</li>
                            <li>+5 days per extra feature</li>
                        </ul>
                        <li>Content Management System
                            <ul>
                                <li>$800 per CMS page</li>
                            </ul>
                        </li>
                        <li>Login/Register System
                            <ul>
                                <li>$800</li>
                            </ul>
                        </li>
                        <li>Website Performance
                            <ul>
                                <li>Fast</li>
                            </ul>
                        </li>
                        <li>Scalability
                            <ul>
                                <li>$800 per added feature</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <br />

                
            
            </div>
        </div>


        <div className='DesignType'>
            <h2>Do you have a web design ready?</h2>

            <br />

            <input type='radio' name='DesignType' value='Yes' /> Yes (30% off each fully designed page)

            <br />

            <input type='radio' name='DesignType' value='Maybe' /> I have a logo and some pictures

            <br />

            <input type='radio' name='DesignType' value='No' /> No logo, maybe some pictures

            <br />

        </div>

        <div className='DesignPricing'>
            Would you like us to provide professional UI/UX design?
            <input type='checkbox' name='UIUX' value='UIUX' />
            <br />

            Would you like us to create a logo? ($300)
            <input type='checkbox' name='Logo' value='Logo' />
            <br />

            Would you like us to find stock photos to add for you? ($50)
            <input type='checkbox' name='Photos' value='Photos' />
            <br />

            {/* Professional Photographer */}

        </div>

        <div className='Maintenance'>
            Maintenance is optional at $300/year.  
            <br />
            If you host with Ryan Caigoy, the first year of maintenance is free.
            <br />
            Maintenance includes:
            <ul>
                <li>Free website issue troubleshooting</li>
                <li>Free updates upon re-subscription</li>
                <li>Free website monitoring</li>
            </ul>
        </div>

        <br /><br />

        <div className='ECommerce'>
            Are you selling anything on this website?
            <input type='checkbox' name='ECommerce' />
            <br />
            <div className='ECommerceFeatures'>
                Select additional features:
                <br />

                <input type='checkbox' name='Square' />
                Square payments to process transactions
                <br />

                <input type='checkbox' name='PMS' />
                Product Management System
                <br />

                <input type='checkbox' name='PQS' />
                Product Query System
                <br />

                <input type='checkbox' name='PVS' />
                Product View System
                <br />

            </div>
        </div>

        <br /><br />

        <div className='AdditonalComments'>
            Any Additional Comments Regarding this site?
            <textarea></textarea>
        </div>

        <div className='Note'>
            Note:  Not all websites are equal and some are more difficult or time consuming than others.
            <br />
            This survey is only an estimate of the time, effort, and cost to build a website.
            <br />
            
        </div>



    </div>)
}

export default WebsiteRequest