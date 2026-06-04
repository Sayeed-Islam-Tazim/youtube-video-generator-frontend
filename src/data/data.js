 const textAreaPlaceHolder = `Enter your story here...
  
Example: Once, a poor woodcutter was cutting wood near a deep river. Suddenly, his iron axe slipped from his hands and fell into the deep water. He sat down by the river and started crying because he was very poor and the axe was his only way to earn a living.Hearing his cry, a river......`;

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