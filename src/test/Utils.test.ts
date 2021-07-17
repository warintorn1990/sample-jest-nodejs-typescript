import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
  beforeEach(() => {
    console.log("before each");
  });

  beforeAll(() => {
    console.log("before all");
  });

  test("first test", () => {
    const result = Utils.toUperrCase("abc");
    expect(result).toBe("ABC");
  });

  test("parse simple URL", () => {
    const parsedUrl = Utils.parseUrl("http://localhost:8080/login");
    expect(parsedUrl.href).toBe("http://localhost:8080/login");
    expect(parsedUrl.port).toBe("8080");
    expect(parsedUrl.protocol).toBe("http:");
    expect(parsedUrl.query).toEqual({});
  });

  test("parse URL with query", () => {
    const parsedUrl = Utils.parseUrl(
      "http://localhost:8080/login?user=user&password=pass"
    );
    const expectedQuery = {
      user: "user",
      password: "pass",
    };
    expect(parsedUrl.query).toEqual(expectedQuery);
    expect(expectedQuery).toEqual(expectedQuery);
  });

  test.only("test invalid URL", () => {
    function expectError() {
      Utils.parseUrl("");
    }
    expect(expectError).toThrowError();
  });

  test.only("test invalid URL With Arrow Function", () => {
    expect(()=> {
        Utils.parseUrl("");
    }).toThrowError();
  });

  test.only("test invalid URL With Try Catch", () => {
    try {
        Utils.parseUrl('');
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Empty url!');
    }
  });
});
