import React from "react";

const GithubStatsSection = () => {
  // Define URLs for light and dark themes
  const trophiesUrl = "https://github-profile-trophy.vercel.app/?username=yashthakare93&theme=dracula&margin-w=32";
  const profileDetailsUrl = "http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=yashthakare93&theme=github_dark";
  const mostCommitLanguageUrl = "http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=yashthakare93&theme=github_dark";

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">GitHub Stats</h2>
      
      {/* GitHub Trophies */}
      <div className="mb-8">
        <img src={trophiesUrl} alt="GitHub trophies" />
      </div>
      
      {/* GitHub profile cards */}
      <div className="mb-8 lg:flex lg:gap-2">
        {/* Profile details */}
        <img src={profileDetailsUrl} alt="GitHub profile details" className="mb-8 lg:mb-0" />
        
        {/* Most commit language */}
        <img src={mostCommitLanguageUrl} alt="Most commit language" className="mb-2 lg:mb-0 lg:ml-2" />
      </div>
    </div>
  );
};

export default GithubStatsSection;
