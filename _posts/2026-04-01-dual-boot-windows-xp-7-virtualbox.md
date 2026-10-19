---
title: "Dual boot de Windows XP y Windows 7 en VirtualBox, paso a paso"
description: "Cómo instalar Windows XP y Windows 7 en un mismo disco virtual y elegir entre ambos al arrancar con el administrador de arranque de Windows."
date: 2026-04-01 10:00:00 -0600
pillar: soporte
youtube: TWxjaXhNSBc
image: /assets/img/posts/dual-boot-windows-xp-7-virtualbox.jpg
---

Un dual boot permite tener dos sistemas operativos en el mismo disco y
elegir cuál iniciar al encender el equipo. En esta guía instalo Windows XP
y Windows 7 en un solo disco virtual de VirtualBox y dejo configurado el
menú para alternar entre ambos.

La clave de todo el proceso es **el orden**: primero el sistema más antiguo,
después el más nuevo.

## Lo que necesitas

- **VirtualBox:** [virtualbox.org](https://www.virtualbox.org/).
- **Windows XP.** La imagen que uso en el video:
  [Internet Archive, Windows XP](https://archive.org/details/MicrosoftWindowsXP).
- **Windows 7,** con su propia licencia.

> Windows XP y Windows 7 son software de Microsoft. Internet Archive conserva
> software antiguo; el enlace se incluye con fines educativos. Para activar
> cualquiera de los dos se necesita una licencia válida.

## 1. Crear la máquina virtual

Una sola máquina virtual con un solo disco, que se repartirá entre los dos
sistemas. Dale al disco espacio suficiente para ambos y, como mínimo, la
memoria que pide Windows 7: 1 GB según los requisitos oficiales de Microsoft.

## 2. Instalar Windows XP en la primera partición

Arranca desde la imagen de Windows XP. Cuando el instalador muestre el
disco, **no uses todo el espacio**: crea una partición solo con una parte
del disco (por ejemplo, la mitad) y deja el resto **sin particionar**.
Instala Windows XP en esa primera partición y completa la instalación.

## 3. Instalar Windows 7 en el espacio libre

Cambia la imagen de la unidad óptica por la de Windows 7 y arranca desde
ella. Elige la instalación **personalizada** y selecciona el **espacio no
asignado** que quedó libre. Windows XP no se toca.

## 4. El administrador de arranque

Al terminar, Windows 7 instala su propio administrador de arranque, que
detecta la instalación anterior. Al encender la máquina virtual aparece el
menú:

```
Admin. de arranque de Windows

  Versión anterior de Windows
  Windows 7
```

**Versión anterior de Windows** es Windows XP. Si no eliges nada, arranca
la opción resaltada cuando termina la cuenta regresiva.

## Por qué el orden importa

Cada versión de Windows instala su propio cargador de arranque. El de
Windows 7 reconoce las versiones anteriores y las agrega al menú; el de
Windows XP no conoce a Windows 7. Si se instalara XP después, su cargador
reemplazaría al de Windows 7 y este dejaría de arrancar hasta reparar el
arranque. Instalar primero el sistema más antiguo evita el problema.
