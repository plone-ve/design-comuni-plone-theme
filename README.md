# Tema di Plone per la Pubblica Amministrazione

[io-Comune](https://www.io-comune.it/) è il tema Volto per il CMS [Plone](https://plone.org/) che rispetta le indicazioni [Linee guida di design per i servizi digitali della PA](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/it/stabile/index.html) usando [bootstrap-italia](https://italia.github.io/bootstrap-italia/).

E' basato sulle linee guida versione 2020.1 e questo tema estende il tema base di Volto [design.plone.theme](https://github.com/italia/design.plone.theme/).

io-Comune non è solo un tema grafico ma gestisce e implementa anche tutte le tipologia di contenuto (Content Type) delle linee guida: di fatto consente la realizzazione di un sito istituzionale di un Comune (ma anche di altri tipi di Enti) conforme alle linee guida di design.

Il sistema implementa anche un tipo di contenuto ad hoc per la gestione di sottositi, in linee con le indicazioni generali.

Si veda ad esempio:
[Comune di Modena: Informagiovani](https://www.comune.modena.it/informagiovani)

## Esempi di siti che usano questo tema/sistema

- [ASP Comuni Modenesi Area Nord](https://www.aspareanord.it/)
- [Azienda Ospedaliero-Universitaria di Ferrara](https://www.ospfe.it/)
- [Azienda USL di Ferrara](https://www.ausl.fe.it/)
- [Azienda USL di Piacenza](https://www.ausl.pc.it/)
- [Biblioteche Pianura Est](https://bibest.it)
- [Camera di Commercio dell'Umbria](https://www.umbria.camcom.it/)
- [Camera di Commercio di Reggio Emilia](https://www.re.camcom.gov.it/)
- [Comune di Bibbiano](https://www.comune.bibbiano.re.it/)
- [Comune di Campegine](https://www.comune.campegine.re.it/)
- [Comune di Camposanto](https://www.comune.camposanto.mo.it/)
- [Comune di Canossa](https://www.comune.canossa.re.it/)
- [Comune di Cantagallo](https://www.comune.cantagallo.po.it/)
- [Comune di Imola](https://www.comune.imola.bo.it)
- [Comune di Medolla](https://www.comune.medolla.mo.it/)
- [Comune di Mirandola](https://www.comune.mirandola.mo.it/)
- [Comune di Modena](https://www.comune.modena.it/)
- [Comune di Montecchio Emilia](https://www.comune.montecchio-emilia.re.it/)
- [Comune di Novellara](https://www.comune.novellara.re.it/)
- [Comune di Parma](https://www.comune.parma.it/)
- [Comune di Piacenza](https://www.comune.piacenza.it/)
- [Comune di Reggio Emilia](https://www.comune.re.it/)
- [Comune di San Lazzaro di Savena](https://www.comune.sanlazzaro.bo.it)
- [Comune di San Polo d'Enza](https://www.comune.sanpolodenza.re.it/)
- [Comune di San Possidonio](https://www.comune.sanpossidonio.mo.it/)
- [Comune di Santilario d'Enza](https://www.comune.santilariodenza.re.it/)
- [Comune di Vaiano](https://www.comune.vaiano.po.it/)
- [Comune di Vernio](https://www.comune.vernio.po.it/)
- [Comando Generale della Guardia di Finanza](https://www.gdf.gov.it/it)
- [NNB Ispra Ambiente](https://www.nnb.isprambiente.it)
- [Nuovo Circondario Imolese](https://www.nuovocircondarioimolese.it)
- [Ospedali Galliera - Bilancio Sociale](https://bilanciosociale.galliera.it)
- [Provincia di Pisa](https://www.provincia.pisa.it/)
- [UCMAN (Unione dei Comuni Modenesi Area Nord)](https://www.unioneareanord.mo.it/)
- [Unione Val d'Enza](https://www.unionevaldenza.it/)
- [Unione Val di Bisenzio](https://www.bisenzio.it/)

## Documentazione tecnica (in inglese)

A training on how to create your own website using Volto is available as part of the Plone training at [https://training.plone.org/volto/index.html](https://training.plone.org/volto/index.html).

## Quick Start

Below is a list of commands you will probably find useful.

### `yarn install`

Installs dependencies with [yarn](https://yarnpkg.com/).
If you are not installing new dependencies (after updating the package.json file), you may want to use `yarn install --immutable` instead to be sure the versions are the correct ones.

### `yarn start`

Runs the project in development mode.
You can view your application at `http://localhost:3000`

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the build folder.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `yarn start:prod`

Runs the compiled app in production.

You can again view your application at `http://localhost:3000`

### `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `yarn i18n`

Runs the test i18n runner which extracts all the translation strings and
generates the needed files.

## Release

It is all configured for [release-it](https://github.com/release-it/release-it) and uses conventional changelog (see [COMMITLINT.md](./COMMITLINT.md)).
To run a release, just run:

```bash
yarn release-it
```

if you want to check the configuration, it is in [.release-it.json](./.release-it.json).

By default it will use the commits type and scope to determine the version following semantic versioning rules, but if you want to set a different version, you can add to the release command the version step: major, minor or step.
For example:

```bash
yarn release-it -- major
```
