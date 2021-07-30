const pLimit = require("p-limit");
const { genPromise: fetchSomething } = require("./utils");

const limit = pLimit(4);

const input = Array.from(new Array(20), (_, i) =>
  limit(fetchSomething)
)
;(async () => {
  // Only one promise is run at once
  const result = await Promise.all(input);
  console.log(result);
})();
