---
title: Chinstrap - Tezos smart contract development using REPL
description: How to create, test and deploy Tezos smart contracts?
slug: chinstrap-tezos-smart-contract-development-repl
authors:
  - name: ant4g0nist
    title: Creator of Chinstrap
    url: https://github.com/ant4g0nist
    image_url: https://pbs.twimg.com/profile_images/1536453566566748161/RTjM3OCI_400x400.jpg
tags: [chinstrap, tezos, smart-contracts, repl]
image: https://chinstrap.io/img/logo.png
hide_table_of_contents: false
---

## Chinstrap REPL - Tezos smart contract development

In our previous post, we have developed, tested and originated a FA1.2 contract to our Flextesa sandbox. In this post, we will do the same but instead of using `Chinstrap` cli, we will use `Chinstrap` REPL.

Please read the [Part-1](https://chinstrap.io/blog/chinstrap-tezos-smart-contract-development) of this 2 part series on how to use Chinstrap to create, test and deploy Tezos smart contracts.

## Chinstrap REPL

Chinstrap's read–eval–print loop (REPL) is a simple interactive development environment that takes a single command/method call. executes them amd returns the result. Using repl makes it easy to interact with the deployed contracts on the chain.

[![asciicast](https://asciinema.org/a/OpybONHPCiyDUU5vv3NdMMG5s.svg)](https://asciinema.org/a/OpybONHPCiyDUU5vv3NdMMG5s)


Chinstrap provides a `develop` sub-command that provides a repl to develop interactively. `chinstrap develop` launches a powerful repl, exposing Chinstrap's functionalitiy to the repl making the interaction with Tezos networks much easier.

```sh
chinstrap develop -h
```

![repl-deply](/img/repl-h.png)

## Setup
Please clone the `ChinToken` repo from [ant4g0nist/ChinToken](https://github.com/ant4g0nist/ChinToken) if you don't already have the source.

## Launching the REPL

When we launch `Chinstrap`'s repl, we have an option to either start the Flextesa sandbox or directly connect to any configured network in `chinstrap-config.yml` file.

The following process remains the for all the networks.

### Chinstrap REPL - Sandbox
The configuration for the local development should like:

```yaml
chinstrap:
  network:
    development:
      host: http://localhost:12345
      accounts:
        - privateKeyFile: ./.secret
  compiler:
    lang: smartpy
    test: smartpy
```

To start a local sandbox on port 12345, and generate 5 test accounts and use Ithaca protocol, and launch the repl, run the following command:

```sh
chinstrap develop -p Ithaca -n development -o 12345 -c 5
```
![repl-launch](/img/repl-launch.png)

### Chinstrap REPL - Compile
Chinstrap repl also has a *compile* function that compiles contracts inside `contracts` folder.

```sh
chinstrap:> compile()
✔ FA1.2.py compilation successful!
chinstrap:>
```

### Chinstrap REPL - Test
Chinstrap repl also has a *test* function that run tests inside `tests` folder.

```py
chinstrap:> test()
✔ Tests passed on FA1.2.test.py
chinstrap:>
```
![test](/img/repl-compile-test.png)

### Chinstrap REPL - Origination
*Chinstrap repl* provides *originate* method to originate contracts.

![repl-originate](/img/repl-originatefa12.png)

Now that we have originated the contract, things get a little more interesting. We can use the repl interface to interact with the contract.

## Chinstrap REPL - Inspect contract
Chinstrap exposes `getContractFromAddress` function through which we can get the contract interface from an address.

```sh
chinstrap:> contract = getContractFromAddress('KT1MMvEKHoZ413FbF7CD5Y4MN5jDeLYg4r2S')
```

Now you can inspect and call the FA1.2 entrypoints on the `contract` object.

For example, to access the contract's storage:

![repl-contract-storage](/img/repl-contract-storage.png)

For further reading on all the available methods in the REPL, please check [chinstrap/repl](https://chinstrap.io/docs/repl) and (Inspecting Tezos smart contracts with PyTezos library)[https://baking-bad.org/blog/2019/03/24/inspecting-tezos-smart-contracts-with-pytezos-library/]

## Clean up
Stop the sandbox after the completion of testing.

```sh
chinstrap:> stopSandbox()
```
or

Run this in after exiting the repl:

```sh
chinstrap sandbox -s
```

## Conclusion

Chinstrap's REPL is a nicer way to work with your contracts interactively for testing and compiling, or for executing transactions by hand. Chinstrap's integration with Sandbox and Pytezos makes it a cleaner and easier interface for the development on Tezos environment.

Join the telegram for furthur discussions: https://t.me/chinstrap_io
Follow us on twitter for continous updates: https://twitter.com/chinstrap_io


Happy Hacking 👾 🎉