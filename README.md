# souhait0614/renovate-config

[![Test](https://github.com/souhait0614/renovate-config/actions/workflows/test.yaml/badge.svg)](https://github.com/souhait0614/renovate-config/actions/workflows/test.yaml)
[![License](https://img.shields.io/github/license/souhait0614/renovate-config?style=flat)](./LICENSE)

[taiyme/renovate-config](https://github.com/taiyme/renovate-config)を自分用にちょっと弄ったRenovate共有プリセットです。

## セットアップ

### `renovate.json` の設定

`renovate.json` を、次のように構成します。

※ 既存の `renovate.json` を変更する場合は、 `renovate/reconfigure` ブランチを作成し、プルリクエストを作成します。

```jsonc
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>souhait0614/renovate-config",
    ":assignAndReview(<your_name_here>)"
  ]
}
```

## ライセンス

[MIT License](./LICENSE)
