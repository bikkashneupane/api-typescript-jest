import { describe, it } from "node:test";
import app from "../../server";
import request from "supertest";

describe("Test server connection", () => {
  it("Should send 200 status message", async () => {
    const res = await request(app).get("/");
    console.log(res);
    expect(res.status).toBe(200);
    expect(res.text).toBe("message: {Server alive}");
  });
});
