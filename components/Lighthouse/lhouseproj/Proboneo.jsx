"use client"; // Or remove if not using client-specific features like hooks in this component

import Image from "next/image"; // If you plan to include an image

function Proboneo() {
  return (
    <a
      href="YOUR_LARGE_PROJECT_GITHUB_LINK" // Update this link
      target="_blank"
      rel="noopener noreferrer"
      // 👇 Key classes for spanning columns:
      className="block transition-transform hover:scale-105 md:col-span-2 lg:col-span-3"
    >
      {/* Note: For the section, consider using w-full or max-w-none to utilize the spanned space effectively */}
      <section className="w-full mx-auto flex flex-col items-center bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow min-h-[YOUR_DESIRED_HEIGHT]"> {/* Adjust min-h as needed */}
        {/* Example content - replace with your project's details */}
        {/* If you have an image for the large project:
        <div className="w-full flex justify-center mb-4">
          <Image
            src="/assets/imgs/YourLargeProject.png" // Update path
            alt="Screenshot of LargeProject"
            width={600} // Adjust as needed
            height={338} // Adjust as needed
            className="rounded-lg border max-w-full h-auto mb-6"
            priority // If it's above the fold on some views
          />
        </div>
        */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-yourchosenaccentcolor"> {/* Choose a color */}
            Your Awesome Large Project
          </h2>
          <p className="mb-4 text-gray-700 text-base md:text-lg">
            This project is a more significant piece of work, demonstrating a wider range of skills and a more complex development process. It might cover areas like [mention key features or technologies].
          </p>
          <ul className="list-disc list-inside mb-2 text-gray-800 text-base md:text-lg">
            <li>Feature or skill 1</li>
            <li>Feature or skill 2</li>
            <li>Feature or skill 3</li>
            <li>And so on...</li>
          </ul>
        </div>
      </section>
    </a>
  );
}

export default Proboneo;
