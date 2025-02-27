---
title: Benutzerskripte
sidebar_position: 5
toc_max_heading_level: 4
---

Userscripts (we also call them "extensions") are, de-facto, mini-programs written in JavaScript. Sie ändern oder erweitern die Funktionalität einer oder mehrerer Websites. Many AdGuard users may be already familiar with such userscripts as AdGuard Assistant, Popup Blocker, and AdGuard Extra.

:::note Unterstützte Apps

AdGuard can significantly broaden website functionality by acting as a userscript manager. You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/features/extensions), [AdGuard for Android](/adguard-for-android/features/settings#userscripts), and [AdGuard for Mac](/adguard-for-mac/features/extensions).

:::

## Empfohlene AdGuard-Skripte

Diese Benutzerskripte stammen direkt von AdGuard und wir können garantieren, dass sie effektiv und sicher sind. Bedenken Sie: Jedes Mal, wenn Sie ein Benutzerskript von einer unbekannten Quelle herunterladen, setzen Sie sich einem Risiko aus, da einige Skripte für Ihren Computer schädlich sein können. Beziehen Sie neue Skripte nur aus Quellen, denen Sie zu 100% vertrauen. Furthermore, here are [some examples](#more-userscripts) of popular sites with scripts.

### AdGuard Extra

Eine Erweiterung, die Werbung in schwierigen Fällen blockiert, wenn der übliche filterbasierte Ansatz nicht ausreicht. AdGuard Extra ist bei allen Premium-Versionen von AdGuard vorinstalliert, Sie müssen also nichts tun, um es zu aktivieren. Wenn Sie es jedoch zusammen mit AdGuard Browsererweiterung oder einem anderen Werbeblocker verwenden möchten, müssen Sie eine zusätzliche Erweiterung verwenden. Auf [GitHub](https://github.com/AdguardTeam/AdGuardExtra) erfahren Sie mehr über dieses Benutzerskript und wie man es installiert.

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### AdGuard Pop-up-Blocker

Der Name spricht für sich selbst: Es blockiert Pop-ups, eine der lästigsten Arten von Werbung auf Websites. Auf [GitHub](https://github.com/AdguardTeam/PopupBlocker) erfahren Sie mehr über dieses Benutzerskript, seine wichtigsten Funktionen und wie man es installiert.

![AdGuard Pop-up-Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### AdGuard-Assistent (alte Version)

Diese benutzerdefinierte Erweiterung wurde entwickelt, um die Filterung direkt von der Browserseite aus zu steuern (manuelles Sperren, Ausschluss der Website usw.).

:::note

Diese Version des Assistenten ist veraltet und macht auf neuen Systemen keinen Sinn mehr. Sie wurde durch den vollwertigen [Browser-Assistenten](https://adguard.com/adguard-assistant/overview.html) ersetzt. Der Legacy-Assistent kann jedoch hilfreich sein, wenn es für Ihren Browser keinen Browser-Assistenten gibt. Wenn dies bei Ihnen der Fall ist, können Sie auf [GitHub](https://github.com/AdguardTeam/AdguardAssistant) erfahren, wie Sie den AdGuard-Assistenten installieren.

:::

### AMP deaktivieren

Ein Skript, das nur in AdGuard für Android vorinstalliert ist. Es deaktiviert AMP (Accelerated Mobile Pages) auf der Google-Suchergebnisseite. Auf [GitHub](https://github.com/AdguardTeam/DisableAMP) erfahren Sie mehr über dieses Benutzerskript und wie man es installiert.

![AMP deaktivieren](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### microShield

Ein Benutzerskript für Leute, die koreanische und einige internationale Websites besuchen. Das microShield-Benutzerskript blockiert Ad-Shield-Werbung und Anti-Adblock. Der ursprüngliche Quellcode ist unter [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) und [AdShield Defuser](https://github.com/seia-soto/adshield-defuser) verfügbar. Dieses Benutzerskript kann in AdGuard CoreLibs-basierten Anwendungen, Violentmonkey, Tampermonkey und [quoid/userscripts](https://github.com/quoid/userscripts) installiert werden. Auf [GitHub](https://github.com/List-KR/microShield) finden Sie weitere Informationen über microShield und wie man es installiert.

## Wo kann man weitere Benutzerskripte erhalten? {#more-userscripts}

Da Benutzerskripte hauptsächlich von Enthusiasten erstellt werden, sollten Sie bei deren Installation vorsichtig sein. Es gibt jedoch eine Vielzahl interessanter Skripte, die die Nutzung einiger Websites wirklich bequemer machen können.

Im Folgenden werden einige der beliebtesten Benutzerskript-Kataloge beschrieben.

### Stylish (userstyles.org)

[Userstyles.org](https://userstyles.org/) ist ein Katalog von Benutzerstilen, der es Ihnen jedoch ermöglicht, diese als Benutzerskripte zu laden. So kann jeder Benutzerstil über AdGuard installiert werden. Seien Sie vorsichtig, wenn Sie sich entscheiden, ein unbekanntes Skript zu installieren — es könnte schädlich sein.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) ist ein Benutzerskript-Katalog der Entwickler von Stylish. Im Gegensatz zu userstyles.org sind die Skripte in diesem Katalog moderiert, was ihre Glaubwürdigkeit erhöht.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) is an open source userscript catalog written in nodeJS. Da es keine Moderation gibt, sollten Sie auf verdächtige Skripte achten.

### Community

Wenn Ihnen die Idee gefällt, Ihren Browser mit Hilfe von Benutzerskripten zu personifizieren, und Sie Fragen haben, können Sie diese auf einer dieser Websites stellen:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## Entwicklung

### Lizenz anfordern

Wenn Sie Ihr eigenes benutzerdefiniertes Skript entwickeln und testen möchten, wie es mit AdGuard funktioniert, können Sie einen Beta-Lizenzschlüssel für die App anfordern.

Um sie zu erhalten, senden Sie bitte eine E-Mail an devteam@adguard.com mit den folgenden Informationen:

**Betreff:** Userscript author license request

**Body:** Please tell us about the userscripts you are working on.

Hier ist ein [Mailto-Link](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

### Kompatibilität

#### Metadaten-Block

##### Unterstützte Eigenschaften

```text
@name
@namespace
@description
@version
@match
@include
@exclude
@grant
@connect
@require
@resource
@downloadURL
@updateURL
@supportURL
@homepageURL
@homepage
@website
@source
@run-at
@noframes
@icon
@iconURL
@defaulticon
@icon64
@icon64URL
```

##### Nicht unterstützte Eigenschaften

These properties will be simply ignored by Adguard.

```text
@unwrap
```

#### Unterstützte GM-Funktionen

AdGuard unterstützt sowohl die alten GM\_-Funktionen als auch die neue GM4-API, die das GM-Objekt verwendet.

##### Werte

:::note

Alle aufgeführten früheren Greasemonkey-Funktionen sind veraltet, werden aber weiterhin unterstützt.

:::

```text
GM.info / GM_info
GM.setValue / GM_setValue
GM.getValue / GM_getValue
GM.listValues / GM_listValues
GM.deleteValue / GM_deleteValue
GM.getResourceUrl / GM_getResourceURL
GM.setClipboard / GM_setClipboard
GM.xmlHttpRequest / GM_xmlhttpRequest
GM.openInTab / GM_openInTab
GM.notification
unsafeWindow
GM_getResourceText
GM_addStyle
GM_log
```

[Hier](https://wiki.greasespot.net/GM.info) finden Sie weitere Informationen zur Greasemonkey API.

### Beispiel

```javascript
// ==Benutzerskript==
// @name            Name, wie er dem Benutzer angezeigt wird, wenn das Gebietsschema Englisch oder unbekannt ist
// @name:ru         Name, wie er dem Benutzer angezeigt wird, wenn das Gebietsschema russisch ist
// @description     Beschreibung, wie sie dem Benutzer angezeigt wird, wenn das Gebietsschema englisch oder unbekannt ist
// @description:ru  Beschreibung, wie sie dem Benutzer angezeigt wird, wenn das Gebietsschema russisch ist
// @icon            https://myhomepage.com/myuserscript.png
// @version         1.0.0.0
// @downloadURL     https://dl.myhomepage.org/myuserscript.user.js
// @updateURL       https://dl.myhomepage.org/myuserscript.meta.js
// @homepageURL     https://myhomepage.com/myuserscript
// @include         *
// @exclude         *://website.com/*
// @resource        https://myhomepage.com/myuserscript.css
// @require         https://myhomepage.com/mylibrary.js
// @grant           property:settings
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_listValues
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @grant           GM_addStyle
// @grant           GM_log
// @grant           GM_setClipboard
// @grant           GM_xmlhttpRequest
// @grant           unsafeWindow
// @grant           GM_info
// @grant           GM_openInTab
// @grant           GM_registerMenuCommand
// @run-at document-start
// ==/UserScript==
!function(){(
    console.log("I am loaded!");
)}();
```
