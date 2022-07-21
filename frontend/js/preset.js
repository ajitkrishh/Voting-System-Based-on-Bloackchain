
web3.eth.getAccounts().then(accounts => {
    Accounts = accounts;
    defaultAccount = accounts[0];
}).then(() =>{
    
    // myContract.methods.clearVoter("0x0000000000000000000000000000000000000000")
    //     .send({ from: defaultAccount, gas: 3000000 }, function (err, res) {
    //         if (err) {
    //             console.log("An error occured", err)
    //             return
    //         }
    //         console.log(" cleared Hash of the transaction: " + res)
    //     });
    
    for (var i = 1; i < 5; i++) {
        myContract.methods.createVoter(Accounts[i], "Ajit" + i, "12341214023" + i, 1, "ajit")
            .send({ from: Accounts[i], gas: 3000000 }, function (err, res) {
                if (err) {
                    console.log("An error occured", err)
                    return
                }
                console.log("Success ")
            });
    }
    
    myContract.methods.addCandidatetoCandidateList(Accounts[1], "BJP")
        .send({ from: Accounts[i], gas: 3000000 }, function (err, res) {
            if (err) {
                console.log("An error occured", err)
                return
            }
            console.log("Success party Added ")
        });
    myContract.methods.addCandidatetoCandidateList(Accounts[2], "Congress")
        .send({ from: Accounts[i], gas: 3000000 }, function (err, res) {
            if (err) {
                console.log("An error occured", err)
                return
            }
            console.log("Success party Added")
        });
        

})
