import app from "../../server";
import request from "supertest";

describe("Test server connection", () => {
  it("Should send 200 status message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Server alive");
  });
});
