---
title: "Cómo instalar MS-DOS 6.22 en VirtualBox, paso a paso"
description: "Instalación de MS-DOS 6.22 desde cero en VirtualBox: la máquina virtual, los disquetes de instalación y el asistente hasta llegar al indicador C:\\>."
date: 2026-04-07 09:00:00 -0600
pillar: soporte
youtube: hkME2IPI4zs
image: /assets/img/posts/msdos-622-virtualbox.jpg
---

MS-DOS 6.22 fue la última versión independiente de MS-DOS y la base sobre
la que corrían Windows 3.1 y muchos programas de la época. Instalarlo en
VirtualBox es el primer paso de esta serie: sin DOS no hay Windows 3.1.
En esta guía documento el proceso completo que sigo en el video.

## Lo que necesitas

- **VirtualBox** instalado.
- **Las imágenes de instalación de MS-DOS 6.22.** Las que uso en el video,
  con controlador de CD-ROM incluido:
  [Internet Archive, MS-DOS 6.22](https://archive.org/details/ms-dos-6.22-with-cd-rom-driver.ver.6.22.english).

> MS-DOS 6.22 sigue siendo software de Microsoft. Internet Archive conserva
> software antiguo; el enlace se incluye con fines educativos.

## 1. Crear la máquina virtual

En VirtualBox, **Nueva**, y en tipo de sistema elige **Other → DOS**.
Estos son los valores que uso en el video:

| Parámetro | Valor |
|---|---|
| Memoria RAM | 32 MB |
| Disco duro | 50 MB |

MS-DOS 6.22 ocupa unos 6 MB en disco, así que 50 MB alcanzan para el
sistema y para instalar Windows 3.1 encima.

## 2. Arrancar desde el primer disquete

Monta la imagen del **disco 1** en la unidad de disquete de la máquina
virtual (**Dispositivos → Unidades de disquete**) y enciéndela. VirtualBox
arranca primero desde el disquete y el instalador se abre solo.

## 3. Preparar el disco duro

El instalador detecta que el disco está vacío y ofrece **configurar el
espacio no asignado**. Acepta la opción recomendada: crea la partición,
reinicia la máquina virtual y le da formato automáticamente.

## 4. Copiar los archivos

Confirma la configuración regional (fecha, hora, país y teclado) y el
directorio de instalación, `C:\DOS`. El instalador copia los archivos y
pide los **discos 2 y 3** en orden: cámbialos desde **Dispositivos →
Unidades de disquete** cuando lo indique.

## 5. Primer arranque

Al terminar, el instalador pide retirar el disquete. Desmonta la imagen y
reinicia: la máquina arranca desde el disco duro.

```
Starting MS-DOS...

HIMEM is testing extended memory...done.

C:\>C:\DOS\SMARTDRV.EXE /X
C:\>
```

`HIMEM` gestiona la memoria extendida y `SMARTDRV` es la caché de disco;
ambos los configura el instalador en `CONFIG.SYS` y `AUTOEXEC.BAT`. El
indicador `C:\>` confirma que MS-DOS quedó instalado.

## Siguiente paso

Con MS-DOS funcionando, la máquina virtual está lista para
[instalar Windows 3.1]({{ '/windows-31-virtualbox/' | relative_url }}),
el siguiente video de la serie.
