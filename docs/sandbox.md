# Sandbox
*Chinstrap* provides a *sandbox* sub-command to manage a local development node with flextesa sandbox. This enables development and testing smart contracts on test network, before we proceed with _mainnet_.

```
➜ chinstrap sandbox -h

      _     _           _
  ___| |__ (_)_ __  ___| |_ _ __ __ _ _ __
 / __| '_ \| | '_ \/ __| __| '__/ _` | '_ \
| (__| | | | | | | \__ \ |_| | | (_| | |_) |
 \___|_| |_|_|_| |_|___/\__|_|  \__,_| .__/
                                     |_|

🐧 Chinstrap - a cute framework for developing Tezos Smart Contracts!
usage: chinstrap sandbox [-h] [-o PORT] [-i] [-d] [-s] [-c NUM_OF_ACCOUNTS] [-m MINIMUM_BALANCE]
                         [-p {Hangzhou,Jakarta,Alpha}] [-l]

optional arguments:
  -h, --help            show this help message and exit
  -o PORT, --port PORT  RPC Port of Tezos local sandbox
  -i, --initialize      Initialize Tezos sandbox
  -d, --detach          Start the Tezos sandbox and detach
  -s, --stop            Stop the currently running Tezos sandbox
  -c NUM_OF_ACCOUNTS, --num-of-accounts NUM_OF_ACCOUNTS
                        Number of accounts to bootstrap on Tezos sandbox
  -m MINIMUM_BALANCE, --minimum-balance MINIMUM_BALANCE
                        Amount of Tezos to deposit while bootstraping on Tezos local sandbox
  -p {Hangzhou,Jakarta,Alpha}, --protocol {Hangzhou,Jakarta,Alpha}
                        Protocol to start Tezos sandbox with.
  -l, --list-accounts   List local accounts from sandbox
```

To start a local sandbox on port 12345, and generate 5 test accounts and use Jakarta protocol, run the following command:
```
➜ chinstrap sandbox -p Jakarta -o 12345 -c 5
      _     _           _
  ___| |__ (_)_ __  ___| |_ _ __ __ _ _ __
 / __| '_ \| | '_ \/ __| __| '__/ _` | '_ \
| (__| | | | | | | \__ \ |_| | | (_| | |_) |
 \___|_| |_|_|_| |_|___/\__|_|  \__,_| .__/
                                     |_|

🐧 Chinstrap - a cute framework for developing Tezos Smart Contracts!
✔ Accounts created!
___________________________________________________________________________________________________________________________________________________

name                                  address                                  publicKey                                                privateKey
---------------------------------------------------------------------------------------------------------------------------------------------------
 Alice           tz1PiDHTNJXhqpkbRUYNZEzmePNd21WcB8yB edpkubiR5aDdZZ7bFgc1rKbg2k3wUSqb4GDXZ2WuKAmfq7fzvxQu8u edsk3AiSAERPfe6yqS7Q4YAxBQ5L1NLUao2H9sP34x7u1tEkXB5bwX
 Bob             tz1XxtxnMRTqkKax8F3pM3g67Zw36QqdMUCN edpktfBVohfeywZhn2CtBJXvF7oGWdK57WsPi25cL6SgP5b1jdF9SE edsk3BAGtjF1PnbRauYqjkyMBg9XqDDnQk3vf3J1azyiaJrZTdy9oV
 Carol           tz1WBjJAmPj1AaJgGwvP9FKsfUPbsbuHQWhC edpkuhRMLk7qHDkS2aB4cqui3nkCjhwiJWv9tYEqCTLb4eRXyD9aY5 edsk3BaRmZveqb8yP1A8ePnAtfzg2wfcN43tEcnidH1afJa3T4Rbsf
 Chuck           tz1YqC4LQNZK6UDW7yjwzh8mQthW4i1dmwKs edpkvYoBSJmaqGsgQoEpTicbAzTrLPzFLNBqJPREne6v3MwBF3XKsp edsk3Bb8M4K7BDqMEnNQT3458xhjirY9hZGHDpQZBDQzz1CUWLpjxP
 Craig           tz1U7FSJhS8QggXhzuxQ3kRVxtZuivwrL4ho edpkuqtWwroucmbwbqkmfVro2BWRwf36YVs3rCTmePjo149FtwndLz edsk3Bc7mTibCGhYivUSRATJDieR6TsNjiuaucoEotReo1czwx4ss1
---------------------------------------------------------------------------------------------------------------------------------------------------
WARNING: Please do not use these accounts on mainnet!
✔ Sandbox is at level: 20 and ready for use!
```

:::info
Please wait for the sandbox to reach level 20 before proceeding with deployments. *Chinstrap* notifies when the sandbox is ready to use.
:::

:::warning
Please DO NOT use the accounts generated by *chinstrap sandbox* on mainnet!
:::

