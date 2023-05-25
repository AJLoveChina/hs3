## hs3 

Create a daemon http server by one command.

A tool to create daemon http/https static files server

### Key features
1. running background
2. auto restart service after linux/windows reboot
3. very fast, no hack, easy to use, just works!

### How to use
```shell
npm install -g hs3

# move to the directory which you want to serve as static files 
hs3
```

### Custom config
If you want custom configuration,  create a `hs3.config.json` in the same directory.

Content example
```json
{
  "port": 3000,
  "cert": "./relative-path-to-cert-file",
  "key": "./relative-path-to-key-file"
}
```

| keyname   | Description                                                                              |
|-----------|------------------------------------------------------------------------------------------|
| port      | the port you want to use                                                                 |
| cert, key | If you set both cert and key file path, then will serve with https, else serve with http |



If you don't create the json file, the default config is
```json
{
  "port": 3000
}
```


### How to restart service after linux/windows reboot
`hs3` use `pm2` to run as background task. So type following scripts to enable `restart after reboot`
```shell
#skip this step if you already installed pm2
npm install -g pm2

# restart after reboot
pm2 startup
pm2 save
```


### Related link
- https://github.com/AJLoveChina/hs2 - 💪a command-line http server with auto-generated ssl cert (支持自动生成ssl证书的http-server, 兼容所有功能)
