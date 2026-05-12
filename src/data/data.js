 const textAreaPlaceHolder = `Enter your story here...
  
Example: lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

 const videoStyle = [
    {
      value: "cinematic-realistic",
      label: "Cinematic / Realistic",
    },
    {
      value: "animated-cartoon",
      label: "Animated / Cartoon",
    },
    {
      value: "watercolor-artistic",
      label: "Watercolor / Artistic",
    },
    {
      value: "dark-dramatic",
      label: "Dark / Dramatic",
    },
    {
      value: "bright-cheerful",
      label: "Bright / Cheerful",
    },
  ]

const narratorVoice = [
    {
      value: "male-deep",
      label: "Male - deep & calm",
    },
    {
      value: "female-warm",
      label: "Female - warm & expressive",
    },
    {
      value: "male-energetic",
      label: "Male - energetic & enthusiastic",
    },
    {
      value: "female-storytelling",
      label: "Female - storytelling",
    },
    {
      value: "neutral-documentary",
      label: "Neutral - documentary",
    },
  ]

  const videoDuration = [
    {
      value: "short",
      label: "Short (1-3 minutes)",
    },
    {
      value: "medium",
      label: "Medium (3-5 minutes)",
    },
    {
      value: "long",
      label: "Long (5+ minutes)",
    },
   
  ]

export { textAreaPlaceHolder, videoStyle, narratorVoice, videoDuration };