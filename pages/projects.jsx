import Layout from '../components/layout';

const Projects = () => {
  return (
    <Layout>
      <div>
        <h2 className="text-center md:text-left mb-2 text-4xl font-custom">
          Projects
        </h2>
        <p>
          This is my web development journey from a CLI application to a
          Full-stack Application
        </p>
      </div>
    </Layout>
  );
};

export default Projects;

/**
 * 
 * <li>
                <article class="article article-padding">
                    <h1>U&I Store - Ecommerce application for Sketching related products</h1>
                    <time>6th May, 2021</time>
                    <p>Created this app in MERN stack, used own component library for CSS. <br>Core features include
                        Cart and
                        Wishlist Management, PayPal sandboxing for payment, apply coupon feature, address management,
                        search/filter/sort functionality, JWT based Authentication</p>
                    <a target="_blank" class="link link-primary" href="https://u-and-i-store.netlify.app/">Open App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/UandIEcommerce">View
                        Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>U&I Talks – Social Media App</h1>
                    <time>15th June, 2021</time>
                    <p>Created this app in MERN stack, used Redux Toolkit for state management, Chakra UI for
                        CSS,
                        Cloudinary for image upload. <br>Core
                        features include Create post with text and image, Posting shared content, Post Feed, Search
                        User,
                        Notification Management,
                        Follow/Unfollow Users, Like Post, Update User Profile and profile image, JWT based
                        Authentication</p>
                    <a target="_blank" class="link link-primary" href="https://u-and-i-talks.netlify.app/">Open App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/UandISocialMedia/tree/development">View
                        Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>U&I Video Library – YouTube inspired Learning App</h1>
                    <time>17th May, 2021</time>
                    <p>Created this app in MERN stack, used own component library for CSS. <br>Core features include
                        Search
                        video, Filter by category, Playlist Management, Notes Management, Learning History, Share video
                        to
                        U&I talks, JWT based Authentication</p>
                    <a target="_blank" class="link link-primary" href="https://u-and-i-video-library.netlify.app/">Open
                        App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/UandIVideoLibrary/tree/development">View
                        Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>U&I Quiz – Fun Quiz app based on Sketching</h1>
                    <time>23rd May, 2021</time>
                    <p>Created this app in MERN stack, used TypeScript with React, Chakra UI for CSS, Unit tests in
                        JEST.
                        <br>Core
                        features include Multiple Quizzes, Score at the end of the Quiz play, Review answers feature,
                        Personal dashboard for attempted quizzes using Local Storage, JWT based
                        Authentication
                    </p>
                    <a target="_blank" class="link link-primary" href="https://u-and-i-quiz.netlify.app/">Open App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/uandiquiz/tree/development">View
                        Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>U&I – Component Library to build UI faster</h1>
                    <time>28th March, 2021</time>
                    <p>Created component library in HTML, Vanilla CSS and Vanilla JS. <br>It has 15 Reusable components
                        with
                        different
                        variations of each component. Each component supports dark theme and light theme. Most of the
                        components have live demo examples.</p>
                    <a target="_blank" class="link link-primary" href="https://u-and-i.netlify.app/">Open App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/UandIComponentLibrary">View
                        Source</a>
                </article>
            </li>

            <li>
                <article class="article article-padding">
                    <h1>Keep Notes</h1>
                    <time>6th March, 2021</time>
                    <p>App is created in React JS. Tried to create a clone of Google keep app.
                    </p>
                    <a target="_blank" class="link link-primary" href="https://keepnote-ankitab.netlify.app/">Open
                        App</a>
                    <a target="_blank" class="link link-secondary" href="https://github.com/AnkitaBagale/KeepNotes">View
                        Source</a>
                </article>
            </li>

            <li>
                <article class="article article-padding">
                    <h1>Blog Listing App</h1>
                    <time>22nd February, 2021</time>
                    <p>App is created in React JS. Used dev.to api to fetch blogs. Added a search functionality to
                        search
                        blogs.</p>
                    <a target="_blank" class="link link-primary" href="https://blogs-ankitab.netlify.app/">Open App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/blogListingPage">View Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>Birthdate Palindrome Check</h1>
                    <time>3rd January, 2021</time>
                    <p>Created an app in React-JS to check if entered birthdate is Palindrome. If it is not palindrome,
                        then
                        it will show nearest palindrome date and by how many days it got missed.</p>
                    <a target="_blank" class="link link-primary" href="https://bdatepalindrome.netlify.app/">Open
                        App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/BirthdatePalindromeCheck">View
                        Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>Fun with triangles</h1>
                    <time>29th December, 2020</time>
                    <p>Created an app in Vanilla JS to make learning about triangles fun.</p>
                    <a target="_blank" class="link link-primary" href="https://fun-with-triangles.netlify.app/">Open
                        App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/funWithTriangles">View Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>Cash Register Manager</h1>
                    <time>23rd December, 2020</time>
                    <p>Created app using React-JS and Vanilla-JS. User can enter the bill amount and cash given by the
                        customer and know minimum number of notes to return.</p>
                    <a target="_blank" class="link link-primary" href="https://cashregister-ankitab.netlify.app/">JS
                        App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/cashRegisterManager">View
                        Source</a>
                    <br>
                    <a target="_blank" class="link link-primary" href="https://yt9pw.csb.app/">ReactJS App</a>
                    <a target="_blank" class="link link-secondary" href="https://codesandbox.io/s/yt9pw">View Source</a>
                </article>
            </li>



            <li>
                <article class="article article-padding">
                    <h1>Stock Returns Calculator</h1>
                    <time>9th January, 2021</time>
                    <p>This app is created using vanilla js which shows how much profit or loss we are having on our
                        stocks.
                        If user has gained more than 50%, it makes the theme of app happy and if user has lost more than
                        50%, it makes the theme of app sad</p>
                    <a target="_blank" class="link link-primary" href="https://stockreturnscalculator.netlify.app/">Open
                        App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/stockProfitLoss">View Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>Is your birthdate Lucky?</h1>
                    <time>25th December, 2020</time>
                    <p>Created this app using React-JS and Vanilla-JS, which tells if birthdate is lucky or not.</p>
                    <a target="_blank" class="link link-primary" href="https://isyourbirthdaylucky.netlify.app/">JS
                        App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/isYourBirthdayLucky">View
                        Source</a>
                    <br>
                    <a target="_blank" class="link link-primary" href="https://rv9hp.csb.app/">ReactJS App</a>
                    <a target="_blank" class="link link-secondary" href="https://codesandbox.io/s/rv9hp">View Source</a>
                </article>
            </li>

            <li>
                <article class="article article-padding">
                    <h1>Best Web Series</h1>
                    <time>10th December, 2020</time>
                    <p>This is a fun app to check best series of listed genres. This app is created using React-js.</p>
                    <a target="_blank" class="link link-primary" href="https://bestwebseries-ankitab.netlify.app/">Find
                        Series</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/BestSeries">View
                        Source</a>
                </article>
            </li>

            <li>
                <article class="article article-padding">
                    <h1>Fun with Flags</h1>
                    <time>8th December, 2020</time>
                    <p>This is a fun app to check flags' country by searching or clicking on listed flags on the page.
                        Created with React-JS.</p>
                    <a target="_blank" class="link link-primary" href="https://funwithflag-ankitab.netlify.app/">Search
                        Flag</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/FunWithFlags">View
                        Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>Talk Like Pirates</h1>
                    <time>4th December, 2020</time>
                    <p>This is a translation app to convert English to Pirates language. Check this app to talk like
                        Pirates
                        with your friends.</p>
                    <a target="_blank" class="link link-primary" href="https://talkpirates-ankitab.netlify.app/">Talk
                        Pirates</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/talkLikePirates">View Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>Talk Like Minions</h1>
                    <time>2nd December, 2020</time>
                    <p>This is a translation app to convert english to banana language. Minions speak in banana language
                        in
                        Animated movie Despicable me. This is a fun game to talk like minions in friends.</p>
                    <a target="_blank" class="link link-primary" href="https://talkbanana-ankitab.netlify.app/">Talk
                        Banana</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/TalkBanana-Lesson4">View Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>Slideshow</h1>
                    <time>20th December, 2020</time>
                    <p>I have created a slideshow using React-JS and Vanilla-JS. We can show image and text in a slide.
                        On
                        clicking on arrows, slides get scrolled.</p>
                    <a target="_blank" class="link link-primary" href="https://lcu7w.csb.app/">JS App</a>
                    <a target="_blank" class="link link-secondary" href="https://codesandbox.io/s/lcu7w">View Source</a>
                    <br>
                    <a target="_blank" class="link link-primary" href="https://4y5g9.csb.app/">ReactJS App</a>
                    <a target="_blank" class="link link-secondary" href="https://codesandbox.io/s/4y5g9">View Source</a>
                </article>
            </li>

            <li>
                <article class="article article-padding">
                    <h1>Were you born in a leap year?(React Js)</h1>
                    <time>16th December, 2020</time>
                    <p>This a small fun game, to check if user were born in a leap year. This app is created using
                        React-JS.
                    </p>
                    <a target="_blank" class="link link-primary" href="https://s6c8e.csb.app/">Open App</a>
                    <a target="_blank" class="link link-secondary" href="https://codesandbox.io/s/s6c8e">View Source</a>
                </article>
            </li>

            <li>
                <article class="article article-padding">
                    <h1>Were you born in a leap year?(Vanilla JS)</h1>
                    <time>15th December, 2020</time>
                    <p>This a small fun game, to check if user were born in a leap year. This app is created using
                        Vanilla-JS.</p>
                    <a target="_blank" class="link link-primary" href="https://leapyearfinder-ankitab.netlify.app/">Open
                        App</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/wereYouBornInLeapYear">View
                        Source</a>
                </article>
            </li>
            <li>
                <article class="article article-padding">
                    <h1>Were you born in a leap year?</h1>
                    <time>18th November, 2020</time>
                    <p>This a small fun game, to check if user were born in a leap year. This is a CLI app created using
                        Javascript. hosted using repl.it.</p>
                    <a target="_blank" class="link link-primary"
                        href="https://repl.it/@AnkitaBagale/First-Class-Leap-year-exercise?embed=1&output=1">Play
                        Game</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/AnkitaBagale.CLIApp3">View
                        Source</a>
                </article>
            </li>


            <li>
                <article class="article article-padding">
                    <h1>Is your birth date a prime number?</h1>
                    <time>20th November, 2020</time>
                    <p>A CLI app built with nodeJS. A small fun game, to check if birth date of user is a prime number.
                    </p>
                    <a target="_blank" class="link link-primary"
                        href="https://repl.it/@AnkitaBagale/First-Class-prime-number-birth-date?embed=1&output=1">Play
                        Game</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/AnkitaBagale.CLIApp4">View
                        Source</a>
                </article>
            </li>

            <li>
                <article class="article article-padding">
                    <h1>Are you a harry potter fan?</h1>
                    <time>16th November, 2020</time>
                    <p>A CLI app built with nodeJS. A small fun game, you can send this to your friends and find out who
                        is
                        the biggest fan of Harry Potter</p>
                    <a target="_blank" class="link link-primary"
                        href="https://repl.it/@AnkitaBagale/First-Class-3?embed=1&output=1">Play
                        Game</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/AnkitaBagale-Quiz2">View Source</a>
                </article>
            </li>

            <li>
                <article class="article article-padding">
                    <h1>How well do you know me?</h1>
                    <time>14th November, 2020</time>
                    <p>A CLI app built with nodeJS. You can send this to your friends and find out who knows you better
                    </p>
                    <a target="_blank" class="link link-primary"
                        href="https://repl.it/@AnkitaBagale/First-Class-2?embed=1&output=1">Play
                        Game</a>
                    <a target="_blank" class="link link-secondary"
                        href="https://github.com/AnkitaBagale/AnkitaBagale-Quiz1">View Source</a>
                </article>
            </li>
 */
