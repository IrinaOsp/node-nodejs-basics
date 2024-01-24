const parseArgs = () => {
  const args = process.argv
    .slice(2)
    .reduce(
      (acc, el, ind, arr) =>
        el.startsWith("--")
          ? [...acc, `${el.slice(2)} is ${arr[ind + 1]}`]
          : acc,
      []
    )
    .join(", ");
  console.log(args);
};

parseArgs();
