---
title: "Cómo instalar Windows 95 en VirtualBox, paso a paso"
description: "Instalación de Windows 95 desde cero en VirtualBox: configuración de la máquina virtual, disquete de arranque, particionado y el parche para procesadores modernos."
date: 2026-04-07 10:00:00 -0600
pillar: soporte
youtube: p8FU7W_AOGI
image: /assets/img/posts/windows-95-virtualbox.jpg
---

Windows 95 no se instala como un sistema actual: el CD no arranca por sí
solo, el disco duro hay que particionarlo y formatearlo a mano, y en un
procesador moderno el sistema falla al iniciar si no se aplica un parche.
En esta guía documento el proceso completo que sigo en el video.

<!-- REVISAR: ajusta este párrafo a lo que tú quieras contar del video. -->

## Lo que necesitas

- **VirtualBox** instalado.
- **Una imagen ISO de Windows 95.**
- **Un disquete de arranque** (imagen `.img`) con controladores de CD-ROM,
  porque el CD de Windows 95 no es arrancable.
- **El parche para procesadores rápidos** (FIX95CPU), necesario en equipos
  actuales.

<!-- REVISAR: enlaces de descarga. Ver la nota sobre WinWorld en el chat. -->

## 1. Crear la máquina virtual

En VirtualBox, **Nueva**, y en tipo de sistema elige **Microsoft Windows →
Windows 95**. Con eso VirtualBox propone valores adecuados para la época.

| Parámetro | Valor |
|---|---|
| Memoria RAM | 64 MB <!-- REVISAR --> |
| Disco duro | 2 GB, VDI <!-- REVISAR --> |
| Red | PCnet-FAST III (NAT) |

<!-- REVISAR: confirma la RAM y el disco que usaste en el video. -->

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

Cambia a la unidad del CD y lanza el instalador:

```
A:\> D:
D:\> SETUP
```

<!-- REVISAR: confirma la letra de la unidad de CD que asignó el disquete. -->

A partir de aquí la instalación es gráfica: aceptar la licencia, elegir
componentes, introducir la clave del producto y crear el disco de arranque
(puedes omitirlo).

## 5. Aplicar el parche para procesadores modernos

Windows 95 se escribió para procesadores de cientos de megahercios. En un
procesador actual, una rutina de temporización falla y el sistema se
detiene al iniciar con un **error de protección de Windows**. El parche
FIX95CPU corrige ese cálculo.

<!-- REVISAR: explica en qué momento lo aplicaste (antes del primer
     arranque o después del error) y cómo. -->

## Resultado

Con el parche aplicado, Windows 95 arranca normalmente en VirtualBox y queda
listo para usarse.

Este video es parte de la serie de instalación de sistemas operativos en
VirtualBox. Las instalaciones de MS-DOS 6.22 y Windows 3.1 tendrán su
propia guía aquí mismo.
