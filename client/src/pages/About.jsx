const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className="text-3xl font font-semibold text-center my-7">About Tanisha's Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Tanisha's Blog! This blog was craeted by Tanisha Sura
              as a personal project to share her thoughts and ideas.
            </p>
            <p>
              On this blog you'll find weekly articles and tutorials on topics
              such as web decelopment, software engineering, and programming
              languages. Tanisha is always learning and exploring new
              technologies.
            </p>
            <p>
              We encourage you to leave comments on your posts and engage with
              other renders. You can like other people comments and reply to
              them as well. We beleive that a community of learners can help
              each other to grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
