import MyProjects from "../components/MyProjects";

const data = [
  {
    linkedin: false,
    gitRepo: 'https://github.com/nooralamf42/razorPayClone-TailwindCSS/',
    liveServer: 'https://ss-six-phi.vercel.app/',
    title: 'Shhh! Get Anonymous Messeges',
    description: 'Shh lets you get messeges from people anonymously',
    imgSrc: 'https://iili.io/dFgF3qQ.png'
},
{
  linkedin: false,
  gitRepo: 'https://github.com/nooralamf42/divinePerfumery/',
  liveServer: 'https://www.divineperfumers.com/',
  title: 'Divine Perfumers : Perfume Website',
  description: 'DivinePerfumers.com - A online perfume selling website with a modern look',
  imgSrc: 'https://iili.io/dFgK6P4.png'
},
{
  linkedin: false,
  gitRepo: 'https://github.com/nooralamf42/blogsApp/',
  liveServer: 'https://blogs-app-ecru.vercel.app/',
  title: 'React: Blogs Website',
  description: 'Made with ReactJS and AppWrite, lets you create public and private posts',
  imgSrc: 'https://iili.io/dFgTW7f.png'
},
{
  linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_reactjs-notetaking-webapp-activity-7126437271955722240-diqh?utm_source=share&utm_medium=member_desktop',
  gitRepo: 'https://github.com/nooralamf42/noteTakingApp',
  liveServer: 'https://www.divineperfumers.com/',
  title: 'ReactJS Note Taking Website',
  description: "Built with React, Tailwind CSS, and the power of React Hooks, this app simplifies the art of note-taking. Whether you're a student, professional, or simply someone who loves jotting down thoughts",
  imgSrc: 'https://media.licdn.com/dms/image/D4D05AQEVu7NIwtNLZg/feedshare-thumbnail_720_1280/0/1699074971179?e=1720414800&v=beta&t=7lVE2iuROa38oYz2J0_twuP8iDUBLIfSH22P2fmxTpI'
},
    {
        linkedin: true,
        gitRepo: 'https://github.com/nooralamf42/razorPayClone-TailwindCSS/',
        liveServer: 'https://razor-pay-clone-tailwind-css.vercel.app/',
        title: 'RazorPay.com Clone Tailwind',
        description: 'RazorPay.com clone using Tailwind CSS with responsive design.',
        imgSrc: 'https://media.licdn.com/dms/image/D4D05AQEG6MCdIasSNw/feedshare-thumbnail_720_1280/0/1692095430376?e=1720414800&v=beta&t=rTKHXYllH0vAsm86bENn25Oh_b0GlNcCYQwhruMYjQs'
    },
    {
      linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_moviepedia-webdevelopment-html-activity-7048593373514854402-I1q7?utm_source=share&utm_medium=member_desktop',
      gitRepo: 'https://lnkd.in/eDifFQfV',
      liveServer: 'https://movie-pedia-gamma.vercel.app/',
      title: "MoviePedia",
      description: "I've created a responsive movie details app called MoviePedia! Using HTML, CSS, JavaScript, and APIs, I built an app that allows users to search for and browse movie details with ease.",
      imgSrc: 'https://media.licdn.com/dms/image/D4E05AQEMgGzcNnh3gA/feedshare-thumbnail_720_1280/0/1680515573525?e=1720414800&v=beta&t=i55qd9CvmLPpj--aLf__yBbUyNotMUd5GlvXuwxlPo0'
    },
    {
      linkedin: false,
      gitRepo: 'https://github.com/nooralamf42/30_Days_30_Websites/tree/main/Day-15-PasswordGenerator',
      liveServer: 'https://nooralamf42.github.io/30_Days_30_Websites/Day-15-PasswordGenerator/',
      title: "Password Generator",
      description: "Password generator lets you create a strong password, based on your needs you can choose its length and if it required special characters or numbers",
      imgSrc: 'https://iili.io/dFgxQBn.png'
    },
    {
        linkedin: 'https://www.linkedin.com/posts/noor-alam-725639265_webdevelopment-fullstackdeveloper-todolist-activity-7093604170695417857-L4WK?utm_source=share&utm_medium=member_desktop',
        gitRepo: 'https://github.com/nooralamf42/fullStakeToDoApp',
        liveServer: 'https://todo-nu-lime-93.vercel.app/',
        title: 'Full Stake Todo Web App',
        description: 'Introducing my ToDo web app, a project that showcases my skills in both frontend and backend web development. This powerful app allows users to efficiently manage their tasks with full CRUD functionality and the added security of JWT authentication.',
        imgSrc: 'https://media.licdn.com/dms/image/D4D05AQHfyj4icFmfRg/feedshare-thumbnail_720_1280/0/1691246971994?e=1720414800&v=beta&t=dGJyLnjOvaZ_aaVkAYHAO-F8_IOR2ASRIq6SvaCRw_o'
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
