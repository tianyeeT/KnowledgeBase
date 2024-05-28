---
title: DNS
sidebar_position: 4
---

:::info

Este artículo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Protección DNS

La sección _DNS_ contiene una función, _Protección DNS_, con múltiples ajustes:

- Proveedores
- Filtros
- Lista de bloqueo
- Lista de permitido

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/dns.png)

Si activas la _Protección DNS_, el tráfico DNS será gestionado por AdGuard.

### Proveedores

Under _Providers_, you can select a DNS server to encrypt your DNS traffic and block ads and trackers if necessary. We recommend AdGuard DNS. For more advanced configuration, you can [set up a private AdGuard DNS server](https://adguard-dns.io/welcome.html) or add a custom one by clicking the `+` icon in the lower left corner.

### Filtros

DNS filters apply ad-blocking rules at the DNS level. Such filtering is less precise than regular ad blocking, but it’s particularly useful for blocking an entire domain. To add a DNS filter, click `+`. You can find more DNS filters at [filterlists.com](https://filterlists.com/).

### Lista de bloqueo

Domains from this list will be blocked. To add a domain, click `+`. You can add domain names or DNS filtering rules using a [special syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/).

To export or import a blocklist, open the context menu.

### Lista de permitido

Domains from this list aren’t filtered. To add a domain, click `+`. To export or import an allowlist, open the context menu.
