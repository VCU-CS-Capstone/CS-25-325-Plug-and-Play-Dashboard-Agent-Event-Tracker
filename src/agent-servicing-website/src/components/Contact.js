import React, { useState } from "react";
import "./Contact.css";


const Contact = () => {
    const [showContactOptions, setShowContactOptions] = useState(false);

    const showPageT = () => {
        setShowContactOptions(true);
    };

    const showPageF = () => {
        setShowContactOptions(false);
    };

    return (
        <div className="contact-box">
            {!showContactOptions ? (
                <>
                    <h2>Contact Us</h2>
                    <p>
                        Click below to show a list of Department Extenstions for Capital One 
                    </p>
                    <button className="button" onClick={showPageT}>Contact Options</button>
                </>
            ) : (
                <><table className="payment-history-table">
                        <thead>
                            <tr>
                                <th>Department</th>
                                <th>Contact Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sales</td>
                                <td>1-877-383-4802</td>
                            </tr>
                            <tr>
                                <td>Fraud</td>
                                <td>1-888-464-0727</td>
                            </tr>
                            <tr>
                                <td>Customer Service</td>
                                <td>1-877-383-4802</td>
                            </tr>
                            <tr>
                                <td>Finance</td>
                                <td>1-877-383-4802</td>
                            </tr>
                            <tr>
                                <td>Human Resources</td>
                                <td>1-888-376-8836</td>
                            </tr>
                            <tr>
                                <td>Maintenance</td>
                                <td>1-877-383-4802</td>
                            </tr>
                            <tr>
                                <td>IT</td>
                                <td>1-877-383-4802</td>
                            </tr>
                        </tbody>
                    </table><button className="button" onClick={showPageF}>back</button></>

            )}
        </div>
    );
};



export default Contact;