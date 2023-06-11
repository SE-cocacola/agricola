### electron 설치

```bash
npm init -y
npm install --save-dev electron
npm install --save-dev electron-builder
```

### package.json 수정

```json
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "dist": "electron-builder"
  },
  "build": {
    "appId": "agicola",
    "win": {
      "target": "nsis"
    }
    "mac": {
      "target": "dmg"
    }
  },
```

### 테스트

```bash
npm run start
```

### 배포

```bash
npm run dist # windows .exe, 테스트 완료
npm run dist --mac # mac .dwg, 테스트 미완료, mac 환경에서만 가능
```