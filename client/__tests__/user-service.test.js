const provider = require("../mock-server/provider");
const { getAllUsers } = require("../services/user-service");
const interactions = require("../mock-server/interactions");

describe("user-service", () => {
  beforeAll(async () => {
    process.env["SERVICE_URL"] = "http://localhost:1234";
    console.log("starting provider...");
    await provider.setup();
    console.log("started provider.");
  });

  afterAll(async () => {
    console.log("shutting down provider...");
    await provider.finalize();
    console.log("provider shut down.");
  });

  describe("getAllUser", () => {
    it("should get list from server", async () => {
      await provider.addInteraction(interactions.getAllUsers);
      const users = await getAllUsers("http://localhost:1234");
      await provider.verify();
    });
  });
});
