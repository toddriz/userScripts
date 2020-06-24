// ==UserScript==
// @name         betraining.com Enhancements
// @namespace    https://github.com/Kjuib/userScripts/raw/master/src/betraining_annoying.user.js
// @version      0.1
// @description  make training less annoying
// @author       heber.billings@gmail.com
// @match        https://portal.betraining.com/scorm*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const questions = [
        // Impactful Communication - Setting Proper Expectations
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'How could this issue', 'have been avoided?'],
            answer: 'If expectations were communicated better'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'When should expectations be made clear?'],
            answer: 'As soon as possible'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'Who should you set expectations with?'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'What should you do once you set expectations with someone else?'],
            answer: 'Ensure you understand their expectations of you'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'Which of the following are good expectations to get alignment on?'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Setting Proper Expectations', 'What happens when you don'],
            answer: 'All of these'
        },
        // Impactful Communication - Communication Rules
        {
            text: ['Impactful Communication - Communication Rules', 'What went wrong here?'],
            answer: 'Darren and leslie didnt establish any communication rules.'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'Who should you set up communication rules with?'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'Which communication channel is best for back and forth discussion?'],
            answer: 'Phone Call'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'Why is it important to establish communication rules?'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'Which communication channel would LIKELY be best for emergencies?'],
            answer: 'Phone Call'
        },
        {
            text: ['Impactful Communication - Communication Rules', 'When should communication rules be established'],
            answer: 'Right away'
        },
        // Impactful Communication - Keys to Successful Emails
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'Ideally, what is the purpose'],
            answer: 'Allude to the desire and outcome of the email'
        },
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'Where should you put a Call'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'Why might you not be getting'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'Why might people not be'],
            answer: 'Your information is not structured in a clear, concise way'
        },
        {
            text: ['Impactful Communication - Keys to Successful Emails', 'When is email not the ideal'],
            answer: 'If there will be a lot of back and forth communication'
        },
        // Impactful Communication - Graduated Learning
        {
            text: ['Impactful Communication - Graduated Learning', 'What can happen when you try'],
            answer: 'You dont retain it all, and you have to re-train later'
        },
        {
            text: ['Impactful Communication - Graduated Learning', 'If you frequently find yourself'],
            answer: 'You are providing too much content all at once'
        },
        {
            text: ['Impactful Communication - Graduated Learning', 'implement graduated learning'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Graduated Learning', 'How do you keep yourself on track'],
            answer: 'Give each step of the process an estimated time frame'
        },
        // Impactful Communication - Effective Listening
        {
            text: ['Impactful Communication - Effective Listening', 'What is another good way'],
            answer: 'Maintain eye contact'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'Is this person engaged'],
            answer: 'No'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'How can Effective Listening'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'How do you ensure effective'],
            answer: 'Validate what the other person is saying'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'What is the key to'],
            answer: 'Understanding what the other person is saying'
        },
        {
            text: ['Impactful Communication - Effective Listening', 'Which of the following are steps'],
            answer: 'All of these'
        },
        // Impactful Communication - Being Assertive
        {
            text: ['Impactful Communication - Being Assertive', 'Are you typically more'],
            answer: 'ANY'
        },
        {
            text: ['Impactful Communication - Being Assertive', 'What is the goal of being'],
            answer: 'To develop mutual understanding of needs'
        },
        {
            text: ['Impactful Communication - Being Assertive', 'If you are typically a passive person'],
            answer: 'Share your own needs more frequently'
        },
        {
            text: ['Impactful Communication - Being Assertive', 'What is the key to being assertive'],
            answer: 'Focus on the win-win...'
        },
        {
            text: ['Impactful Communication - Being Assertive', 'If you are typically a more aggressive'],
            answer: 'Focus more on understanding...'
        },
        // Impactful Communication - Healthy Conflict
        {
            text: ['Impactful Communication - Healthy Conflict', 'How could this interaction'],
            answer: 'He should have minimized his assumptions going in'
        },
        {
            text: ['Impactful Communication - Healthy Conflict', 'What worked well in this approach'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Healthy Conflict', 'Why is conflict actually'],
            answer: 'All of these'
        },
        {
            text: ['Impactful Communication - Healthy Conflict', 'What is the first step'],
            answer: 'Setup a time to engage...'
        },
        {
            text: ['Impactful Communication - Healthy Conflict', 'What is the key to getting through'],
            answer: 'Listen to the other persons side and seek to understand...'
        },
        // PCI-101-CS-01: PCI Essentials for Account Data Handlers and Supervisors
        {
            text: ['Which of the following does NOT have to be protected per the PCI'],
            answer: 'The credit card type'
        },
        {
            text: ['Which of the following is an ACCEPTABLE best practice'],
            answer: 'Using an encrypted web-based point of sale terminal'
        },
        {
            text: ['Who is responsible for reporting possible violation'],
            answer: 'Everyone'
        },
        {
            text: ['Which of the following is NOT a common way in which a criminal'],
            answer: 'Randomly creating primary account numbers...'
        },
        {
            text: ['Which of the following statements is TRUE', 'PCI DSS requirements are derived from laws.'],
            answer: 'PCI DSS requirements are contractual obligations'
        },
        // P-101-PB-01: Privacy and Data Protection
        {
            text: ['What do you think the possible consequences are for failing to safeguard private data?'],
            answer: 'All of the above'
        },
        {
            text: ['Who do you think would be negatively affected if you were to accidentally release private data?'],
            answer: 'All of the above'
        },
        {
            text: ['What do you think the possible consequences are for failing to safeguard private data?'],
            answer: 'All of the above'
        },
        {
            text: ['Who do you think is responsible for protecting private data?'],
            answer: 'Everyone'
        },
        {
            text: ['Public', 'A person’s contact information (name and phone number) displayed on a company’s website.'],
            answer: 'Public'
        },
        {
            text: ['Public', 'A bank statement that can be traced back to an individual.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Public', 'The product plans for an unreleased product.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Public', 'A press release.'],
            answer: 'Public'
        },
        {
            text: ['Public', 'A list of dates of birth, with no other information.'],
            answer: 'Public'
        },
        {
            text: ['Public', 'A database of combined public records that can be used to identify an individual.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Public', 'Health records that can be traced back to an individual.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Public', 'Public information collected from a transaction with an individual, such as on an application form.'],
            answer: 'Nonpublic'
        },
        {
            text: ['Before we go any further, let´s make sure you can tell what is and is not private data.', 'Which of the following do you think is NOT private data?'],
            answer: 'A list of your friends names and addresses kept in your computer'
        },
        {
            text: ['Do you think anything special needs to be done in terms of privacy?'],
            answer: 'Yes...'
        },
        {
            text: ['Good Idea', 'A customer whose private data we hold points out that her name and date of birth are incorrect.'],
            answer: 'Bad Idea'
        },
        {
            text: ['Organizations have a responsibility to use physical and technical safeguards to protect the private data they hold.'],
            answer: 'True'
        },
        {
            text: ['Good Idea', 'A customer feels his private data is being compromised. You tell him you will help resolve the problem and let him know how to register a complaint.'],
            answer: 'Good Idea'
        },
        {
            text: ['It is ok to share private data with a third party if we stand to gain from it even though customers have opted out of information sharing.'],
            answer: 'False'
        },
        {
            text: ['A privacy notice is an optional guideline that we should strive to follow.'],
            answer: 'False'
        },
        {
            text: ['Use tiny print when creating a privacy notice and place it somewhere difficult for the customer to find.'],
            answer: 'Bad Idea'
        },
        {
            text: ['Use tiny print when creating a privacy notice and place it somewhere difficult for the customer to find.'],
            answer: 'Bad Idea'
        },
        {
            text: ['Which of the following do you think gives a customer a true "opt-in" choice?'],
            answer: '[Unchecked option]'
        },
        {
            text: ['Since accessing an email account requires a username and password, email is a secure way to send private data electronically.'],
            answer: 'False'
        },
        {
            text: ['Someone calls you and asks to change the password for their account.'],
            answer: 'Bad Idea'
        },
        {
            text: ['You receive a verified request to update a customer', 'inaccurate information and carry it out immediately.'],
            answer: 'Good Idea'
        },
        {
            text: ['secure any physical documents or media that contain private or nonpublic data before you leave your desk.'],
            answer: 'True'
        },
        {
            text: ['You minimize your applications, cover up documents, and work on something else until the visitor leaves.'],
            answer: 'Good Idea'
        },
        {
            text: ['It is ok to view the private data of friends and family so long as you do not tell them you accessed it at work.'],
            answer: 'False'
        },
        {
            text: ['You overhear a colleague discussing private data in public at a restaurant and listen in to the interesting details.'],
            answer: 'Bad Idea'
        },
        {
            text: ['to help ensure it is only used by those with a need to know and to make it easy to know what data or documents should be secured.'],
            answer: 'True'
        },
        {
            text: ['A confidentiality agreement must be in place with customers before we can share their private data with them.'],
            answer: 'False'
        },
        {
            text: ['A man calls in asking for information about his wife', 'You verify that they have the same last name and then give him the information.'],
            answer: 'Bad Idea'
        },
        {
            text: ['A customer calls in asking for her account information.', 'You first verify her identity then give her the information.'],
            answer: 'Good Idea'
        },
        {
            text: ['A customer you are assisting sees another customer walk out the door and asks if that was her friend Julia Smith.'],
            answer: 'True'
        },
        {
            text: ['Different types of data must be kept for different periods of time.', 'After that time has elapsed, the data should be destroyed.'],
            answer: 'DVDs and other media with private data should be disposed of by throwing them in the garbage'
        },
        {
            text: ['True or False? All private data we collect must be kept permanently.'],
            answer: 'False'
        },
        {
            text: ['Your medical records, held by your doctor.', 'Your credit card purchasing history, held by your bank.'],
            answer: 'Your medical records and credit card purchasing history without a way to trace them back to you.'
        },
        {
            text: ['Those with a need to know, such as those who must use the private data to complete their duties.', 'Those who are friends or family of the subject of the private data.'],
            answer: 'Both A and C are correct.'
        },
        {
            text: ['True or False? There is nothing you can do to help protect private data.'],
            answer: 'False'
        },
        {
            text: ['When private data is collected, a privacy notice should be given.', 'A privacy notice is a set of recommendations about handling private data, but not a binding contract.'],
            answer: 'A privacy notice is a set of recommendations about handling private data, but not a binding contract.'
        },
        {
            text: ['Earning and keeping the trust of customers, employees, and the generic public.', 'Complying with laws and regulations.'],
            answer: 'Preventing the release of public data.'
        },
        {
            text: ['True or False? In the U.S., only government, health, and financial records are protected by privacy laws.'],
            answer: 'False'
        },
        {
            text: ['Which of the following must be true for data to be considered private in the U.S.?'],
            answer: 'Both A and B are correct'
        },
        {
            text: ['Paper documents with private data should be stored in a locked drawer or filling cabinet.', 'Email is a secure way to transmit private data.'],
            answer: 'Paper documents with private data should be stored in a locked drawer or filling cabinet.'
        },
        {
            text: ['When a customer requests his or her private data, you must first verify their identity before disclosing it.', 'private data to his/her immediate family and close friends.'],
            answer: 'It is ok to disclose a customers private data to his/her immediate family and close friends.'
        },

        
        {
            text: ['Paper files with sensitive data are only to be kept for the immediate business need. If files are needed'],
            answer: 'True'
        },
        {
            text: ['To prevent unauthorized use to personal computers (PC), log-off your PC any time you to walk away'],
            answer: 'True'
        },
        {
            text: ['Departmental policies and procedures, including manuals, manual codes,'],
            answer: '7 years'
        },
        {
            text: ['I certify that I have received, read, and fully understand the'],
            answer: 'I agree.'
        },

        {
            text: ['CMS reserves the right to monitor the use of all'],
            answer: 'true'
        },
        {
            text: ['Employees must use extreme caution when opening'],
            answer: 'true'
        },
        {
            text: ['Employees may not speak on behalf of the'],
            answer: 'true'
        },

        {
            text: ['Money Laundering is the criminal practice of f'],
            answer: 'true'
        },
        {
            text: ['Adequate due diligence on new and existing customers is a key pa'],
            answer: 'All of the above'
        },
        {
            text: ['CMS is required by law to establish an ongoing employee-training program so as to ensure its staff members are adequately trained in KYC procedures.'],
            answer: 'true'
        },
        {
            text: ['Unfair, deceptive, or abusive acts and practices ("UDAAP"'],
            answer: 'All of the Above'
        },
        {
            text: ['The Dodd-Frank Act makes it unlawful for any service provider to engage'],
            answer: 'true'
        },
        {
            text: ['Consumer complaints received through online or'],
            answer: 'All of the Above'
        },
        {
            text: ['Risk assessments are designed to identify and assess the overall risks to CMS including s'],
            answer: 'true'
        },
        {
            text: ['Risks to CMS include:'],
            answer: 'All of the Above'
        },
        {
            text: ['What are CMS Enhanced Due Diligence categories?'],
            answer: 'Direct Sales, travel services, vehicle service'
        },
        {
            text: ['Risk assessments are designed to identify and assess the overall risks to CMS including strategic, operational, fraud, credit, compliance, legal and reputation risk.'],
            answer: 'true'
        },
        {
            text: ['Financial services company must monitor the activities of employees to ensure they do not engage in unfair, deceptive, or abusive acts or practices with respect to consumer interact'],
            answer: 'false'
        },
        {
            text: ['A representation may be __________ if the majority of consumers in the target class do not share the consumer'],
            answer: 'Deceptive'
        },
        {
            text: ['Under Regulation Z and the Truth in Lending Act, creditors must'],
            answer: 'Clearly'
        },
        {
            text: ['The Federal Trade Commission (FTC) has the authority to protect consumers'],
            answer: 'true'
        },
        {
            text: ['Who has rulemaking authority for UDAAP?'],
            answer: 'CFPB'
        },
        {
            text: ['All of the following are required to support the standard for unfairness under UDAAP, EXCEPT'],
            answer: 'The injury was not caused on purpose'
        },
        {
            text: ['Substantial injury can include monetary harm.'],
            answer: 'true'
        },
        {
            text: ['Emotional impact may not amount to or contribute to substantial injury'],
            answer: 'false'
        },
        {
            text: ['All of the below must be present to show that an act or practice is deceptive under UDAAP, EXCEPT:'],
            answer: 'The consumer\'s interpretation of the representation, omission, act, or practice is accepted regardless of the circumstances'
        },
        {
            text: ['A representation may be deceptive even if the majority of consumers in the target class'],
            answer: 'true'
        },
        {
            text: ['The legal standards for abusive, unfair, and deceptive acts'],
            answer: 'false'
        },
        {
            text: ['What is a red flag to conduct a detailed review of a practice?'],
            answer: 'Presense of Complaints'
        },
        {
            text: ['A single substantive complaint does not warrant further review or raise serious concerns.'],
            answer: 'false'
        },
        {
            text: ['When reviewing complaints for your financial services company'],
            answer: 'Regulators'
        },
        {
            text: ['s UDAAP program provides guidelines and rules'],
            answer: 'Complaint management'
        },
        {
            text: ['disclose the costs and terms of credit'],
            answer: 'true'
        },
        {
            text: ['An unfair, deceptive, or abusive act or practice never violates other federal or state laws'],
            answer: 'false'
        },
        {
            text: ['overarching policies are administered by all of the following EXCEPT'],
            answer: 'Sectretarial pool'
        },
        {
            text: ['Financial services companies should ensure UDAAP'],
            answer: 'Annual report to investors'
        },
        {
            text: ['Types of systematic measures acting as internal controls instituted by a financial services'],
            answer: 'true'
        },
        {
            text: ['Procedures and scripts used by internal or external debt collectors is not'],
            answer: 'false'
        },
        {
            text: ['Social media communications do not have to be reviewed'],
            answer: 'false'
        },
        {
            text: ['Underwriting of credit files should accurately represent the amount of usable credit that the consumer will receive, '],
            answer: 'true'
        },
        {
            text: ['but the company does not need to monitor the activities of third-party'],
            answer: 'false'
        },
        {
            text: ['All of the following fall represent a higher-risk for UDAAP compliance EXCEPT'],
            answer: 'Loans secured by property'
        },
        {
            text: ['Financial institutions do not need to identify inherent risks related to consumer harm'],
            answer: 'false'
        },
        {
            text: ['A(n) _______ is a waiver of the consumer'],
            answer: 'Confession of judgement'
        },
        {
            text: ['A cosigner shares the responsibility for the debt with the borrower. If the borrower does not pay the debt, the cosigner is responsible for repaying the remaining balance of the debt'],
            answer: 'true'
        },
        {
            text: ['A(n) _______ is the requirement of a creditor, as a condition of granting credit, '],
            answer: 'Assignment of wages'
        },
        {
            text: ['The primary difference between money laundering and terrorist financing is that the intent of money laundering is to hide the ________ of funds, whereas terrorist financing seeks to hide the _______ of the funds.'],
            answer: 'Source / Purpose'
        },

        {
            text: ['he primary purpose of the Bank Secrecy Act (BSA) is to assist the United States government in the detection and prevention of money laundering, terrorist financing, and other illegal financial activity'],
            answer: 'true'
        },
        {
            text: ['Criminals disguising the source of the money by performing a series of intricate transactions through the world'],
            answer: 'Money Laundering'
        },
        {
            text: ['Select all that apply. The three independent steps in the money laundering process include'],
            answer: 'Integration, Placement, Layering'
        },
        {
            text: ['When a customer purchases money orders or traveler'],
            answer: 'Between 5000 and 9999'
        },
        {
            text: ['s Customer Identification Program (CIP) applies to all customers.'],
            answer: 'false'
        },
        {
            text: ['intent is to hide the ________ of funds, whereas terrorist financing seeks to hide the _______ of the funds'],
            answer: 'Source / Purpose'
        },
        {
            text: ['John, a Money Express customer, uses cash to purchase $6,000 in traveler'],
            answer: 'Yes'
        },
        {
            text: ['________ is a bureau of the U.S. Department of the Treasury with the mission to safeguard the financial system from illicit use, combat money laundering'],
            answer: 'FinCEN'
        },
        {
            text: ['Select all that apply. The USA PATRIOT Act was enacted to'],
            answer: '3 - To place more scrutiny..., Establish information sharing..., Criminalize the financials of...'
        },
        {
            text: ['The penalties for violating the Bank Secrecy Act can be civil, criminal, or intangible'],
            answer: 'true'
        },
        {
            text: ['All MSBs must register with FinCEN'],
            answer: 'false'
        },
        {
            text: ['Information that must be reported on a SAR includes all the following EXCEPT'],
            answer: 'Apparel worn...'
        },
        {
            text: ['A CTR must be completed for any individual or multiple cash transaction totaling at least'],
            answer: '10,000.01'
        },
        {
            text: ['A record must be kept for the exchange of currency in the amount of  ___'],
            answer: '1,000'
        },
        {
            text: ['A _________ must be completed for any transaction of at least $2,000 aggregate that the institution knows or suspects might be suspicious'],
            answer: 'Suspicious activity report'
        },
        {
            text: ['All of the following are among the five pillars of an AML program EXCEPT'],
            answer: 'Institution registration with FINCEN'
        },
        {
            text: ['The BSA requires MSBs to have a formalized Customer Identification Program'],
            answer: 'false'
        },
        {
            text: ['The USA PATRIOT Act generally prohibits doing business with Politically Exposed Persons (PEPs)'],
            answer: 'false'
        },
        {
            text: ['Section 326 of the USA PATRIOT Act added additional provisions to the overall Bank Secrecy Act (BSA) requirements'],
            answer: 'true'
        },
        {
            text: ['The Know Your Customer principals'],
            answer: 'Types of acceptable identification'
        },
        {
            text: ['Telling a customer you need to file a SAR is appropriate because it is the law'],
            answer: 'false'
        },
        {
            text: ['Select all that apply. What information should be included in a SAR'],
            answer: 'ALL'
        },
        {
            text: ['One of the primary purposes of the Bank Secrecy Act is to help deter money laundering by creating a "paper trail" and an "information trail."'],
            answer: 'true'
        },
        {
            text: ['Certain information must travel to the next financial institution processing the transfer.'],
            answer: 'true'
        },

        {
            text: ['Select all that apply. The Bank Secrecy Act is the law that requires financial institutions, casinos, and certain other businesses to'],
            answer: ''
        },
        {
            text: ['s core activities involve "following the money," which includes all of the following EXCEPT'],
            answer: 'Charging Import and Duty Fees'
        },
        {
            text: ['s checks for cash for which amounts must an institution obtain and retain certain information about the customer'],
            answer: 'between 5000 and 9999'
        }
        // {
        //     text: [''],
        //     answer: ''
        // },
    ];

    function postMessage(text) {
        let box = document.body.querySelector('.betrainingIsDumb');
        if (!box) {
            const style = [
                'position: absolute',
                'top: 5px',
                'left: 5px',
                'width: 200px',
                'background: lightblue',
                'padding: 5px',
                'border-radius: 5px',
                'border: solid 2px black'
            ]
            box = document.createElement('div');
            box.classList.add('betrainingIsDumb');
            box.style = style.join(';');

            document.body.appendChild(box);
        }

        box.innerHTML = text;
    }

    function contains(text) {
        return text.reduce((acc, current) => {
            if (!acc) {
                return acc;
            }

            try {
                return (
                    document.body.innerHTML.includes(current) ||
                    document.querySelector('iframe').contentWindow.document.body.innerHTML.includes(current) ||
                    document.querySelector('iframe').contentWindow.document.querySelector('frame').contentWindow.document.body.innerHTML.includes(current)
                )
            } catch (e) {
                return false;
            }
        }, true);
    }

    function closeDumbDialogs() {
        try {
            const closeButton1 = document.querySelector('iframe').contentWindow.document.body.querySelector('[id*="Dialog"]:not([style*="none"]) [id*="DialogCloseButton"]');
            if (closeButton1) {
                closeButton1.click();
            }
        } catch (e) {
            // ignore
        }
    }

    function clickNext() {
        try {
            const nextButton = document.querySelector('iframe').contentWindow.document.querySelector('frame').contentWindow.document.body.querySelector('.page_nav_inner input[value="Next"]');
            if (nextButton) {
                nextButton.click();
            }
        } catch (e) {
            // ignore
        }
    }

    function check() {
        let found = false;
        questions.forEach((item) => {
            if (contains(item.text)) {
                postMessage(`Answer:<br />${item.answer}`);
                found = true;
            }

            closeDumbDialogs()
            clickNext();
        });

        if (!found) {
            postMessage('');
        }
    }

    setInterval(check, 500);
})();
