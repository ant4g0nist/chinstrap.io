# *Chinstrap* installation

## Requirements and dependencies

* Python >= 3.7
* Docker
* Node.js
* [Homebrew](https://brew.sh/) needs to be installed.

Open a terminal and run:

```
➜ brew tap cuber/homebrew-libsecp256k1
➜ brew install libsodium libsecp256k1 gmp
```

To install *Chinstrap* v1.0.1 from Github, open a terminal and run:
```
➜ git clone https://github.com/ant4g0nist/chinstrap/ -b v1.0.1
➜ cd chinstrap
➜ pip3 install . -U
```

#### M1 (ARM)
In case `secp256k1` or `gmp` cannot find either include or lib paths, try explicitly set environment vars:

```
export CFLAGS="-I`brew --prefix gmp`/include -I`brew --prefix libsecp256k1`/include"
export LDFLAGS="-L`brew --prefix gmp`/lib -L`brew --prefix libsecp256k1`/lib"
pip3 install . -U 
```

or follow instructions from [pytezos](https://github.com/baking-bad/pytezos/blob/master/README.md?plain=1#L63)

For more info, you can refer to the [official documentation](https://chinstrap.io)
