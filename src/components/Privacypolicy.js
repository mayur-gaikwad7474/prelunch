import React, {useEffect} from 'react'
import Logo from '../Assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import Linkedin from '../Assets/linkedin.svg'
import Twitter from '../Assets/twitter.svg'
import './Privacypolicy.css'

const Privacypolicy = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
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
                <h1>Privacy Policy</h1>
                <p>
                    Creatosaurus provides this Privacy Policy to inform you of our policies and procedures regarding
                    the collection, use, protection, and disclosure of Personal Information received from your use of
                    this website, located at https://creatosaurus.io (“Site”), as well as all related websites
                    including our subdomains, applications, browser extensions, and other services provided by us
                    (collectively, together with the Site, our “Service”), and in connection with our customer,
                    vendor, and partner relationships. This Privacy Policy also tells you about your rights and choices
                    with respect to your Personal Information, and how you can reach us to update your contact
                    information or get answers to questions you may have about our privacy practices.
                </p>
                <h2>1. Personal information we may collect</h2>
                <p>For the purpose of this Privacy Policy, “Personal Information” means any information relating
                to an identified or identifiable individual. We obtain Personal Information relating to you
                from various sources described below.
                Where applicable, we indicate whether and why you must provide us with your Personal Information,
                as well as the consequences of failing to do so. If you do not provide Personal Information when
                requested, you may not be able to benefit from our Service if that information is necessary to
                provide you with the service or if we are legally required to collect it.
               </p>
                <h2 style={{ marginTop: 15 }}>2. Personal information provided by you</h2>
                <h2 style={{ marginTop: 0, fontSize:20 }}>2a. Personal Information Collected from using the Service</h2>
                <h4>1. Registration</h4>
                <p>
                    If you desire to have access to certain restricted sections of the Site or request to receive
                    marketing materials, you may be required to become a registered user, and to submit the following
                    types of Personal Information to Creatosaurs: your name, email address, phone number, full user
                    name, password, city, time zone, country of residence, gender, age, your postal address, telephone
                    number, PAN, GST and TAN numbers.
                </p>
                <h4>2. Customer Support</h4>
                <p>
                    We may also collect the information you send us through the Service (these include communications
                    with our customer support team or other communications that you may send us and their contents),
                    and may collect the information you provide in User Content you post to the Service
                    (such as text and photos you upload to use in your designs). We use this information to operate,
                    maintain, and provide the features and functionality of the Service to you, to correspond
                    with you, and to address any issues you raise about the Service.
                </p>
                <h4>3. Making a Purchase</h4>
                <p>
                    When you make payments through the Service, you will need to provide Personal Information such
                    as your card number and billing address.
                </p>
                <h4>4. Social Media</h4>
                <p>
                    In order to allow you to post to your social media platforms, we may ask you to provide your
                    username, account ids, social handle, time zones, and email address.
                </p>
                <h4>5. Data Storage</h4>
                <p>
                    In order to allow you to upload your assets such as photos, videos & illustrations to create
                    graphics & videos we may ask you to provide your asset files.
                </p>
                <h4>6. Other</h4>
                <p>
                    We may also collect your contact details when you provide them in the context of our customer,
                    vendor, and partner relationships.
                </p>
                <h2 style={{fontSize:20 }}>2b. Personal Information Collected from Connected Social Media Accounts</h2>
                <p>
                    If you connect your third party social media account to your Creatosaurus account, we may collect
                    certain information stored in your social media account such as:<br style={{marginTop:5}}></br>Creatosaurus may allow you to
                    connect your third party social media account such as LinkedIn, Twitter, Facebook, etc
                    to your Creatosaurus account, in which case we will access certain information from the platform
                    regarding your account. In particular, we may collect profile image, display name, username/page
                    ID or profile ID, access tokens, and send posts. This includes the content of your post and
                    engagement data (such as click rates, likes, re-shares, impressions, as well as general engagement
                    counts), to the extent permitted by applicable law. This data will only be used by Creatosaurus
                    to provide you with the Service you expect and will not be shared with any third parties.
                </p>
                <h2 style={{fontSize:20 }}>2c. Personal Information Automatically Obtained from Your Interactions with the Service</h2>
                <h4>1. Log Data</h4>
                <p>
                    When you use our Service, our servers automatically record information that your browser sends
                    whenever you visit a website (“Log Data”). This Log Data may include information such as your IP
                    address, browser type or the domain from which you are visiting, the web-pages you visit, the
                    search terms you use, and any advertisements on which you click.
                </p>
                <h4>2. Cookies and Similar Technologies</h4>
                <p>
                    Like many websites, we also use “cookie” technology to collect additional website usage data and
                    to improve the Site and our Service. A cookie is a small data file that we transfer to your
                    computer’s hard disk. A session cookie enables certain features of the Site and our service
                    and is deleted from your computer when you disconnect from or leave the Site. A persistent cookie
                    remains after you close your browser and may be used by your browser on subsequent visits to the
                    Site. Persistent cookies can be removed by following your web browser help file directions. Most
                    Internet browsers automatically accept cookies. Creatosaurus may use both session cookies and
                    persistent cookies to better understand how you interact with the Site and our Service, to monitor
                    aggregate usage by our users and web traffic routing on the Site, and to improve the Site and our Service.
                    We may also automatically record certain information from your device by using various types of technology,
                    including “clear gifs” or “web beacons.” This automatically-collected information may include your
                    IP address or other device address or ID, web browser and/or device type, the web pages or sites that you visit
                    just before or just after you use the Service, the pages or other content you view or otherwise interact
                    with on the Service, and the dates and times that you visit, access, or use the Service. We also may use these
                    technologies to collect information regarding your interaction with email messages, such as whether you opened,
                    clicked on, or forwarded a message, to the extent permitted under applicable law.
                    You can instruct your browser, by editing its options, to stop accepting cookies or to prompt you before
                    accepting a cookie from the websites you visit. Please note that if you delete, or choose not to accept,
                    cookies from the Service, you may not be able to utilize the features of the Service to their fullest
                    potential.
                </p>
                <h4>3. Third-Party Web Beacons and Third Party Buttons</h4>
                <p>
                    We may display third-party content on the Service, including third-party advertising. Third-party
                    content may use cookies, web beacons, or other mechanisms for obtaining data in connection with
                    your viewing of the third party content on the Service. Additionally, we may implement third party
                    buttons, such as Facebook “share” buttons, that may function as web beacons even when you do
                    not interact with the button. Information collected through third-party web beacons and buttons
                    is collected directly by these third parties, not by Creatosaurus. Please consult such third
                    party’s data collection, use, and disclosure policies for more information.
                </p>
                <h4>4. Links to Other Websites</h4>
                <p>
                    Our Site contains links to other websites. The fact that we link to a website is not an endorsement,
                    authorization or representation of our affiliation with that third party. We do not exercise
                    control over third party websites. These other websites may place their own cookies or other files
                    on your computer, collect data or solicit Personal Information from you. Other sites follow
                    different rules regarding the use or disclosure of the Personal Information you submit to them.
                    We are not responsible for the content, privacy and security practices, and policies of third-party
                    sites or services to which links or access are provided through the Service. We encourage you to
                    read the privacy policies or statements of the other websites you visit.
                </p>
                <h4>5. Links to Other Websites</h4>
                <p>
                    Our Site contains links to other websites. The fact that we link to a website is not an endorsement,
                    authorization or representation of our affiliation with that third party. We do not exercise
                    control over third party websites. These other websites may place their own cookies or other files
                    on your computer, collect data or solicit Personal Information from you. Other sites follow
                    different rules regarding the use or disclosure of the Personal Information you submit to them.
                    We are not responsible for the content, privacy and security practices, and policies of third-party
                    sites or services to which links or access are provided through the Service. We encourage you to
                    read the privacy policies or statements of the other websites you visit.
                </p>
                <h2>3. How we may use your personal information</h2>
                <p>We may use the Personal Information we obtain about you to:</p>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>Providing you with the Service: We use the information that you provide us to provide the
                    Service to you. This includes allowing you to log in to Creatosaurus, operating and
                    maintaining the Services like</p>
                </div>
                <div style={{ width: '70%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="subfill-circle"></div>
                    <p>Providing you with the Service: We use the information that you provide us to provide the
                    Service to you. This includes allowing you to log in to Creatosaurus, operating and
                    maintaining the Services like</p>
                </div>
                <div style={{ width: '70%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="subfill-circle"></div>
                    <p>publish your content, comments or messages on social media platforms</p>
                </div>
                <div style={{ width: '70%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="subfill-circle"></div>
                    <p>provide analytics to your social media platforms</p>
                </div>
                <div style={{ width: '70%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="subfill-circle"></div>
                    <p>create and manage your designs and videos</p>
                </div>
                <div style={{ width: '70%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="subfill-circle"></div>
                    <p>access and manage your asset files</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>Customising the Service for you: Communicate with you to verify your account and for
                    informational and operational purposes, such as account management, customer service, or
                    system maintenance, including by periodically emailing you service-related announcements;</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>For data analytics: We use information about you to help us improve the Creatosaurus
                    Service and our users’ experience, including by monitoring aggregate metrics such as a
                    total number of visitors, traffic, and demographic patterns.</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>Tailor our Service: e.g., we may use cookies and similar technologies to remember your preferences.</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>provide customer support</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>operate, evaluate and improve our business (including by developing new products and
                    services; managing our communications; determining the effectiveness of our advertising;
                    analyzing how the Service is being accessed and used; tracking the performance of the
                    Service; debugging the Service; facilitating the use of our Service</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>send you marketing communications about products, services, offers, programs and promotions of Creatosaurus, and affiliated companies</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>ensure the security of our Service</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>manage our customer, service provider and partner relationships</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>enforce our agreements related to our Service and our other legal rights</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>comply with applicable legal requirements, industry standards and our policies.</p>
                </div>
                <h2>Legal bases for processing information under the GDPR (for users in the EEA)</h2>
                <p>
                    If you are located in the European Economic Area(EEA) Creatosaurus processes your information in
                    accordance with European laws and regulations such as the General Data Protection Regulation (GDPR).
                    The GDPR governs how Creatosaurus may process your information and the rights that EEA users have
                    in relation to it. We may process your Personal Information for the above purposes when:
                </p>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>you have consented to the use of your Personal Information, For example, we may seek to
                    obtain your consent for our uses of cookies or similar technologies, or to send you
                    marketing communications.</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>we need your Personal Information to provide you with services and products requested by
                    you, or to respond to your inquiries</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>It is in our legitimate interests to provide a useful service, to send you marketing and
                    to enhance our Service via research and development (but only where our legitimate
                    interest isn’t overridden by your interest in protecting your data</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>You consent to us using your information in a certain way – for example, to hear about new
                    features or offers.</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>we have a legal obligation to use your Personal Information</p>
                </div>
                <div style={{ width: '80%', alignSelf: 'center', display: 'flex', marginTop: 10 }}>
                    <div className="fill-circle"></div>
                    <p>we have a legitimate interest in using your Personal Information. In particular, we have a
                    legitimate interest in using your Personal Information to ensure and improve the safety,
                    security, and performance of our Service, to anonymize Personal Information and carry out
                    data analyses.</p>
                </div>
                <h2>4. How we share personal information</h2>
                <p>We may disclose the Personal Information we collect about you as described below or otherwise disclosed to you at the time the data is collected, including with:</p>
                <h4>a. Social Media Platforms</h4>
                <p>By using your information we help you to publish your content on social platforms, allow you to
                track metrics for analytical purposes, and engage with customers through public replies,
                comments and conversations (direct messages or “DMs”). We may allow you to link your account
                on Creatosaurus with an account on a third party social network platform, such as Twitter or
                Facebook, and to transfer your information to and from the applicable third-party platform.
                Once you share your content to a social media platform, its use will be governed by that
                platform’s privacy policy.</p>
                <h4>b. Service Providers</h4>
                <p>We engage certain trusted third parties to perform functions and provide services to us,
                including hosting and maintenance, analytics, error monitoring, debugging, performance
                monitoring, billing, customer relationship, database storage and management, and direct
                marketing campaigns. We may share your Personal Information with these third parties,
                but only to the extent necessary to perform these functions and provide such services.
                We also require these third parties to maintain the privacy and security of the Personal
                Information they process on our behalf.</p>
                <h4>c. Compliance with Laws and Law Enforcement</h4>
                <p>Creatosaurus cooperates with government and law enforcement officials or private parties to
                enforce and comply with the law. To the extent permitted under applicable law, we may
                disclose any information about you to government or law enforcement officials or private
                parties as we believe is necessary or appropriate to investigate, respond to, and defend
                against claims, for the legal process (including subpoenas), to protect the property and
                rights of Creatosaurus or a third party, to protect Creatosaurus against liability, for the
                safety of the public or any person, to prevent or stop any illegal, unethical, fraudulent,
                abusive, or legally actionable activity, to protect the security or integrity of the Service
                and any equipment used to make the Service available, or to comply with the law.</p>
                <h4>d. Business Transfers</h4>
                <p>Creatosaurus may sell, transfer or otherwise share some or all of its assets, including
                Personal Information, in connection with a merger, acquisition, reorganization, sale of
                assets, or similar transaction, or in the event of insolvency or bankruptcy. You will have
                the opportunity to opt-out of any such transfer if the new entity’s planned processing of
                your information differs materially from that set forth in this Privacy Policy.</p>
                <h4>e. Other Third Parties</h4>
                <p>We may share Personal Information with our headquarters and affiliates, and business partners
                to whom it is reasonably necessary or desirable for us to disclose your data for the purposes
                described in this Privacy Policy. We may also make certain non-Personal Information available
                to third parties for various purposes, including for business or marketing purposes or to
                assist third parties in understanding our users’ interest, habits, and usage patterns for
                certain programs, content, services, advertisements, promotions, and functionality available
                through the Service.</p>
                <h2>5. How we protect personal information</h2>
                <p>
                    Creatosaurus cares deeply about safeguarding the confidentiality of your Personal Information.
                    We employ administrative and electronic measures designed to appropriately protect your Personal
                    Information against accidental or unlawful destruction, accidental loss, unauthorized alteration,
                    unauthorized disclosure or access, misuse, and any other unlawful form of processing of the Personal
                    Information in our possession. Please be aware that no security measures are perfect or
                    impenetrable. We cannot guarantee that information about you will not be accessed, viewed,
                    disclosed, altered, or destroyed by breach of any of our administrative, physical, and electronic
                    safeguards, subject to requirements under applicable law to ensure or warrant information security.
                    Your privacy settings may also be affected by changes to the functionality of third-party sites
                    and services that you add to the Creatosaurus Service, such as social networks. Creatosaurus is
                    not responsible for the functionality or security measures of any third party.
                    We will make any legally-required disclosures of any breach of the security, confidentiality, or
                    integrity of your unencrypted electronically stored Personal Information to you via email or conspicuous
                    posting on our Site in the most expedient time possible and without unreasonable delay, consistent with
                    (i) the legitimate needs of law enforcement or (ii) any measures necessary to determine the scope of
                    the breach and restore the reasonable integrity of the data system, and any other disclosures that may
                    be required under applicable law.
                    We also take measures to delete your Personal Information or keep it in a form that does not permit
                    identifying you when this information is no longer necessary for the purposes for which we process it
                    unless we are required by law to keep this information for a longer period. When determining the
                    retention period, we take into account various criteria, such as the type of products and services
                    requested by or provided to you, the nature and length of our relationship with you,
                    possible re-enrollment with our products or services, the impact on the services we provide to you if we
                    delete some information from or about you, mandatory retention periods provided by law and the statute
                    of limitations.
                </p>
                <h2>6. Your rights and choices</h2>
                <p>
                    If you decide at any time that you no longer wish to receive marketing communications from us,
                    please follow the unsubscribe instructions provided in any of the communications. You may also
                    opt-out from receiving commercial email from us by sending your request to us by email at
                    contact@creatosaurus.io. Please be aware that, even after you opt-out from receiving commercial
                    messages from us, you will continue to receive administrative messages from us regarding the Service.
                    In certain jurisdictions you have the right to request access and receive information about the Personal
                    Information we maintain about you, to update and correct inaccuracies in your Personal Information, to
                    restrict or object to the processing of your Personal Information, to have the information blocked,
                    anonymized or deleted, as appropriate, or to exercise your right to data portability to transfer your Personal
                    Information to another company. Those rights may be limited in some circumstances by local law requirements.
                    In addition to the above-mentioned rights, you also have the right to lodge a complaint with a competent
                    supervisory authority subject to applicable law.
                    Where required by law, we obtain your consent for the processing of certain Personal Information collected
                    by cookies or similar technologies or used to send you direct marketing communications, or when we carry
                    out other processing activities for which consent may be required. If we rely on consent for the processing
                    of your Personal Information, you have the right to withdraw it at any time and free of charge. When you do so,
                    this will not affect the lawfulness of the processing before your consent withdrawal.
                    To update your preferences, ask us to remove your information from our mailing lists, delete your account or
                    submit a request to exercise your rights under applicable law, please contact us as specified in the “How to
                    Contact Us” section below.
                </p>
                <h2>7. Data transfers</h2>
                <p>Creatosaurus is based in India and operates on the basis of applicable Law. Personal
                Information that we collect may be transferred to, and stored at, any of our affiliates,
                partners or service providers which may be inside or outside the European Economic Area (“EEA”)
                and Switzerland, including the United States. By submitting your personal data, you agree to
                such transfers. Your Personal Information may be transferred to countries that do not have
                the same data protection laws as the country in which you initially provided the information.
                When we transfer or disclose your Personal Information to other countries, we will protect
                that information as described in this Privacy Policy.</p>
                <h2>8. Children's privacy</h2>
                <p>The Site is not directed to persons under 13. If a parent or guardian becomes aware that his
                or her child has provided us with Personal Information without their consent, he or she should
                contact us at contact@creatosaurus.io. We do not knowingly collect Personal Information from
                children under 13. If we become aware that a child under 13 has provided us with Personal
                Information, we will delete such information from our files.</p>
                <h2>9. Information that cannot be uploaded</h2>
                <p>
                    While using the Services, you shall not host, display, upload, modify, publish, transmit,
                    update or share any information on to the Services that:
                    I. belongs to another person and to which you do not have any right to;
                    II. is grossly harmful, harassing, blasphemous defamatory, obscene, pornographic, paedophilic,
                    libellous, invasive of another’s privacy, hateful, or racially, ethnically objectionable,
                    disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful
                    in any manner whatever;
                    III. harms minors in any way;
                    IV.  infringes any patent, trademark, copyright or other proprietary rights;
                    V. violates any law for the time being in force;
                    VI. deceives or misleads the addressee about the origin of such messages or communicates any
                    information which is grossly offensive or menacing in nature;
                    VII. impersonates another person;
                    VIII. contains software viruses or any other computer code, files or programs designed to
                    interrupt, destroy or limit the functionality of any computer resource;
                    IX. threatens the unity, integrity, defence, security or sovereignty of India, friendly
                    relations with foreign states, or public order or causes incitement to the commission of any
                    cognizable offence or prevents investigation of any offence or is insulting any other nation.
                </p>
                <h2>10. Updates to this Privacy Policy</h2>
                <p>
                    This Privacy Policy may be updated from time to time for any reason; each version will apply to
                    information collected while it was in place. We will notify you of any modifications to our
                    Privacy Policy by posting the new Privacy Policy on our Site and indicating the date of the latest
                    revision. You are advised to consult this Privacy Policy regularly for any changes.
                    In the event that the modifications materially alter your rights or obligations hereunder, we will make
                    reasonable efforts to notify you of the change. For example, we may send a message to your email address
                    or generate a pop-up or similar notification when you access the Service for the first time after such material
                    changes are made. Your continued use of the Service after the revised Privacy Policy has become effective
                    indicates that you have read, understood and agreed to the current version of this Privacy Policy.
                </p>
                <h2>11. Your California privacy rights</h2>
                <p>
                    California law affords California residents certain additional rights regarding our collection
                    and use of your personal information. If you would like to exercise your rights to your Personal
                    Information, you may contact us by emailing us at contact@creatosaurus.io.
                </p>
                <h2>12. Contact us</h2>
                <p style={{ marginBottom: 50 }}>Creatosaurus is the entity responsible for the processing of your Personal Information. If
                you have any questions or comments regarding this Privacy Policy, or if you would like to
                exercise your rights to your Personal Information, you may contact us by emailing us at
                contact@creatosaurus.io.</p>
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

export default Privacypolicy
