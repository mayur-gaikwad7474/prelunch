import React from 'react'
import Logo from '../Assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import Linkedin from '../Assets/linkedin.svg'
import Twitter from '../Assets/twitter.svg'

const Termsandcondition = (props) => {
    return (
        <div>
            <nav>
                <div className="logo" onClick={() => props.history.push('/')}>
                    <img src={Logo} alt="" />
                    <strong>Creatosaurus</strong>
                </div>
                <NavLink to={{
                    pathname: '/waitlist',
                }}
                    className="wailist-button">
                    Join Waitlist
              </NavLink>
            </nav>
            <main className="privacy">
                <p>
                    Welcome, and thank you for your interest in Creatosaurus (“Creatosaurus,” “we,” or “us”) and our
                    website at Creatosaurus.io, along with our related websites, networks, applications,
                    mobile applications, and other services provided by us (collectively, the “Service”).
                    These Terms of Service are a legally binding contract between you and Creatosaurus regarding
                    your use of the Service.
                </p>
                <h2>Please read the following terms carefully</h2>
                <p>
                    BY CLICKING “I ACCEPT,” OR BY DOWNLOADING, INSTALLING, OR OTHERWISE ACCESSING OR USING THE SERVICE,
                    YOU AGREE THAT YOU HAVE READ AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE SERVICE,
                    YOU AGREE TO BE BOUND BY, THE FOLLOWING TERMS AND CONDITIONS, INCLUDING CREATOSAURUS’S PRIVACY
                    POLICY AND ANY ADDITIONAL TERMS AND POLICIES CREATOSAURUS MAY PROVIDE FROM TIME TO TIME
                    (TOGETHER, THESE "TERMS"). If you are not eligible or do not agree to the Terms, then you do
                    not have our permission to use the Service. YOUR USE OF THE SERVICE, AND CREATOSAURUS’S
                    PROVISION OF THE SERVICE TO YOU, CONSTITUTES AN AGREEMENT BY CREATOSAURUS AND BY YOU TO BE
                    BOUND BY THESE TERMS.
                </p>
                <p>
                    Please read the Creatosaurus Privacy Policy (https://creatosaurus.io/privacy-policy) carefully
                    for information relating to our collection, use, storage, disclosure of your personal information.
                    The Creatosaurus Privacy Policy is incorporated by this reference into, and made a part of,
                    these Terms.
                </p>
                <h2>Arbitration notice</h2>
                <p>
                    Except for certain kinds of disputes described in Section 16, you agree that disputes arising
                    under these Terms will be resolved by binding, individual arbitration, and BY ACCEPTING THESE
                    TERMS, YOU AND CREATOSAURUS ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN
                    ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT
                    to assert or defend your rights under this contract (except for matters that may be taken to
                    small claims court). Your rights will be determined by a NEUTRAL ARBITRATOR and NOT a judge or
                    jury. (See Section 16).
                </p>
                <h2>1. Creatosaurus Service Overview</h2>
                <p>
                    The Service provides a social media marketing platform that enables users to curate, create &
                    release posts on social platforms at a scheduled time, in addition to other design, suggestions
                    and analytics tools to help users’ with their social media.
                </p>
                <h2>2. Eligibility</h2>
                <p>
                    You must be at least 13 years old to use the Service. By agreeing to these Terms, you represent
                    and warrant to us that: (a) you are at least 13 years old; (b) you have not previously been
                    suspended or removed from the Service; and (c) your registration and your use of the Service is
                    in compliance with any and all applicable laws and regulations. If you are an entity,
                    organization, or company, the individual accepting these Terms on your behalf represents and
                    warrants that they have authority to bind you to these Terms and references to you herein
                    (and all of your obligations hereunder) will refer to such entity and any individual using
                    the Service on such entity’s behalf.
                </p>
                <h2>3. Accounts and Registration</h2>
                <p>
                    To access most features of the Service, you must register for an account. When you register for
                    an account, you may be required to provide us with some information about yourself, such as your
                    name, email address, or other contact information. You agree that the information you provide to
                    us is accurate and that you will keep it accurate and up-to-date at all times. When you register,
                    you will be asked to provide a password. You are solely responsible for maintaining the
                    confidentiality of your account and password, and you accept responsibility for all activities
                    that occur under your account. If you believe that your account is no longer secure, then you must
                    immediately notify us at contact@creatosaurus.io.
                </p>
                <h2>4. General Payment Terms</h2>
                <p>
                    Premium features of the Service will require you to pay fees upon registering for the
                    applicable premium service. Before you pay any fees, you will have an opportunity to review
                    and accept the fees that you will be charged. All fees are in U.S. Dollars & Indian Rupees
                    and are non-refundable. Fees vary based on the plan, with different pricing schemes for
                    individual users and organizations.
                </p>
                <h4>4.1 Price</h4>
                <p>
                    Creatosaurus reserves the right to determine pricing for the Service. Creatosaurus will make
                    reasonable efforts to keep pricing information published on the website up to date. We encourage
                    you to check our website periodically for current pricing information. Creatosaurus may change
                    the fees for any feature of the Service, including additional fees or charges, if Creatosaurus
                    gives you advance notice of changes before they apply. Creatosaurus, at its sole discretion,
                    may make promotional offers with different features and different pricing to any of Creatosaurus’s
                    customers. These promotional offers, unless made to you, will not apply to your
                    offer or these Terms.
                </p>
                <h4>4.2 Authorization</h4>
                <p>
                    You authorize Creatosaurus to charge all sums for the orders that you make and any level of
                    Service you select as described in these Terms or published by Creatosaurus, to the payment
                    method specified in your account. If you pay any fees with a credit card, Creatosaurus may
                    seek pre-authorization of your credit card account prior to your purchase to verify that the
                    credit card is valid and has the necessary funds or credit available to cover your purchase.
                </p>
                <h4>4.3 Subscription Service and Cancellation Policy</h4>
                <p>
                    The Service may include automatically recurring payments for periodic charges (“Subscription
                    Service”). If you activate a Subscription Service, you authorize Creatosaurus to periodically
                    charge, on a going-forward basis and until cancellation of either the recurring payments or your
                    account, all accrued sums on or before the payment due date for the accrued sums. The
                    “Subscription Billing Date” is the date when you purchase your first subscription to the
                    Service. For information on the “Subscription Fee”, please see our Pricing page. Your account
                    will be charged automatically on the Subscription Billing Date all applicable fees for the next
                    subscription period. The subscription will continue unless and until you cancel your subscription
                    or we terminate it. You must cancel your subscription before it renews in order to avoid
                    billing of the next periodic Subscription Fee to your account. We will bill the periodic
                    Subscription Fee to the payment method you provide to us during registration (or to a
                    different payment method if you change your payment information). You may cancel the
                    Subscription Service by accessing your account settings and clicking on the "Cancel Plan"
                    option or by contacting us at: contact@creatosaurus.io.
                </p>
                <h4>4.4 Delinquent Accounts</h4>
                <p>
                    Creatosaurus may suspend or terminate access to the Service for any account for which any amount
                    is due but unpaid. In addition to the amount due for the Service, a delinquent account will be
                    charged with fees or charges that are incidental to any chargeback or collection of any the unpaid
                    amount, including collection fees.
                </p>
                <h2>5. Licenses</h2>
                <h4>5.1 Permission to Use</h4>
                <p>
                    Subject to your complete and ongoing compliance with these Terms, Creatosaurus grants you limited,
                    non-transferable, non-sublicensable, revocable permission to access and use the Service for your
                    personal, internal use during the Term at the level of service for which you have paid all
                    applicable Fees.
                </p>
                <h4>5.2 Restrictions</h4>
                <p>
                    You agree not to engage in any of the following prohibited activities: (i) copying,
                    distributing, or disclosing, reproduce, distribute, publicly display, or publicly perform the
                    Service or any part of the Service in any medium, including without limitation by any
                    automated or non-automated “scraping”; (ii) using any automated system, including without
                    limitation “robots,” “spiders,” “offline readers,” etc., to access the Service in a manner
                    that sends more request messages to the Creatosaurus servers than a human can reasonably
                    produce in the same period of time by using a conventional on-line web browser; (iii)
                    transmitting spam, chain letters, or other unsolicited email; (iv) attempting to interfere
                    with, compromise the system integrity or security or decipher any transmissions to or from
                    the servers running the Service; (v) taking any action that imposes, or may impose at our
                    sole discretion an unreasonable or disproportionately large load on our infrastructure;
                    (vi) uploading invalid data, viruses, worms, or other software agents through the Service;
                    (vii) collecting or harvesting any personally identifiable information, including account
                    names, from the Service; (viii) using the Service for any commercial solicitation purposes;
                    (ix) impersonating another person or otherwise misrepresenting your affiliation with a
                    person or entity, conducting fraud, hiding or attempting to hide your identity; (x)
                    interfering with the proper working of the Service; (xi) accessing any content on the
                    Service through any technology or means other than those provided or authorized by the
                    Service; (xii) bypassing the measures we may use to prevent or restrict access to the
                    Service, including without limitation features that prevent or restrict use or copying
                    of any content or enforce limitations on use of the Service or the content therein;
                    (xiii) using any Creatosaurus Content, including any Creatosaurus trademarks, in any
                    manner that might tarnish, disparage, or reflect adversely on such Creatosaurus Content;
                    (xiv) using the Service or any Creatosaurus Content to support, incite or promote
                    discrimination, hostility or violence; (xv) using any Creatosaurus trademark or any
                    variant thereof including misspellings as a domain name or as part of a domain name, as
                    a metatag, keyword, or any other type of programming code or data; (xvi) adopting or
                    using, without our prior written consent, any word or mark which is similar to or
                    likely to be confused with Creatosaurus trademarks; (xvii) copying, imitating or
                    using, in whole or in part, the look and feel of the Service (including but not
                    limited to all page headers, custom graphics, button icons, and scripts) without the
                    prior written consent of Creatosaurus; (xviii) using any Creatosaurus Content to
                    link to the Creatosaurus website without the prior written consent of Creatosaurus;
                    (xix) framing or hotlinking to the Service or any content other than your own without
                    the prior written consent of Creatosaurus; or (xx) uploading any content that is sexual
                    or pornographic or links to such material. (xxi) make modifications to the Service
                    (xxii) interfere with or circumvent any feature of the Service, including any security
                    or access control mechanism. If you are prohibited under applicable law from using
                    the Service, you may not use it. You may not use the Service on behalf of any third
                    party, or in a service bureau or similar capacity.
                </p>
                <p>
                    Accessing the audiovisual content available on the Service for any purpose or in any manner
                    other than Streaming (as defined below) is expressly prohibited. “Streaming” means a
                    contemporaneous digital transmission of an audiovisual work via the Internet from the
                    Creatosaurus Service to a User’s device in such a manner that the data is intended for real-time
                    viewing and not intended to be copied, stored, permanently downloaded, or redistributed by the User.
                </p>
                <p>
                    We may, without prior notice, change the Service; stop providing the Service or features of the
                    Service, to you or to Users generally; or create usage limits for the Service. We may permanently
                    or temporarily terminate or suspend your access to the Service without notice and liability for
                    any reason, including if in our sole determination you violate any provision of this Agreement,
                    or for no reason. Upon termination for any reason or no reason, you continue to be bound by this
                    Agreement. If your account is terminated for any reason, you must obtain written authorization
                    from Creatosaurus prior to establishing another account. If you attempt to establish another
                    account without obtaining such authorization, Creatosaurus may permanently ban you from the
                    Service. You may not have more than one active account at any time without the written consent
                    of Creatosaurus in each instance.
                </p>
                <p>
                    You are solely responsible for your interactions with other Creatosaurus Users. We reserve the
                    right, but have no obligation, to monitor disputes between you and other Users. Creatosaurus shall
                    have no liability for your interactions with other Users, or for any User’s action or inaction.
                </p>
                <h4>5.3 Feedback</h4>
                <p>
                    If you choose to provide input and suggestions regarding problems with or proposed modifications
                    or improvements to the Service (“Feedback”), then you hereby grant Creatosaurus an unrestricted,
                    perpetual, irrevocable, non-exclusive, fully-paid, royalty-free right to exploit the Feedback in
                    any manner and for any purpose, including to improve the Service and create other products and services.
                </p>
                <h2>6. Ownership; Proprietary Rights</h2>
                <p>
                    The Service is owned and operated by Creatosaurus. The visual interfaces, graphics, design,
                    compilation, information, data, computer code (including source code or object code), products,
                    software, services, templates, and all other elements of the Service (“Materials”) provided by
                    Creatosaurus are protected by intellectual property and other laws. All Materials included in
                    the Service are the property of Creatosaurus or its third party licensors. Except as expressly
                    authorized by Creatosaurus, you may not make use of the Materials. Creatosaurus reserves all
                    rights to the Materials not granted expressly in these Terms.
                </p>
                <h2>7. Third Party Terms</h2>
                <h4>7.1 Third Party Services and Linked Websites</h4>
                <p>
                    Creatosaurus provides tools through the Service that enable you to import and export information,
                    including User Content, to and from third party services, including through features that allow you
                    to link your account on Creatosaurus with an account on a third party social network service, such
                    as Twitter or Facebook. By using one of these tools, you agree that Creatosaurus may transfer
                    that information to and from the applicable third party service. Third party services are not
                    under Creatosaurus’s control, and Creatosaurus is not responsible for any third party service’s
                    use of your exported information. The Service may also contain links to third party websites.
                    Linked websites are not under Creatosaurus’s control, and Creatosaurus is not responsible for
                    their content.
                </p>
                <h4>7.2 Third Party Software</h4>
                <p>
                    The Service may include or incorporate third party software components that are generally
                    available free of charge under licenses granting recipients broad rights to copy, modify, and
                    distribute those components (“Third Party Components”). Although the Service is provided to you
                    subject to these Terms, nothing in these Terms prevents, restricts, or is intended to prevent or
                    restrict you from obtaining Third Party Components under the applicable third party licenses or
                    to limit your use of Third Party Components under those third party licenses.
                </p>
                <h2>8. User Content</h2>
                <h4>8.1 User Content Generally</h4>
                <p>
                    Certain features of the Service may permit users to upload content to the Service, including
                    social media posts and other content which may be comprised of messages, reviews, photos, video,
                    images, data, text, and other types of works (“User Content”) and to publish User Content on the
                    Service. You retain any copyright and other proprietary rights that you may hold in the User
                    Content that you post to the Service. Nevertheless, we need certain permission from you in
                    order to provide the Service.
                </p>
                <h4>8.2 Limited License Grant to Creatosaurus</h4>
                <p>
                    By providing User Content to or via the Service, you grant Creatosaurus a worldwide, non-exclusive,
                    royalty-free, fully paid right and license (with the right to sublicense) to host, store, transfer,
                    display, perform, reproduce, modify for the purpose of formatting for display, and distribute your
                    User Content, in whole or in part, in any media formats and through any media channels now known
                    or hereafter developed.
                </p>
                <h4>8.3 Limited License Grant to Other Users</h4>
                <p>
                    By providing User Content to or via the Service to other users of the Service, you grant those
                    users a non-exclusive license to access and use that User Content as permitted by these Terms and
                    the functionality of the Service.
                </p>
                <h4>8.4 User Content Representations and Warranties</h4>
                <p>
                    Creatosaurus disclaims any and all liability in connection with User Content. You are solely
                    responsible for your User Content and the consequences of providing User Content via the Service.
                    By providing User Content via the Service, you affirm, represent, and warrant that:
                </p>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>
                        a) you are the creator and owner of the User Content, or have the necessary licenses, rights,
                        consents, and permissions to authorize Creatosaurus and users of the Service to use and
                        distribute your User Content as necessary to exercise the licenses granted by you in this
                        Section, in the manner contemplated by Creatosaurus, the Service, and these Terms;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', marginTop: 10, marginLeft: 35 }}>
                    <p>
                        b) your User Content, and the use of your User Content as contemplated by these Terms, does
                        not and will not: (i) infringe, violate, or misappropriate any third party right, including
                        any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity,
                        or any other intellectual property or proprietary right; (ii) slander, defame, libel, or
                        invade the right of privacy, publicity or other property rights of any other person; or
                        (iii) cause Creatosaurus to violate any law or regulation; and
                    </p>
                    <br></br>
                    <p>
                        c) your User Content could not be deemed by a reasonable person to be objectionable, profane,
                        indecent, pornographic, harassing, threatening, embarrassing, hateful, or otherwise
                        inappropriate.
                    </p>
                    <br></br>
                    <p>
                        d) your User Content does not and will not contain Hateful Content, a Threat of Physical Harm, or Harassment
                        The following serves as a guide to help illustrate generally the types of content that fall within
                        the scope of Creatosaurus’s policy on Hateful Content, Threats of Physical Harm, and Harassment, but
                        is not exhaustive. This Section 8.4(d) does not limit any of our other rights or remedies provided herein.
                        For the avoidance of doubt, your User Content may not include, and Creatosaurus may remove or refuse to
                        publish or promote any User Content that violates the terms or policies of any third party platform with
                        which Creatosaurus’s Services integrate or interoperate.
                    </p>
                    <br></br>
                    <p>Hateful Content includes:</p>
                    <p>
                        Any statement, image, photograph, or other content that in our sole judgment could be
                        reasonably perceived to harm, threaten, demean, promote the harassment of, promote the
                        intimidation of, or promote the abuse of others for any reason, including by reason of race,
                        gender or gender identity, national origin, sexual orientation, religion, or otherwise.
                    </p>
                    <br></br>
                    <p>A Threat of Physical Harm includes:</p>
                    <p>
                        Any statement, photograph, advertisement, or other content that in our sole judgment could be
                        reasonably perceived to threaten, advocate, or incite physical harm to or violence against
                        others, including references to current or historical figures or groups that are known for
                        purporting such content, such as the Ku Klux Klan, Nazi Party, and the like.
                    </p>
                </div>
                <br></br>
                <p>Harassment includes:</p>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        Revealing someone’s personal information, also known as “doxxing”.
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        Online stalking, and bullying.
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        Wishes for physical harm directed at a person or persons.
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        Incitement of others to any of the previous items.
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        We reserve the right to suspend or terminate accounts and remove individual posts which
                        contain Hateful Content, a Threat of Physical Harm, or Harassment.
                        We also may suspend or terminate your account if we determine, in our sole
                   </p>
                </div>
                <p style={{ marginTop: 10 }}>discretion, that you are either:</p>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        An organization which has publicly stated or acknowledged that its goals, objectives,
                        positions, or founding tenets include statements or principles that could be reasonably
                        perceived to advocate, encourage, or sponsor Hateful Content, Harassment, or A Threat of
                        Physical Harm.
                   </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        A person or organization that has acted in such a way as could be reasonably perceived to
                        support, condone, encourage, or represent Hateful Content, Harassment, or A Threat of Physical Harm.
                   </p>
                </div>
                <p style={{ marginTop: 10 }}>
                    Notwithstanding the foregoing, we reserve the right to screen, remove, edit, or block any User
                    Content we find in violation of the Terms or that we find, in our sole discretion to be otherwise
                    objectionable, at our sole discretion.
                </p>
                <h4>8.5 User Content Disclaimer</h4>
                <p>
                    We are under no obligation to edit or control User Content that you or other users create, post
                    or publish, and will not be in any way responsible or liable for User Content. Creatosaurus may,
                    however, at any time and without prior notice, screen, remove, edit, or block any User Content
                    that in our sole judgment violates these Terms or is otherwise objectionable. You understand
                    that when using the Service you will be exposed to User Content from a variety of sources and
                    acknowledge that User Content may be inaccurate, offensive, indecent, or objectionable. You
                    agree to waive, and do waive, any legal or equitable right or remedy you have or may have
                    against Creatosaurus with respect to User Content. If notified by a user or content owner
                    that User Content allegedly does not conform to these Terms, we may investigate the allegation
                    and determine in our sole discretion whether to remove the User Content, which we reserve the
                    right to do at any time and without notice. For clarity, Creatosaurus does not permit
                    copyright-infringing activities on the Service.
                </p>
                <h4>8.6 Monitoring Content</h4>
                <p>
                    Creatosaurus does not control and does not have any obligation to monitor: (a) User Content;
                    (ii) any content made available by third parties; or (iii) the use of the Service by its users.
                    You acknowledge and agree that Creatosaurus reserves the right to, and may from time to time,
                    monitor any and all information transmitted or received through the Service for operational and
                    other purposes. If at any time Creatosaurus chooses to monitor the content, Creatosaurus still
                    assumes no responsibility or liability for content or any loss or damage incurred as a result
                    of the use of content. During monitoring, information may be examined, recorded, copied, and
                    used in accordance with our Privacy Policy.
                </p>
                <h2>9. Prohibited Conduct</h2>
                <p>BY USING THE SERVICE YOU AGREE NOT TO:</p>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        use the Service for any illegal purpose or in violation of any local, state, national, or international law;
                   </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        violate, or encourage others to violate, any right of a third party, including by infringing
                        or misappropriating any third party intellectual property right;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        interfere with security-related features of the Service, including by:
                        (i) disabling or circumventing features that prevent or limit use or copying of any content;
                        (ii) reverse engineering or otherwise attempting to discover the source code of any portion
                        of the Service except to the extent that the activity is expressly permitted by applicable
                        law; or (iii) hacking, password “mining” or using any other illegitimate means of interference;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        modify or create derivatives of any part of the Service;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        interfere with the operation of the Service or any user’s enjoyment of the Service,
                        including by: (i) uploading or otherwise disseminating any virus, adware, spyware, worm,
                        or other malicious code; (ii) making any unsolicited offer or advertisement to another user
                        of the Service; (iii) collecting personal information about another user or third party
                        without consent; or (iv) interfering with or disrupting any network, equipment, or server
                        connected to or used to provide the Service;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        perform any fraudulent activity including impersonating any person or entity, claiming a
                        false affiliation, accessing any other Service account without permission, or falsifying your
                        age or date of birth;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        take action that imposes an unreasonable or disproportionately large load on the infrastructure
                        of the Service of Creatosaurus’s systems or networks, or any systems or networks connected to
                        the Service or Creatosaurus;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        sell or otherwise transfer the access granted under these Terms or any Materials (as defined
                        in Section 6) or any right or ability to view, access, or use any Materials; or
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        attempt to do any of the acts described in this Section 9 or assist or permit any person in engaging in any of the acts described in this Section 9.
                    </p>
                </div>
                <h2>10. Digital Millennium Copyright Act</h2>
                <h4>10.1 DMCA Notification</h4>
                <p>
                    We comply with the provisions of the Digital Millennium Copyright Act applicable to Internet
                    service providers. If you have an intellectual property rights-related complaint about material
                    posted on the Service, you may contact our Designated Agent contact@creatosaurus.io.
                </p>
                <br></br>
                <p>
                    Any notice alleging that materials hosted by or distributed through the Service infringe
                    intellectual property rights must include the following information:
                </p>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        an electronic or physical signature of the person authorized to act on behalf of the owner
                        of the copyright or other right being infringed;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        a description of the copyrighted work or other intellectual property that you claim has been infringed;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        a description of the material that you claim is infringing and where it is located on the Service;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        your address, telephone number, and email address;
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        a statement by you that you have a good faith belief that the use of the materials on the
                        Service of which you are complaining is not authorized by the copyright owner, its agent, or
                        the law; and
                    </p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 5 }}>
                    <div className="fill-circle"></div>
                    <p>
                        a statement by you that the above information in your notice is accurate and that,
                        under penalty of perjury, you are the copyright or intellectual property owner or
                        authorized to act on the copyright or intellectual property owner's behalf.
                    </p>
                </div>
                <h2>10.2 Repeat Infringers</h2>
                <p>
                    It is Creatosaurus’s policy to promptly terminate the accounts of users that are determined by
                    Creatosaurus to be repeat infringers.
                </p>
                <h2>11. Modification of these Terms</h2>
                <p>
                    We reserve the right to change these Terms on a going-forward basis at any time. Please check
                    these Terms periodically for changes. Modifications will become effective upon the earlier of
                    (a) your acceptance of the modified Terms, (b) your use of the Service with actual knowledge
                    of the modified Terms, or (c) thirty (30) days following our publication of the modified Terms
                    through the Service. Except as expressly permitted in this Section 11, these Terms may be amended
                    only by a written agreement signed by authorized representatives of the parties to these Terms.
                    Disputes arising under these Terms will be resolved in accordance with the version of these Terms
                    that was in effect at the time the dispute arose.
                </p>
                <h2>12. Term, Termination and Modification of the Service</h2>
                <h4>12.1 Term</h4>
                <p>
                    These Terms are effective beginning when you accept the Terms or first download, install,
                    access, or use the Service, and ending when terminated as described in Section
                </p>
                <h4>12.2 Termination</h4>
                <p>
                    If you violate any provision of these Terms, your authorization to access the Service and
                    these Terms automatically terminate. In addition, Creatosaurus may, at its sole discretion,
                    terminate these Terms or your account on the Service, or suspend or terminate your access to
                    the Service, at any time for any reason or no reason, with or without notice. You may terminate
                    your account and these Terms at any time as provided in Section 4.3 or by contacting customer
                    service at contact@creatosaurus.io.
                </p>
                <h4>12.3 Effect of Termination</h4>
                <p>
                    Upon termination of these Terms: (a) your license rights will terminate and you must immediately
                    cease all use of the Service; (b) you will no longer be authorized to access your account or the
                    Service; (c) you must pay Creatosaurus any unpaid amount that was due prior to termination; and
                    (d) all payment obligations accrued prior to termination and Sections 5.3, 6, 12.3, 13, 14, 15,
                    16 and 17 will survive.
                </p>
                <h4>12.4 Modification of the Service</h4>
                <p>
                    Creatosaurus reserves the right to modify or discontinue the Service at any time
                    (including by limiting or discontinuing certain features of the Service), temporarily or
                    permanently, without notice to you. Creatosaurus will have no liability for any change to the
                    Service or any suspension or termination of your access to or use of the Service. Premium service
                    fees are not refundable.
                </p>
                <h2>13. Indemnity</h2>
                <p>
                    You are responsible for your use of the Service, and you will defend and indemnify Creatosaurus
                    and its officers, directors, employees, consultants, affiliates, subsidiaries and agents
                    (together, the “Creatosaurus Entities”) from and against every claim brought by a third party,
                    and any related liability, damage, loss, and expense, including reasonable attorneys’ fees and
                    costs, arising out of or connected with: (a) your use of, or misuse of, the Service; (b) your
                    violation of any portion of these Terms, any representation, warranty, or agreement referenced
                    in these Terms, or any applicable law or regulation; (c) your violation of any third party right,
                    including any intellectual property right or publicity, confidentiality, other property, or
                    privacy right; or (d) any dispute or issue between you and any third party. We reserve the right,
                    at our own expense, to assume the exclusive defense and control of any matter otherwise subject
                    to indemnification by you (without limiting your indemnification obligations with respect to that
                    matter), and in that case, you agree to cooperate with our defense of those claims.
                </p>
                <h2>14. Disclaimers; No Warranties</h2>
                <p>
                    THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SERVICE ARE PROVIDED “AS IS” AND
                    ON AN “AS AVAILABLE” BASIS. CREATOSAURUS DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                    IMPLIED, RELATING TO THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SERVICE,
                    INCLUDING: (A) ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
                    QUIET ENJOYMENT, OR NON-INFRINGEMENT; AND (B) ANY WARRANTY ARISING OUT OF COURSE OF DEALING,
                    USAGE, OR TRADE. CREATOSAURUS DOES NOT WARRANT THAT THE SERVICE OR ANY PORTION OF THE SERVICE,
                    OR ANY MATERIALS OR CONTENT OFFERED THROUGH THE SERVICE, WILL BE UNINTERRUPTED, SECURE, OR FREE
                    OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND CREATOSAURUS DOES NOT WARRANT THAT ANY OF
                    THOSE ISSUES WILL BE CORRECTED.
                </p>
                <p>
                    NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE SERVICE OR
                    CREATOSAURUS ENTITIES OR ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICE WILL CREATE ANY
                    WARRANTY REGARDING ANY OF THE CREATOSAURUS ENTITIES OR THE SERVICE THAT IS NOT EXPRESSLY STATED
                    IN THESE TERMS. WE ARE NOT RESPONSIBLE FOR ANY DAMAGE THAT MAY RESULT FROM THE SERVICE AND YOUR
                    DEALING WITH ANY OTHER SERVICE USER. YOU UNDERSTAND AND AGREE THAT YOU USE ANY PORTION OF THE
                    SERVICE AT YOUR OWN DISCRETION AND RISK, AND THAT WE ARE NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR
                    PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE USED IN CONNECTION WITH THE SERVICE)
                    OR ANY LOSS OF DATA, INCLUDING USER CONTENT.
                </p>
                <p>
                    HOWEVER, CREATOSAURUS DOES NOT DISCLAIM ANY WARRANTY OR OTHER RIGHT THAT CREATOSAURUS
                    IS PROHIBITED FROM DISCLAIMING UNDER APPLICABLE LAW.
                </p>
                <h2>15. Limitation of Liability</h2>
                <p>
                    TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE CREATOSAURUS ENTITIES BE LIABLE TO
                    YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING DAMAGES
                    FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR
                    ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SERVICE OR ANY MATERIALS OR CONTENT
                    ON THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY
                    OTHER LEGAL THEORY, AND WHETHER OR NOT ANY CREATOSAURUS ENTITY HAS BEEN INFORMED OF THE
                    POSSIBILITY OF DAMAGE.
                </p>
                <p>
                    EXCEPT AS PROVIDED IN SECTION 16.4(iii) AND TO THE FULLEST EXTENT PERMITTED BY LAW,
                    THE AGGREGATE LIABILITY OF THE CREATOSAURUS ENTITIES TO YOU FOR ALL CLAIMS ARISING OUT OF
                    OR RELATING TO THE USE OF OR ANY INABILITY TO USE ANY PORTION OF THE SERVICE OR OTHERWISE
                    UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO THE GREATER OF:
                    (A) THE AMOUNT YOU HAVE PAID TO CREATOSAURUS FOR ACCESS TO AND USE OF THE SERVICE IN THE 12
                    MONTHS PRIOR TO THE EVENT OR CIRCUMSTANCE GIVING RISE TO CLAIM; OR (B) $100.
                </p>
                <p>
                    EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF
                    WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE
                    PARTIES UNDER THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN
                    BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER
                    PROVISIONS OF THESE TERMS. THE LIMITATIONS IN THIS SECTION 15 WILL APPLY EVEN IF ANY LIMITED
                    REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                </p>
                <h2>16. Dispute Resolution and Arbitration</h2>
                <p>
                    In the interest of resolving disputes between you and Creatosaurus in the most expedient and cost
                    effective manner, and except as described in Section 16.2, you and Creatosaurus agree that every
                    dispute arising in connection with these Terms will be resolved by binding arbitration. Arbitration
                    is less formal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or
                    jury, may allow for more limited discovery than in court, and can be subject to very limited review
                    by courts. Arbitrators can award the same damages and relief that a court can award.
                    This agreement to arbitrate disputes includes all claims arising out of or relating to any aspect
                    of these Terms, whether based in contract, tort, statute, fraud, misrepresentation, or any other
                    legal theory, and regardless of whether a claim arises during or after the termination of these
                    Terms. YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND CREATOSAURUS ARE
                    EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.
                </p>
                <h2>17. General Terms</h2>
                <p>
                    These Terms, together with the Privacy Policy and any other agreements expressly incorporated by
                    reference into these Terms, are the entire and exclusive understanding and agreement between you
                    and Creatosaurus regarding your use of the Service. You may not assign or transfer these Terms
                    or your rights under these Terms, in whole or in part, by operation of law or otherwise, without
                    our prior written consent. We may assign these Terms at any time without notice or consent.
                    The failure to require performance of any provision will not affect our right to require
                    performance at any other time after that, nor will a waiver by us of any breach or default of
                    these Terms, or any provision of these Terms, be a waiver of any subsequent breach or default
                    or a waiver of the provision itself. Use of section headers in these Terms is for convenience
                    only and will not have any impact on the interpretation of any provision. Throughout these Terms
                    the use of the word “including” means “including but not limited to”. If any part of these Terms
                    is held to be invalid or unenforceable, the unenforceable part will be given effect to the
                    greatest extent possible, and the remaining parts will remain in full force and effect.
                </p>
                <h4>17.1 Governing Law</h4>
                <p>
                    These Terms are governed by the laws of India without regard to conflict of law principles.
                    You and Creatosaurus submit to the personal and exclusive jurisdiction of the state courts and
                    federal courts located within Pune, India for resolution of any lawsuit or court proceeding
                    permitted under these Terms.
                </p>
                <h4>17.2 Consent to Electronic Communications</h4>
                <p>
                    By using the Service, you consent to receiving certain electronic communications from us as
                    further described in our Privacy Policy. Please read our Privacy Policy to learn more about
                    our electronic communications practices. You agree that any notices, agreements, disclosures,
                    or other communications that we send to you electronically will satisfy any legal communication
                    requirements, including that those communications be in writing.
                </p>
                <h4>17.3 Contact Information</h4>
                <p>
                    The Service is offered by Creatosaurus. You may contact us by emailing us at
                    contact@creatosaurus.io.
                </p>
                <h4>17.4 Notice to California Residents</h4>
                <p>
                    If you are a California resident, under California Civil Code Section 1789.3,
                    you may contact the Complaint Assistance Unit of the Division of Consumer Services of the
                    California Department of Consumer Affairs in writing at 1625 N. Market Blvd., Suite S-202,
                    Sacramento, California 95834, or by telephone at (800) 952-5210 in order to resolve a
                    complaint regarding the Service or to receive further information regarding use of the Service.
                </p>
                <h4>17.5 International Use</h4>
                <p>
                    Access to the Service from countries or territories or by individuals where such access is illegal
                    is prohibited
                </p>
                <h2>18. Contact. </h2>
                <p style={{marginBottom:20}}>
                    Please contact us at contact@creatosaurus.io with any questions regarding this Agreement.
                </p>
            </main>
            <footer>
                <div>
                    <h4>© 2020 Creatosaurus</h4>
                    <NavLink to="/terms&conditions">Terms of Service</NavLink>
                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                </div>
                <div>
                    <a href="https://twitter.com/creatosaurushq"><img className="social" src={Twitter} alt=""></img></a>
                    <a href="https://www.linkedin.com/company/creatosaurushq/"><img className="social" src={Linkedin} alt=""></img></a>
                </div>
            </footer>
        </div>
    )
}

export default Termsandcondition
