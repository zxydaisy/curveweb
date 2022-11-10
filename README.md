# Curve

Curve, a New CNCF Sandbox Project, a Cloud-Native distributed storage system.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

### I18n

```
 yarn write-translations

```