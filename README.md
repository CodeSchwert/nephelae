# The Nephelae

Demigods Unchained NFT data.

Used for a demo marketplace on the Immutable X platform.

## DB JSON

NFT data can be found in `db.json`.

## Usage

Use the free hosted JSON server to access the NFT data.

```bash
# get all NFTs
curl https://my-json-server.typicode.com/codeSchwert/nephelae/zk

# get a specific NFT
curl https://my-json-server.typicode.com/codeSchwert/nephelae/zk/1
```

## zkEVM and Stark X API

There are 2 versions of the NFT data:
- `zk` - Metadata is represented using the OpenSea standard
- `stark` - Metadata is represented using the Stark X metadata standard

Each version of the NFT data can be accessed using the following endpoints:

```bash
# zkEVM version
curl https://my-json-server.typicode.com/codeSchwert/nephelae/zk

# Stark X version
curl https://my-json-server.typicode.com/codeSchwert/nephelae/x
```
