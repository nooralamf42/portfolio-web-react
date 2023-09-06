import MyProjects from "../components/MyProjects";

const data = [
    {
        linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_webdevelopment-html-tailwindcss-activity-7097162916981878784-zqUN?utm_source=share&utm_medium=member_desktop',
        gitRepo: 'https://github.com/nooralamf42/razorPayClone-TailwindCSS/',
        liveSever: 'https://razor-pay-clone-tailwind-css.vercel.app/',
        title: 'RazorPay.com Clone Tailwind',
        description: 'RazorPay.com clone using Tailwind CSS with responsive design.',
        imgSrc: 'https://media.licdn.com/dms/image/D4D05AQEG6MCdIasSNw/feedshare-thumbnail_720_1280/0/1692095430376?e=1694624400&v=beta&t=eAXQcYY0GACQ7wun8xjsYKy7PpxpUo9Ndbp4OIqr7Ok'
    },
    {
        linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_webdevelopment-fullstackdeveloper-todolist-activity-7093604170695417857-L4WK?utm_source=share&utm_medium=member_desktop',
        gitRepo: 'https://github.com/nooralamf42/fullStakeToDoApp',
        liveSever: 'https://todo-nu-lime-93.vercel.app/',
        title: 'Full Stake Todo Web App',
        description: 'Introducing my ToDo web app, a project that showcases my skills in both frontend and backend web development. This powerful app allows users to efficiently manage their tasks with full CRUD functionality and the added security of JWT authentication.',
        imgSrc: 'https://media.licdn.com/dms/image/D4D05AQHfyj4icFmfRg/feedshare-thumbnail_720_1280/0/1691246971994?e=1694624400&v=beta&t=zXzKZaNmImZlq24h3ONnDCDsbmi5sPhsimvcouanIjo'
    },
    {
        linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_api-quranquotes-backenddevelopment-activity-7090401314941153281-ZEEx?utm_source=share&utm_medium=member_desktop',
        gitRepo: 'https://github.com/nooralamf42/QuranQuotesAPI',
        liveSever: 'https://quranquotes.vercel.app/',
        title: 'Quran Quotes API',
        description: "Now you can easily access a collection of inspirational Quran quotes through a simple API. Whether you're building an app, website, or project, this API provides you with a wide range of Quranic wisdom.",
        imgSrc: 'https://media.licdn.com/dms/image/D4D05AQGvYV2WPdbOgw/feedshare-thumbnail_720_1280/0/1686463655615?e=1694624400&v=beta&t=rh6DwIOMl6zn0i_GH_Sp1lRe3U1VOyOkpTQ0FcyoivA'
    },
    {
        linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_nodejs-registrationform-webdevelopment-activity-7073541413568659456-FnW_?utm_source=share&utm_medium=member_desktop',
        gitRepo: 'https://github.com/nooralamf42/registration-page-nodejs',
        liveSever: 'https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/12086473195/original/R46zM1RGOBclOA7fqEVL3wINYL2GOUrLDw.png?1608248678',
        title: 'Node.JS Registration Form',
        description: "Node.js Registration Form project! 🚀 It features a seamless registration process, followed by a successful registration page. Additionally, you can explore the registered users page, where you'll find a table showcasing their names, emails, and messages.",
        imgSrc: 'https://media.licdn.com/dms/image/D4D05AQGvYV2WPdbOgw/feedshare-thumbnail_720_1280/0/1686463655615?e=1694624400&v=beta&t=rh6DwIOMl6zn0i_GH_Sp1lRe3U1VOyOkpTQ0FcyoivA'
    },
    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_convertall-reactjsproject-unitconversiontool-activity-7072071978735534080-t6DO?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/di62Gask',
      liveServer: 'https://lnkd.in/diU97KyX',
      title: "ConvertAll Web App",
      description: 'ConvertAll! 🌟 Built using React.js, this powerful web application helps you convert various units effortlessly. From length and weight to temperature and more, ConvertAll has got you covered!',
      imgSrc: 'https://media.licdn.com/dms/image/D4D05AQFhlyGtm9yKpg/feedshare-thumbnail_720_1280/0/1686113306772?e=1686848400&v=beta&t=kwWvmW5FSbHbiLNZGvB6B5sDLdaTngFFoVRi8U9i0qg'
    },
    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_reactjs-cointosswebapp-webdevelopment-activity-7064183032173215744-J7eq?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/dzbw8TCB',
      liveServer: 'https://lnkd.in/dRgaReW5',
      title: "Coin Toss Web App",
      description: "I'm thrilled to announce that I have created a simple coin toss web app using ReactJS! Flip a virtual coin with just a click!",
      imgSrc: 'https://media.licdn.com/dms/image/D4D05AQHdNRAXWeRh_Q/feedshare-thumbnail_720_1280/0/1684232438587?e=1686837600&v=beta&t=L2Gk-3dlfL-jZvYaePOsT8VPf63WKl8w64klkSvhATs'
    },
    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_ytmonetizationchecker-webdevelopment-html-activity-7048983824235380736-Yx9k?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/d32ybzY7',
      liveServer: 'https://yt-monetization-checker.vercel.app/',
      title: "YouTube Monetization Checker",
      description: "I've created a YouTube channel monetization checker app! Using HTML, CSS, and JavaScript, I built an app that allows you to check if a YouTube channel is monetized or not.",
      imgSrc: 'https://media.licdn.com/dms/image/D4D05AQG5Tqp51Er4qA/feedshare-thumbnail_720_1280/0/1680608667237?e=1686841200&v=beta&t=msflqGdDYnBh5r1xR4doBZK67gsgNQ9G0B4TVlv5ZXM'
    },
    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_moviepedia-webdevelopment-html-activity-7048593373514854402-I1q7?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/eDifFQfV',
      liveServer: 'https://lnkd.in/ey8tpZtK',
      title: "MoviePedia Web App",
      description: "I've created a responsive movie details app called MoviePedia! Using HTML, CSS, JavaScript, and APIs, I built an app that allows users to search for and browse movie details with ease.",
      imgSrc: 'https://media.licdn.com/dms/image/D4E05AQEMgGzcNnh3gA/feedshare-thumbnail_720_1280/0/1680515573525?e=1686841200&v=beta&t=0VirQzxq7OjDgte6ZeJhxLgukmPjMqPYn1V5zDQB8T8'
    },
    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_webdevelopement-bootstrap-javascript-activity-7047270993467162624-du-z?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/dmM348tB',
      liveServer: 'https://lnkd.in/dqjUA3pk',
      title: "YouTube Clone (Responsive)",
      description: "I've created a responsive YouTube clone using Bootstrap! The clone mimics the layout and functionality of YouTube, with a fully responsive design that adapts to any screen size.",
      imgSrc: 'https://media.licdn.com/dms/image/D4D05AQG6RudRr5JtWw/feedshare-thumbnail_720_1280/0/1680200256457?e=1686841200&v=beta&t=C-etpPCTJsVenLhzAFIqAhogCVbmR4Z5wqiMeWzvwiE'
    },
    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_examverification-webdevelopment-javascript-activity-7045704593921433600-STxu?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/dRDdbePc',
      liveServer: 'https://lnkd.in/dKFg-DJC',
      title: "Exam Center Web",
      description: "I have created a simple exam center website that checks for valid email addresses and ensures input fields are correctly filled. If the email address is already in use, the website won't accept it. Upon submitting the data, the website also provides a random exam center.",
      imgSrc: 'https://media.licdn.com/dms/image/C4D05AQG0UfoN6XgoAg/feedshare-thumbnail_720_1280/0/1679826841164?e=1686841200&v=beta&t=Wlb8oLZ2HIZb6L4IbqqJM_Fs10IGGvxA89qVEbM3b20'
    },
    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_javascript-tiktactiles-bootstrap5-activity-7045085042288517120-hyxy?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/dJC6amVZ',
      liveServer: 'https://lnkd.in/dYCEdcWi',
      title: "Tik Tac Tiles",
      description: "Check out my two-player Tik Tac Tiles game - a fun and challenging twist on Tik Tac Toe!",
      imgSrc: 'https://media.licdn.com/dms/image/C4D05AQH4xQaR08mF5A/feedshare-thumbnail_720_1280/0/1679679126319?e=1686841200&v=beta&t=blfdqMJ8XKUJEAeveHbRR_BA0nVtwBwowTLDFCnkQM4'
    },
    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_project-html-javascript-activity-7043845369281011712-PsHH?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/dgvEitTU',
      liveServer: 'https://lnkd.in/djm8qvqj',
      title: "Budget Web App",
      description: "Introducing my new web app for budgeting! With a modern design created using HTML, Bootstrap, and JavaScript, the app makes tracking finances simple and fun.",
      imgSrc: 'https://media.licdn.com/dms/image/C4D05AQEdm3z5Ew5RhA/feedshare-thumbnail_720_1280/0/1679383529648?e=1686841200&v=beta&t=oWpufF1NtXDipxMlgDbWmZIfcB5eKdQp4opGOmSiKu0'
    },

    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_javascript-webdevelopment-coding-activity-7041102324592709632-vKyk?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/dyt5P_An',
      liveServer: 'https://lnkd.in/dni5-F6K',
      title: "Random Quote Generator",
      description: "I am excited to share with you my latest project - a random quote website built using JavaScript!",
      imgSrc: 'https://media.licdn.com/dms/image/D4D05AQFZorop70hsfQ/feedshare-thumbnail_720_1280/0/1678729581042?e=1686841200&v=beta&t=FfC-ur3oossj9u985XLy5qeq9CuQhT21VolWyC-5FKM'
    },

    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_pythonlearning-100daysofcodechallenge-activity-7039285236190306305-AqV_?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/dgvEitTU',
      liveServer: 'https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/12086473195/original/R46zM1RGOBclOA7fqEVL3wINYL2GOUrLDw.png?1608248678',
      title: "Name Gender Checker",
      description: "Check out my new project made with python flask which let's you to check gender of any name that you input.",
      imgSrc: 'https://media.licdn.com/dms/image/D4D05AQFCEdGnJEvnFA/feedshare-thumbnail_720_1280/0/1678296053211?e=1686841200&v=beta&t=dB0qp23zPRyVgxW-8LuC1IiDiXJqbMZtD5Luh6wJLJk'
    },

    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_flask-python-webdevelopment-activity-7039500885386801152-YqDl?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/defGU53K',
      liveServer: 'https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/12086473195/original/R46zM1RGOBclOA7fqEVL3wINYL2GOUrLDw.png?1608248678',
      title: "Dynamic Blog Posts",
      description: "I've created a blog website with dynamic web pages using Flask and Python. Check out my GitHub repository to see the project in action. I'm thrilled to share my progress and can't wait to continue expanding my skills in web development.",
      imgSrc: 'https://media.licdn.com/dms/image/D4D05AQHvGHDB33VtRw/feedshare-thumbnail_720_1280/0/1678347763422?e=1686848400&v=beta&t=7v3v_Cx9OkqA4GQg4ea5ifEX9pGgAfSr3wy6gqUUS4g'
    },

    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_python-100daysofcodechallenge-pythonlearning-activity-7038921216312631296-Ued_?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/de8qd8BE',
      liveServer: 'https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/12086473195/original/R46zM1RGOBclOA7fqEVL3wINYL2GOUrLDw.png?1608248678',
      title: "High Low Game",
      description: "I've Created a cute number guessing game using the flasks module in python. Guess a number between 1-10 and type your guessed number in the path with '/'.",
      imgSrc: 'https://media.licdn.com/dms/image/D4D05AQHhER4P64z5Rw/feedshare-thumbnail_720_1280/0/1678209399325?e=1686848400&v=beta&t=4M5It_mp3KuwftCBY6bN8YGB0MhL_D-yZSHw46x-USU'
    },

    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_letsengage-letsconnect-python-activity-7033833890284777472-XTPq?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/dqkrV2zQ',
      liveServer: 'https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/12086473195/original/R46zM1RGOBclOA7fqEVL3wINYL2GOUrLDw.png?1608248678',
      title: "Auto Typing",
      description: "I have always wanted to showoff my typing speed but I always stayed under 50WPM but with the help of Python I can show my friends 😂",
      imgSrc: 'https://media.licdn.com/dms/image/D4D05AQFiJvkRy1kYOg/feedshare-thumbnail_720_1280/0/1676996342869?e=1686848400&v=beta&t=fVRYugEXoZJPVPPV0vKWQvW0HzSmD8X_xGP2tWaV54s'
    },
    
  ];

const Mywork = () =>{
    return(
        <div>
            <h1 className="page-h1">My Work</h1>
            <div className="mywork-container">
            {data.map((value)=>{
            return <MyProjects linkedin={value.linkedin} gitrepo={value.gitRepo} liveServer={value.liveServer} description={value.description} img={value.imgSrc} title={value.title}/>
            })}
            </div>
        </div>
    )
}

export default Mywork;
