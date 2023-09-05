import React from "react";
import img from "../../../../../public/images/google.png";
import Image from "next/image";

function page() {
  return (
    <div className="p-4">
      <div className="my-8">
        I am excited to introduce new Android mobile app, BisLingo, designed to
        make your language learning journey easier and more convenient. With
        BisLingo, you can create your own vocabulary as you go and interact with
        them by the app generated quizzes and games you can play with. Whether
        you're looking to improving your English, just start learning Spanish,
        or exploring Japanese, BisLingo has got you covered.With the
        user-friendly interface and intuitive design make it easy to learn any
        language, build your knowledge, and play games, all from the palm of
        your hand. BisLingo is available for download on the Google Play Store,
        and is compatible with android phones, tablets and chrome devices. Plus,
        it's completely free to use!
      </div>

      <div className="">
        <div className="flex flex-col xl:flex-row ">
          <div class=" w-full justify-center lg:w-2/3 2xl:w-1/2 mx-auto h-full my-8">
            <div
              className="relative  overflow-hidden w-full mb-8"
              style={{ paddingBottom: 10 }}
            >
              <iframe
                //width="560"
                height="315"
                className="w-full"
                src="https://www.youtube.com/embed/5-YQjRs5Nag?si=_LQepYn7-ppTLoep"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="xl:ml-2 flex flex-col justify-center items-start">
            <p className="mb-2">
              <span className="font-extrabold ">✓</span> Development: Developing
              your own vocabulary base on your interest help you master at
              language faster.
            </p>{" "}
            <p className="mb-2">
              <span className="font-extrabold">✓</span> Entertaintment: Games
              can make it easier to learn educational contents and develop
              cognitive skills.
            </p>{" "}
            <p className="mb-2">
              <span className="font-extrabold">✓</span> Interactivity: Quizzes
              help you identify what you know and what you don't know
            </p>{" "}
            <p className="mb-2">
              <span className="font-extrabold">✓</span> Entertaintment: Games
              can make it easier to learn educational contents and develop
              cognitive skills.
            </p>{" "}
          </div>
        </div>

        <div className=" my-8 ">
          Not just a regular dictionary app. You can build your own dictionary
          as you like. You can use it for any language you want. Moreover
          BisLingo has its own quiz builder that can produce random questions
          with your own entries and you can also practice your knowledge by
          playing hangman.
        </div>
        <div>
          I believe that BisLingo will revolutionize the way you learning
          language, and I can't wait for you to try it out for yourself.
          Download it now and experience the convenience and ease of BisLingo.
          Thank you for your support, and please don't hesitate to contact us
          with any questions or feedback. Sincerely, The developer of Bislingo
        </div>
        <div className="flex flex-row  justify-center items-center my-8">
          <p>Download :</p>
          <a
            class="w-32"
            href="https://play.google.com/store/apps/details?id=com.oocak.panelistmobilerevised"
          >
            <Image
              className="h-auto max-w-full"
              src={img}
              alt="image description"
            />
          </a>
        </div>
        <div className="text-center my-8">
          -------------------------------------------------------
        </div>
      </div>
    </div>
  );
}

export default page;
