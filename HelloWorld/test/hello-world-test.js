const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", () => { 
    it("Should create and execute Simple Smart Contract", async () => {
        const helloWorld = await HelloWorld.deployed();
        
        // Call the `hello()` function of the contract
        const result = await helloWorld.hello();
        
        // Log the result for debugging purposes (optional)
        console.log("Message:", result);
        
        // Use assertion to verify the result
        assert.equal(result, "Hello, World!", "The hello message should be 'Hello, World!'");
    });
});
