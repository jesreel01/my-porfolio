/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "my-porfolio",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "ap-southeast-1",
        }
      }
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb", {
      domain: "jesreel.me",
    });
  },
});
