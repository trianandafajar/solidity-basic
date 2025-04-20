const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", () => {
  it("Should create and execute Simple Smart Contract", async () => {
    // Deploy contract
    const helloWorld = await HelloWorld.deployed();

    // Panggil fungsi `hello()` dari kontrak
    const result = await helloWorld.hello();

    // Debug: log hasil ke terminal
    console.log("Message:", result);

    // Verifikasi hasil menggunakan assertion
    assert.equal(result, "Hello, World!", "The hello message should be 'Hello, World!'");
  });
});
