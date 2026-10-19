---
title: "Cómo instalar Windows 95 en VirtualBox, paso a paso"
description: "Instalación de Windows 95 desde cero en VirtualBox: configuración de la máquina virtual, disquete de arranque, particionado y el parche para procesadores modernos."
date: 2026-04-07 11:00:00 -0600
pillar: soporte
youtube: p8FU7W_AOGI
image: /assets/img/posts/windows-95-virtualbox.jpg
---

Windows 95 no se instala como un sistema actual: el CD no arranca por sí
solo, el disco duro hay que particionarlo y formatearlo a mano, y en un
procesador moderno el sistema falla al iniciar si no se aplica un parche.

Antes de grabar el video ya había hecho esta instalación una vez, así que
sabía en qué puntos falla. Esta guía documenta el proceso completo paso a
paso, incluidos esos errores y cómo resolverlos.

## Lo que necesitas

- **VirtualBox** instalado.
- **Una imagen ISO de Windows 95.** La que uso en el video:
  [WinWorld, Windows 95](https://winworldpc.com/download/df61214c-cca9-11e7-a73f-fa163e9022f0).
- **Un disquete de arranque** (imagen `.img`) con controladores de CD-ROM,
  porque el CD de Windows 95 no es arrancable:
  [WinWorld, disquete de arranque](https://winworldpc.com/download/db57f85a-f039-11e7-a562-fa163e9022f0).
- **El parche para procesadores rápidos** (FIX95CPU), necesario en equipos
  actuales: [FIX95CPU](https://lonecrusader.x10host.com/fix95cpu.html).

> Windows 95 sigue siendo software de Microsoft. WinWorld es un archivo de
> software antiguo; los enlaces se incluyen con fines educativos.

## 1. Crear la máquina virtual

En VirtualBox, **Nueva**, y en tipo de sistema elige **Microsoft Windows →
Windows 95**. Con eso VirtualBox propone valores adecuados para la época.

| Parámetro | Valor |
|---|---|
| Memoria RAM | 64 MB |
| Disco duro | 2 GB |
| Red | PCnet-FAST III (NAT) |

## 2. Arrancar desde el disquete

Monta la imagen del disquete en la unidad de disquete de la máquina virtual
y la ISO de Windows 95 en la unidad óptica. Al encender, la máquina arranca
desde el disquete y carga los controladores del CD-ROM.

## 3. Particionar y formatear el disco

El disco virtual está vacío: hay que crear la partición y darle formato
desde MS-DOS.

```
A:\> FDISK
```

Crea una **partición primaria de DOS** que ocupe todo el disco y reinicia
la máquina virtual (de nuevo desde el disquete). Después, formatea:

```
A:\> FORMAT C:
```

## 4. Ejecutar la instalación

Cambia a la unidad del CD y lanza el instalador. Al arrancar, el disquete
indica qué letra asignó al CD-ROM; normalmente es `D:`.

```
A:\> D:
D:\> SETUP
```

A partir de aquí la instalación es gráfica: aceptar la licencia, elegir
componentes, introducir la clave del producto y crear el disco de arranque
(puedes omitirlo).

## 5. Aplicar el parche para procesadores modernos

Windows 95 se escribió para procesadores de cientos de megahercios. En un
procesador actual, una rutina de temporización falla y el sistema se
detiene con un **error de protección de Windows**.

El error aparece en el primer arranque, al terminar la instalación. En ese
momento se aplica el parche FIX95CPU, que corrige ese cálculo; en el video
muestro el proceso completo.

## Resultado

Con el parche aplicado, Windows 95 arranca normalmente en VirtualBox y queda
listo para usarse.

Este video es parte de la serie de instalación de sistemas operativos en
VirtualBox. Las guías anteriores cubren
[MS-DOS 6.22]({{ '/msdos-622-virtualbox/' | relative_url }}) y
[Windows 3.1]({{ '/windows-31-virtualbox/' | relative_url }}).
