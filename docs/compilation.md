# Compiling smart contracts with *Chinstrap*

*Chinstrap* is mainly used for smart contract compilation, originations and testing. 


```
➜ chinstrap compile -h

      _     _           _
  ___| |__ (_)_ __  ___| |_ _ __ __ _ _ __
 / __| '_ \| | '_ \/ __| __| '__/ _` | '_ \
| (__| | | | | | | \__ \ |_| | | (_| | |_) |
 \___|_| |_|_|_| |_|___/\__|_|  \__,_| .__/
                                     |_|

🐧 Chinstrap - a cute framework for developing Tezos Smart Contracts!
usage: chinstrap compile [-h] [-c CONTRACT] [-l] [-r] [-w] [-e ENTRYPOINT]

optional arguments:
  -h, --help            show this help message and exit
  -c CONTRACT, --contract CONTRACT
                        Contract to compile. If not specified, all the contracts are compiled
  -l, --local           Use compiler from host machine. If not specified, Docker image is used
  -r, --werror          Treat Ligo compiler warnings as errors
  -w, --warning         Display Ligo compiler warnings
  -e ENTRYPOINT, --entrypoint ENTRYPOINT
                        Entrypoint to use when compiling Ligo contracts. Default entrypoint is main
```

To compile the contracts inside `contracts` folder, just run:

```
➜ chinstrap compile 

      _     _           _
  ___| |__ (_)_ __  ___| |_ _ __ __ _ _ __
 / __| '_ \| | '_ \/ __| __| '__/ _` | '_ \
| (__| | | | | | | \__ \ |_| | | (_| | |_) |
 \___|_| |_|_|_| |_|___/\__|_|  \__,_| .__/
                                     |_|

🐧 Chinstrap - a cute framework for developing Tezos Smart Contracts!
✔ SampleContract.py compilation successful!
```

*Chinstrap* picks up the contracts based on the `lang` configured in `chinstrap-config.yml` and compiles with specific compiler. Compiled contracts can be found in `build/contracts/` folder. 

:::info
Chinstrap considers each file inside `contracts` folder as an independent smart contract. Thus, if a smart contract is split into several LIGO files, *Chinstrap* will try to compile each file as a separate smart contract, resulting sometimes in a failed compilation. 

But, *Chinstrap* will manage to compile the right contract using LIGO compiler.
:::

