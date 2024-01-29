const parseEnv = () => {
  const formattedVars = Object.entries(process.env)
    .filter(([key, _]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");
  console.log(formattedVars);
};

parseEnv();
