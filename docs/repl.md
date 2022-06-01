# Chinstrap REPL
```sh
chinstrap:>
```

*Chinstrap* provides a *develop* sub-command that provides a repl to develop interactively. `chinstrap develop` launches a powerful repl, exposing Chinstrap's functionalitiy to the repl making the interaction with Tezos networks much easier.

```sh
➜ chinstrap develop -h
```
![repl](/img/repl-h.png)

To start a local sandbox on port 12345, and generate 5 test accounts and use Ithaca protocol, and launch the repl, run the following command:

```sh
chinstrap develop -p Ithaca -n development -o 12345 -c 5
```

[![asciicast](https://asciinema.org/a/OpybONHPCiyDUU5vv3NdMMG5s.svg)](https://asciinema.org/a/OpybONHPCiyDUU5vv3NdMMG5s)

Available functions:

```
pytezos
config
network
getContract
getContractFromFile
getContractFromURL
getContractFromAddress
compile
test
template
JsLigo
CameLIGO
ReasonLIGO
PascaLIGO
accounts
stopSandbox
originate
install
compilers
exit
```

### config
`config` is a Chinstrap config object that gives you access to current project's configuration file.

```py
chinstrap:> print(config)
```

![Config](/img/repl-config.png)

### getContract
`getContract` method takes name of a contract from contracts folder to fetch and return `pytezos.ContractInterface`.

```py
chinstrap:> help(getContract)
getContract(name)
    Get contract to be originated.
    arguments:
        name: name of the contract from contracts/ folder to get
    returns  :
        pytezos.ContractInterface
```

```py
chinstrap:> contract = getContract("MyContract")
chinstrap:> contract
pytezos.jupyter.ContractInterface object at 0x104dd6e80>

Properties
.block_id	head
.storage	# access storage data at block `block_id`
.parameter	# root entrypoint

Entrypoints
.approve()
.getAllowance()
.getBalance()
.getTotalSupply()
.transfer()
.default()

Views

Helpers
.big_map_get()
.create_from()
.from_context()
.from_file()
.from_micheline()
.from_michelson()
.from_url()
.metadata()
.metadata_url()
.operation_result()
.originate()
.program()
.script()
.storage_from_file()
.storage_from_micheline()
.storage_from_michelson()
.to_file()
.to_micheline()
.to_michelson()
.using()
```

```py
chinstrap:> contract.storage
<pytezos.contract.data.ContractData object at 0x104057610>

Properties
.block_id	head
.path	

Builtin
()	# get as Python object
[key]  # access child elements by name or index

Typedef
$storage:
	{
	 "allowances": { ( address, address ): nat, … } || int /* Big_map ID */,
	 "tokens": { address: nat, … } || int /* Big_map ID */,
	 "total_supply": nat
	}

$address:
	str  /* Base58 encoded `tz` or `KT` address */

$nat:
	int  /* Natural number */


Helpers
.decode()
.default()
.dummy()
.encode()
.to_micheline()
.to_michelson()
chinstrap:>
 
```

### getContractFromFile
`getContractFromFile` method takes a contract from michelson source code stored in a file and returns `pytezos.ContractInterface`.

```py
chinstrap:> help(getContractFromFile)
getContractFromFile(filename)
    Get contract from michelson source code stored in a file and returns.
    arguments:
        filename: filename of the contract to get
    returns  :
        pytezos.ContractInterface
```

```py
chinstrap:> contract = getContractFromFile("./build/contracts/MyContract/step_000_cont_0_contract.tz")
chinstrap:> contract.storage
<pytezos.contract.data.ContractData object at 0x10a36fe20>

Properties
.block_id	head
.path	

Builtin
()	# get as Python object
[key]  # access child elements by name or index

Typedef
$storage:
	{
	 "allowances": { ( address, address ): nat, … } || int /* Big_map ID */,
	 "tokens": { address: nat, … } || int /* Big_map ID */,
	 "total_supply": nat
	}

$address:
	str  /* Base58 encoded `tz` or `KT` address */

$nat:
	int  /* Natural number */


Helpers
.decode()
.default()
.dummy()
.encode()
.to_micheline()
.to_michelson()
```

### getContractFromURL
`getContractFromURL` method is same as `getContractFromFile` method takes a contract from michelson source code available via URL and returns `pytezos.ContractInterface`.

### getContractFromAddress
`getContractFromAddress` method fetches `pytezos.ContractInterface` interface from a given contract address.

![contract](/img/repl-mainnet-getContractFromAddress.png)
![contract storage](/img/repl-mainnet-getContractFromAddress-storage.png)

### compile
Chinstrap repl also has a *compile* function that compiles contracts inside `contracts` folder.

```py
chinstrap:> help(compile)
compile(contract=None, local=False, werror=False, warning=False, entrypoint='main')
```
![compile](/img/repl-compile.png)

### test
Chinstrap repl also has a *test* function that run tests inside `tests` folder.

```py
chinstrap:> help(test)
test(test=None, local=False, entrypoint='main')
```
![test](/img/repl-test.png)

### originate
*Chinstrap repl* provides *originate* method to originate contracts.

```py
chinstrap:> help(originate)
originate(originate=None, number=None, network='development', port=20000, reset=False, show=False, force=False, contract=None, local=False, werror=False, warning=False, entrypoint='main')

chinstrap:> originate()
```
![originate](/img/repl-originate1.png)

```py
chinstrap:> originate(originate="originations/1_samplecontract_origination.py", contract="contracts/MyContract.mligo")
```
![originate](/img/repl-originate2.png)

### template
Chinstrap repl has *template* function that replicates the behaviour of `chinstrap template` command.

```py
chinstrap:> help(template)
template(language=<enum 'TemplateOptions'>)
```
![template](/img/repl-templates.png)

### accounts
Using `accounts` method, you can access list of accounts generated by sandbox.

```py
chinstrap:> accounts()
```

![accounts](/img/repl-accounts.png)

### stopSandbox
You can halt the running local sandbox using this method.

```py
chinstrap:> stopSandbox()
✔ Halted the sandbox
chinstrap:>
```

### install
To install compilers, we can use `install` method.

```py
chinstrap:> install(compiler=<enum 'Compilers'>, local=False, force=False)
```
![install](/img/repl-install.png)


### pytezos
PyTezos library is a Python toolset for Tezos blockchain, including work with keys, signatures, contracts, operations, RPC query builder, and a high-level interface for smart contract interaction.
Documentation for pytezos can be accessed [here](https://pytezos.org/quick_start.html). 

### exit
To exit the repl, you can run `exit` method.

```py
chinstrap:> exit()
```
![exit](/img/repl-exit.png)