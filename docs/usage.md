# Usage

You can get list of sub-commands supported by Chinstrap by running:

```
➜ chinstrap -h
      _     _           _
  ___| |__ (_)_ __  ___| |_ _ __ __ _ _ __
 / __| '_ \| | '_ \/ __| __| '__/ _` | '_ \
| (__| | | | | | | \__ \ |_| | | (_| | |_) |
 \___|_| |_|_|_| |_|___/\__|_|  \__,_| .__/
                                     |_|

🐧 Chinstrap - a cute framework for developing Tezos Smart Contracts!
usage: chinstrap [-h]
                 {init,config,networks,compile,install,create,templates,test,sandbox,develop,originate,account}
                 ...

positional arguments:
  {init,config,networks,compile,install,create,templates,test,sandbox,develop,originate,account}
    init                Initialize a new Chinstrap project
    config              Verify Chinstrap configuration
    networks            List currently available test networks
    compile             Compile contract source files
    install             Helper to install compilers
    create              Helper to create new contracts, originations
                        and tests
    templates           Download templates provided by SmartPy and
                        *LIGO
    test                Run pytest/smartpy/ligo tests
    sandbox             Start a Tezos local sandbox
    develop             Open an interactive console for Tezos
    originate           Run originations and deploy contracts
    account             Tezos account

optional arguments:
  -h, --help            show this help message and exit
```

Chinstrap provides the option to install the compilers to local machines or in Docker. By default, Chinstrap prefers to use Docker images to keep the local system clean.

```
➜ chinstrap install -h

      _     _           _
  ___| |__ (_)_ __  ___| |_ _ __ __ _ _ __
 / __| '_ \| | '_ \/ __| __| '__/ _` | '_ \
| (__| | | | | | | \__ \ |_| | | (_| | |_) |
 \___|_| |_|_|_| |_|___/\__|_|  \__,_| .__/
                                     |_|

🐧 Chinstrap - a cute framework for developing Tezos Smart Contracts!
usage: chinstrap install [-h] [-f] [-l] [-c {all,smartpy,ligo}]

optional arguments:
  -h, --help            show this help message and exit
  -f, --force           Force update compilers
  -l, --local           Install on local machine. If not specified, Docker is used
  -c {all,smartpy,ligo}, --compiler {all,smartpy,ligo}
                        Installs selected compilers
```
Please make sure Docker is running before running `chinstrap install`

```
➜ chinstrap install

      _     _           _
  ___| |__ (_)_ __  ___| |_ _ __ __ _ _ __
 / __| '_ \| | '_ \/ __| __| '__/ _` | '_ \
| (__| | | | | | | \__ \ |_| | | (_| | |_) |
 \___|_| |_|_|_| |_|___/\__|_|  \__,_| .__/
                                     |_|

🐧 Chinstrap - a cute framework for developing Tezos Smart Contracts!
🎉 Ligo installed
🎉 SmartPy installed
```

Chinstrap provides a sub-command to initialize flextesa sandbox for local development.

```
➜ chinstrap sandbox -i

      _     _           _
  ___| |__ (_)_ __  ___| |_ _ __ __ _ _ __
 / __| '_ \| | '_ \/ __| __| '__/ _` | '_ \
| (__| | | | | | | \__ \ |_| | | (_| | |_) |
 \___|_| |_|_|_| |_|___/\__|_|  \__,_| .__/
                                     |_|

🐧 Chinstrap - a cute framework for developing Tezos Smart Contracts!
✔ Flextesa sandbox ready to use
```

## Initializing a *Chinstrap* project
Chinstrap provides a sub-command to initialize a new Chinstrap project.

```
➜ mkdir tezos-example
➜ cd tezos-example
➜ chinstrap init

      _     _           _
  ___| |__ (_)_ __  ___| |_ _ __ __ _ _ __
 / __| '_ \| | '_ \/ __| __| '__/ _` | '_ \
| (__| | | | | | | \__ \ |_| | | (_| | |_) |
 \___|_| |_|_|_| |_|___/\__|_|  \__,_| .__/
                                     |_|

🐧 Chinstrap - a cute framework for developing Tezos Smart Contracts!
Done. Happy coding 🐧
```

### Project Structure overview

```
➜ tree
.
├── chinstrap-config.yml
├── contracts
│   └── SampleContract.py
├── originations
│   └── 1_samplecontract_origination.py
└── tests
    ├── sampleContractSmartPy.py
    └── samplecontractPytest.py

3 directories, 5 files
```

* **contracts**: the folder containing all the LIGO/SmartPy smart contracts that *Chinstrap* has to compile.
* **originations**: the folder containing the *Chinstrap* origination/deployment scripts for the deployment of the contracts.
* **test**: the folder containing Javascript tests
* **chinstrap-config.yaml**: the configuration file which defines networks and accounts to be used for the deployment.

## Configuring *Chinstrap*

*Chinstrap* configuration file is a yaml file, that tells chinstrap, which account and network to use for origination, which compiler to use for compilation and testing.

A minimal configuration file looks like this:

```
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

The above configuration file tells *Chinstrap* that we are building contracts using SmartPy, and we are writing tests in SmartPy. It also specifies `development` as the network to use and specifies the privateKeyFile to use to originate.

### Configuring *Chinstrap* compiler
Supported options for `lang`:
- *smartpy*
- *cameligo*
- *pascaligo*
- *reasonligo*
- *jsligo*

Supported options for `test`:
- *smartpy*
- *pytest*
- *smartpy*
- *cameligo*
- *pascaligo*
- *reasonligo*
- *jsligo*

### Configuring *Chinstrap* network

The network configuration in *Chinstrap* is added under the `network` option. Some networks are already defined: _hangzhounet_, _ithacanet_, _mainnet_, and _development_. However, as the Tezos protocol constantly evolving, new networks will have to be added to the configuration.

Each network requires:
* **host**: An RPC node ([https://tezostaquito.io/docs/rpc_nodes/](https://tezostaquito.io/docs/rpc_nodes/)) or a local node (as shown in the development network).
* **accounts**: A lsit of files that contains private key of accounts to be used for origination. First account from the list is used for originations.

```➜ cat chinstrap-config.yml 
chinstrap:
# Networks define how Chinstrap connect to Tezos.
  network:
    development:
      host: http://localhost:20000

      # You need to configure accounts with private key,
      # to sign your transactions before they're sent to a remote public node
      accounts:
        - privateKeyFile: ./.secret

    # hangzhounet:
    #   host: https://hangzhounet.smartpy.io:443
    #   accounts:
    #     - privateKeyFile: ./.secret

    # ithacanet:
    #   host: https://ithacanet.smartpy.io:443
    #   accounts:
    #     - privateKeyFile: ./.secret

    # mainnet:
    #   host: https://mainnet.smartpy.io:443
    #   accounts:
    #     - privateKeyFile: ./.secret

  compiler:
    # Compiler configuration
    # lang: smartpy, cameligo, pascaligo, reasonligo, jsligo
    lang: smartpy

    # test: smartpy, pytest, smartpy, cameligo, pascaligo, reasonligo, jsligo
    test: smartpy
```
