---
title: ファイアウォール
sidebar_position: 1
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Android」について書いています。 デバイス全体を保護するこのアプリは[こちらからダウンロード](https://agrd.io/download-kb-adblock)できます。

:::

この機能は、「AdGuardによる保護」タブ（画面下部バーメニューで左から2番目の盾アイコン） → 「ファイアウォール」にあります。

「ファイアウォール」機能は、デバイスにインストールされているアプリごとやデバイス全体のインターネットアクセスを管理するのに役立つツールです。

![ファイアウォール \*mobile\_border](https://cdn.adtidy.org/blog/new/i5y7stempFileForShare_20230614-170512.png)

### グローバルファイアウォールルール

このセクションでは、デバイス全体のインターネットアクセスを制御できます。

![グローバル ファイアウォール ルール \*mobile\_border](https://cdn.adtidy.org/blog/new/xa46aScreenshot_20230706-142041_AdGuard.jpg)

これらのルールは、デバイス上のすべてのアプリに適用されます（※特定のアプリなどに対してカスタムファイアウォールルールが設定されている場合は、そのアプリに対してはカスタムルールが優先されます）。

### カスタムファイアウォールルール

このセクションでは、アプリごとのインターネットアクセスを制御することができます。カスタムファイアウォールルールを使って、信頼できないと思われるアプリやデータ通信量を抑えたいアプリのアクセス権限を制限したり、グローバルファイアウォールルールの対象からアプリを除外したりすることができます。

1. 「カスタムファイアウォールルール」を開きます。 「カスタムルールがあるアプリ」の下で、「＋ アプリを追加する」をタップします。

   ![カスタム ファイアウォール ルール \*mobile\_border](https://cdn.adtidy.org/blog/new/blce3Screenshot_20230706-150816_AdGuard.jpg)

2. 個別のルールを設定したいアプリを選択します。

   ![カスタム ファイアウォール ルールにアプリを追加 \*mobile\_border](https://cdn.adtidy.org/blog/new/3k7kaScreenshot_20230706-150855_AdGuard.jpg)

3. 「利用可能なカスタムルール」で、追加したいルールを選んでタップします。 そうすると、「適用されているカスタムルール」にルールが表示されます。

   ![追加されたルール \*mobile\_border](https://cdn.adtidy.org/blog/new/b4cupScreenshot_20230706-151426_AdGuard.jpg)

4. アプリに対して、特定の種類の通信をブロックする必要がある場合は、スイッチを左に切り替えてください（スイッチが赤色の状態）。 その通信を許可したい場合は、スイッチを有効（緑色）のままにしてください。 **※カスタムファイアウォールルールはグローバルファイアウォールルールよりも優先されます**。グローバルファイアウォールルールを変更したりしても、カスタムルールのあるアプリには影響しません。

カスタムファイアウォールルールからルールやアプリを削除するには、ルールやアプリを左にスワイプしてください。

### Notifications

If enabled, this feature notifies you when an app tries to break one of the Firewall rules set for that app (for example, to access mobile data when it shouldn’t). You can turn notifications on and off for all apps or for each app separately.

Tap the notification to access the app’s Firewall settings, or temporary disable all Firewall rules for that app by tapping the corresponding button in the notification. You can also mute all Firewall notifications for the app by tapping the _Mute_ button in the notification for that app.

Note that if notifications for multiple apps would be displayed, they will be bundled into a single notification instead.
