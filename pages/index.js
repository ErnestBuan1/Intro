import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>All About me</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Ernest Buan.<br></br> 
        I live at Arayat, Pampanga.<br></br>
        <hr></hr>
        </p>

        <h3>Hobbies</h3>
        <ol> Here are my top 3 Hobbies <br></br> <br></br>

          <li>Playing Guitar</li>

          <li>Driving</li>

          <li>Studying</li>
          
        </ol>

        <hr></hr>
        <h3>Favorite Music</h3>
        <p>
          My Favourite music as of now is Alam mo ba Girl by Hev Abi. <br></br>
        </p> 
        <hr></hr>
        <br></br>

        <p>
          My Favourite food is Siomai Rice
        </p>

        <hr></hr>

        <h3>More things about me:</h3>
<p>
I am committed to continuously improving my programming skills and believe I can become a better developer with dedication and perseverance.<br></br>
Finding consistent motivation is key to keeping me driven.
</p>

<h4>Why I took IT</h4>
<p>
I chose to study IT because I'm intrigued by how technology works, operates, and evolves. I also think pursuing a career in IT is a smart choice given the rapidly advancing technological landscape we're part of.
</p>

<h4>What career I see myself after Graduating</h4>
<p>
After graduation, I envision myself as a Back-end Developer. I find backend development intellectually stimulating and engaging. With experience, I aim to expand my skills and eventually become a Full-Stack Developer.
</p>

<h4>What I expect learning within this subject</h4>
<p>
I expect this subject to provide me with a solid foundation in creating well-structured systems. I hope to enhance my coding efficiency and develop a more robust approach to programming compared to previous years.
</p>

<h4>What are the topics that I wanted to be discussed in the subject</h4>
<p>
I am interested in gaining a deep understanding of various programming languages and learning how to integrate them effectively. I want to explore how different languages interact and function together in diverse applications.
</p>
</section>
    </Layout>
  );
}