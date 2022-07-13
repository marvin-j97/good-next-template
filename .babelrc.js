module.exports = (() => {
  const plugins = [];
  if ("INSTRUMENT_COVERAGE" in process.env) {
    console.log("Instrumenting Next client for code coverage...");
    plugins.push("istanbul");
  }

  return {
    presets: ["next/babel"],
    plugins,
  };
})();
